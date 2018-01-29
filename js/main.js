/*eslint-env browser*/
/*eslint "no-console": "off"*/
/*global $ */

$(document).ready(function () {

  window.onscroll = function () {
    scrollFunction()
  };

  styleButtons();

});


function scrollFunction() {

  var bar = document.getElementById("bar");


  if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
    bar.style.width = "100%";
    bar.style.position = "fixed";
    bar.style.top = "0";
  } else {
    bar.style.width = "70%";
    bar.style.position = "absolute";
    bar.style.top = "";
  }
}

function styleButtons() {

  $("#getintouch").mouseenter(function () {

    $("#getintouch").css({"background-color": "white","color": "black"})

  });

   $("#getintouch").mouseleave(function () {

    $("#getintouch").css({"background-color": "transparent","color": "white"})

  });

}
