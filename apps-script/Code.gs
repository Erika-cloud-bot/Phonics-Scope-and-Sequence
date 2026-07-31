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
               'Activity', 'Correct', 'Total', 'Stars', 'Tricky words', 'Device'];

/** The tab we append to, created with headers on first use. */
function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
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
        String(r.device || '').slice(0, 60)
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
    var sheet = getSheet_();
    var last = sheet.getLastRow();
    var rows = last < 2 ? [] : sheet.getRange(2, 1, last - 1, HEADERS.length).getValues();

    out = {
      ok: true,
      rounds: rows.map(function (row) {
        return {
          student: row[1],
          level:   row[2],
          d:       row[3] instanceof Date ? Utilities.formatDate(row[3], Session.getScriptTimeZone(), 'yyyy-MM-dd') : String(row[3]),
          w:       row[4],
          a:       row[5],
          r:       row[6],
          t:       row[7],
          s:       row[8],
          tricky:  row[9] ? String(row[9]).split(', ').filter(String) : [],
          device:  row[10]
        };
      })
    };
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

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
