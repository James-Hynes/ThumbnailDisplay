document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
    var url = tabs[0].url;
    if(url.includes('https://www.youtube.com/watch?v=')) {
      loadImage(url)
    } else {
      textEntry();
    }
  });
});

function parseURL(url) {
  return (url.includes('watch?v=') ? (url.match(/watch\?v=[^\&]+/)[0].replace('watch?v=', '')) : url)
}

function loadImage(url) {
  var img = document.getElementById('thumbnail');
  var thumb_id = parseURL(url);
  img.src = `https://i.ytimg.com/vi/${thumb_id}/hqdefault.jpg`;
  document.getElementById('thumbnail_link').href = `https://i.ytimg.com/vi/${thumb_id}/maxresdefault.jpg`;
}

function textEntry() {
  var input = document.createElement('INPUT');
  input.id = 'text-box';
  document.body.appendChild(input);
  input.addEventListener('keypress', function(info) {
    if(info['keyIdentifier'] === 'Enter') {
      loadImage(input.value);
      document.body.removeChild(document.getElementById('text-box'));
    }
  });
}
