"use strict";
const vivaldi = "mpognobbkildjkofajifpdfhcoklimli";
const filter = {urls: ["<all_urls>"], types:["main_frame"]};
function hi(info, state){
    chrome.runtime.sendMessage(vivaldi, {id:info.tabId, state:state}, console.log);
}
chrome.webRequest.onSendHeaders.addListener(info => {hi(info, "Requesting")}, filter);
chrome.webRequest.onResponseStarted.addListener(info => {hi(info, "PageLoading")}, filter);
chrome.webRequest.onCompleted.addListener(info => {hi(info, "Complete")}, filter);
