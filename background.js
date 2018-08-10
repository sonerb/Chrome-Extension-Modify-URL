chrome.webNavigation.onBeforeNavigate.addListener(function (obj) {

    var tabId = obj.tabId;
    var url = obj.url;

    if (url.indexOf("0wikipedia") < 0) {
        chrome.tabs.update(tabId, { url: url.replace('wikipedia', '0wikipedia') });
    }

}, { url: [{ hostContains: 'wikipedia' }] });