/**
 * 處理 GET 請求，回傳指定的 HTML 檔案
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('段考小幫手_時鐘置頂')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) // 允許在 Iframe 中運行
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
