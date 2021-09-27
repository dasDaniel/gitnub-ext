chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url && changeInfo.url.match(/pull\/\d*$/i)) {
      chrome.tabs.sendMessage(tabId, {
        message: "redirect",
        changeInfo: { ...changeInfo },
      });
    }
  });
  