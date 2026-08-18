/* Copyright (c) 2026 Erika M. Kiss — MIT License, see LICENSE. */

/**
 * Phonics progress collector.
 *
 * Paste this into a Google Sheet's Apps Script editor and deploy it as a Web
 * App. Student devices post finished rounds here; the teacher's progress page
 * reads them all back. Setup steps are in the README.
 *
 * Nothing here stores anything outside your own Google Drive.
 */

var SHEET_NAME = 'Rounds';
var HEADERS = ['Received', 'Student', 'Level', 'Date', 'Week',
               'Activity', 'Correct', 'Total', 'Stars', 'Tricky words', 'Device',
               'Round id'];

/**
 * The tab we append to, created with headers on first use.
 *
 * 'Round id' was added later, so a Sheet that has been collecting rounds
 * already will be one column short. Widen it in place rather than asking
 * anyone to edit a spreadsheet by hand — rows written before the change
 * simply have that cell empty, which is handled when they're read back.
 */
function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    return sheet;
  }

  var width = sheet.getLastColumn();
  if (width < HEADERS.length) {
    if (sheet.getMaxColumns() < HEADERS.length) {
      sheet.insertColumnsAfter(sheet.getMaxColumns(), HEADERS.length - sheet.getMaxColumns());
    }
    var missing = HEADERS.slice(width);
    sheet.getRange(1, width + 1, 1, missing.length)
         .setValues([missing])
         .setFontWeight('bold');
  }
  return sheet;
}

/**
 * A device finished a round. Body is JSON:
 *   { student, level, d, w, a, r, t, s, tricky[], device }
 *
 * Several students can finish at the same moment, so take a lock before
 * appending — without it, concurrent writes can land on the same row.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return json_({ ok: false, error: 'busy' });
  }

  try {
    var body = JSON.parse(e.postData.contents);
    var rounds = body.rounds || [body];   // accept one round or a queued batch
    var sheet = getSheet_();
    var now = new Date();

    rounds.forEach(function (r) {
      sheet.appendRow([
        now,
        String(r.student || '').slice(0, 60),
        String(r.level || ''),
        String(r.d || ''),
        Number(r.w) || '',
        String(r.a || ''),
        Number(r.r) || 0,
        Number(r.t) || 0,
        Number(r.s) || 0,
        (r.tricky || []).join(', ').slice(0, 500),
        String(r.device || '').slice(0, 60),
        String(r.id || '').slice(0, 60)
      ]);
    });

    return json_({ ok: true, added: rounds.length });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/**
 * The teacher's progress page asks for everything.
 *
 * Called with ?callback=name so the browser can load it as a script — a plain
 * fetch to Apps Script trips over cross-origin rules, and this sidesteps that
 * entirely rather than fighting it.
 */
function doGet(e) {
  var out;
  try {
    var have = e && e.parameter && e.parameter.have;
    out = have ? confirmIds_(have) : allRounds_();
  } catch (err) {
    out = { ok: false, error: String(err) };
  }

  var callback = e && e.parameter && e.parameter.callback;
  if (callback && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(callback)) {
    return ContentService
      .createTextOutput(callback + '(' + JSON.stringify(out) + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return json_(out);
}

/** Everything in the Sheet, for the teacher's progress page. */
function allRounds_() {
  var sheet = getSheet_();
  var last = sheet.getLastRow();
  var rows = last < 2 ? [] : sheet.getRange(2, 1, last - 1, HEADERS.length).getValues();
  var tz = Session.getScriptTimeZone();

  return {
    ok: true,
    rounds: rows.map(function (row) {
      return {
        /* Rows written before round ids existed have nothing to tell two
           identical scores apart except the moment they arrived, so send
           that along as a fallback. */
        received: row[0] instanceof Date ? Utilities.formatDate(row[0], tz, 'yyyy-MM-dd HH:mm:ss') : String(row[0]),
        student: row[1],
        level:   row[2],
        d:       row[3] instanceof Date ? Utilities.formatDate(row[3], tz, 'yyyy-MM-dd') : String(row[3]),
        w:       row[4],
        a:       row[5],
        r:       row[6],
        t:       row[7],
        s:       row[8],
        tricky:  row[9] ? String(row[9]).split(', ').filter(String) : [],
        device:  row[10],
        id:      row[11] ? String(row[11]) : ''
      };
    })
  };
}

/**
 * A student device asking which of the rounds it just sent actually landed.
 * Only ids come in and only ids go out — no names travel in an address.
 *
 * This is what lets a Chromebook keep a round safely in its queue when the
 * send was turned away. Without an answer it must assume nothing arrived.
 */
function confirmIds_(csv) {
  var asked = String(csv).split(',').filter(String).slice(0, 300);
  if (!asked.length) return { ok: true, have: [] };

  var sheet = getSheet_();
  var last = sheet.getLastRow();
  if (last < 2) return { ok: true, have: [] };

  var col = HEADERS.indexOf('Round id') + 1;
  var vals = sheet.getRange(2, col, last - 1, 1).getValues();
  var here = {};
  vals.forEach(function (row) { if (row[0]) here[String(row[0])] = true; });

  return { ok: true, have: asked.filter(function (id) { return here[id]; }) };
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
