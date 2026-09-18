/**
 * FREE Google Sheet sync (optional — so committee can open one shared Excel-like sheet online)
 *
 * Setup (about 5 minutes, no payment):
 * 1. Create a Google Sheet with headers in row 1:
 *    Timestamp | Name | Gotra | Nakshatra | Mobile | Address | Seva | Day | Amount | UTR | Language
 * 2. Extensions → Apps Script
 * 3. Paste this entire file, Save
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL into CONFIG.googleScriptUrl in script.js
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || "",
      data.gotra || "",
      data.nakshatra || "",
      data.mobile || "",
      data.address || "",
      data.seva || "",
      data.day || "",
      data.amount || "",
      data.txn || "",
      data.lang || "",
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Durgadevi seva webhook OK");
}
