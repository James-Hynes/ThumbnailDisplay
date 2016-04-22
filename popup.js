console.log('here');
document.addEventListener('DOMContentLoaded', function() {
  var query = { active: true, currentWindow: true };
  chrome.tabs.query(query, function(tab) {
    chrome.tabs.execute
  });
});

function callback() {
  //var currentTab = tabs[0];
  console.log(document.body.childNodes[0]);
  //console.log(currentTab);
}