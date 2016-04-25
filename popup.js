document.addEventListener('DOMContentLoaded', function() {
  var img = document.getElementById('thumbnail');
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
    var url = tabs[0].url;
    if(url.includes('https://www.youtube.com/watch?v=')) {
      var thumb_url = parseURL(url);
      img.src = `https://i.ytimg.com/vi/${thumb_url}/hqdefault.jpg`;
      document.getElementById('thumbnail_link').href = `https://i.ytimg.com/vi/${thumb_url}/maxresdefault.jpg`;
    }
  });
});

function parseURL(url) {
  return (url.match(/watch\?v=[^\&]+/)[0].replace('watch?v=', ''));
}
