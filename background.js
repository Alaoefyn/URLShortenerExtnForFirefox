chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var url = window.location.href; chrome.runtime.sendMessage({action: "shorten_url", url: url});'
  });
});
