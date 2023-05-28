
// When the user scrolls the page, execute myFunction 
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator
// Licence: MIT
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("reading-progress-bar").style.width = scrolled + "%";
}


// Scroll Percentage Counter
// Licence: MIT

!function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.Progress=t()}(this,function(){"use strict";var e,t,n,o=window,i=document,r=document.querySelector(".animated-circle"),s=document.querySelector(".progress-count");function c(){e=o.innerHeight,t=i.body.offsetHeight,n=t-e}function d(){var e,t;c(),e="scroll",(t=i.createEvent("HTMLEvents")).initEvent(e,!0,!1),o.dispatchEvent(t)}return{init:function(){var t;c(),o.addEventListener("scroll",function(){var e;t=this.pageYOffset||i.documentElement.scrollTop,t=Math.max(0,Math.min(1,t/n)),e=t,r.style.strokeDashoffset=126-126*e,s.innerHTML=Math.round(100*e)+"%"},!1),["DOMContentLoaded","load","resize"].map(function(e){o.addEventListener(e,d,!1)})}}});



/*jslint browser: true*/
/*global define, module, exports*/
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else if (typeof exports === 'object') {
      module.exports = factory();
  } else {
      root.Progress = factory();
  }
}(this, function () {
  'use strict';
  var $w         = window,
      $d         = document,
      $circ      = document.querySelector('.animated-circle'),
      $progCount = document.querySelector('.progress-count'),
      init,
      wh,
      h,
      sHeight;

  function trigger(eventName) {
      var event = $d.createEvent('HTMLEvents');
      event.initEvent(eventName, true, false);

      $w.dispatchEvent(event);
  }

  function updateProgress(perc) {
      var circle_offset = 126 * perc;

      $circ.style.strokeDashoffset = 126 - circle_offset;

      $progCount.innerHTML = (Math.round(perc * 100) + "%");
  }

  function setSizes() {
      wh = $w.innerHeight;
      h  = $d.body.offsetHeight;

      sHeight = h - wh;
  }

  function handler() {
      setSizes();
      trigger('scroll');
  }

  init = function () {
      var events = ['DOMContentLoaded', 'load', 'resize'], top, perc;

      setSizes();

      $w.addEventListener('scroll', function () {
          top  = this.pageYOffset || $d.documentElement.scrollTop;
          perc = Math.max(0, Math.min(1, top / sHeight));

          updateProgress(perc);
      }, false);

      events.map(function (event) {
          $w.addEventListener(event, handler, false);
      });
  };

  return {
      init : init
  };
}));