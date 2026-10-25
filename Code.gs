/*
 * Copyright (c) 2026 derliang. All rights reserved.
 * Non-commercial use only. Sheng Kung Girls' High School
 * students and staff may use this software free of charge
 * for non-commercial educational purposes.
 * Other schools must obtain authorization by email.
 * Contact: derliang@gmail.com
 * See LICENSE.md for full terms.
 */
/**
 * 處理 GET 請求，回傳指定的 HTML 檔案
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('段考小幫手 v2.29.1') // 版號需與 index.html 的 APP_VERSION 同步
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) // 允許在 Iframe 中運行
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
