
// #reading-progress-bar
// When the user scrolls the page, execute myFunction 
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator
// Licence: MIT
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("reading-progress-bar").style.width = scrolled + "%";
}


// https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



// open all links in new tabs with JS and without adding it to each link

window.onload = function(){
  var a = document.getElementById('links').getElementsByTagName('a');
  for (var i=0; i<a.length; i++){
      a[i].setAttribute('target', '_blank');
  }
}