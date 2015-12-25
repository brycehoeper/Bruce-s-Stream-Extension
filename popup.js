document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkCam'); //the button ID 
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://shouldimovetoportland.com/c4mino?bm';  //This is where I hosted c4mino.html
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);


document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPar');  //the button ID 
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://shouldimovetoportland.com/parrill540?bm';  //You can clone c4mino.html to fit your favorite streamer
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);

