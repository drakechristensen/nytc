// TODO:
// - Why is click event triggered two times
// - Also remove HTML5 local storage
// - Reload current tab
// - add credits for extrapolateURLFromCookie
// - create git repository
// - publish on github
// - is having this enabled screwing up the Ads Block Plus extension?

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('nytimes') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);