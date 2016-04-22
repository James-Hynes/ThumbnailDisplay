document.addEventListener('DOMContentLoaded', function() {
  var img = document.getElementById('thumbnail');
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
    img.src = `https://i.ytimg.com/vi/${tabs[0].url.split('https://www.youtube.com/watch?v=')[1]}/maxresdefault.jpg`;
  });
});
