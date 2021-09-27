!function(){"use strict";chrome.tabs.onUpdated.addListener((function(e,s,t){s.url&&s.url.match(/pull\/\d*$/i)&&chrome.tabs.sendMessage(e,{message:"redirect",changeInfo:{...s}})}))}();
