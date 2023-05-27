
// When the user scrolls the page, execute myFunction 
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("reading-progress-bar").style.width = scrolled + "%";
}