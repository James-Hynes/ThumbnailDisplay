document.addEventListener('DOMContentLoaded', function() {
  var img = document.getElementById('thumbnail');
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
    var thumb_url = tabs[0].url.split('https://www.youtube.com/watch?v=')[1];
    img.src = `https://i.ytimg.com/vi/${thumb_url}/hqdefault.jpg`;
    document.getElementById('thumbnail_link').href = `https://i.ytimg.com/vi/${thumb_url}/maxresdefault.jpg`;;
  });

});
