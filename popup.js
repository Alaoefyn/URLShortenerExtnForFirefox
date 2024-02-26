document.getElementById('shorten').addEventListener('click', function() {
  chrome.tabs.executeScript({
    code: 'var url = window.location.href; chrome.runtime.sendMessage({action: "shorten_url", url: url});'
  });
});
