/*eslint-env browser*/
/*eslint "no-console": "off"*/
/*global $ */

console.log(location.pathname);

$(document).ready(function () {

  if (location.pathname == "/index.html" || location.pathname == "/MAXIMSOUND/") {
    window.onscroll = function () {
      scrollFunction()
    };
  }
  styleButtons();

});


function scrollFunction() {

  var bar = document.getElementById("bar");

  if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
    bar.style.width = "100%";
    bar.style.paddingLeft = "15%";
    bar.style.position = "fixed";
    bar.style.top = "0";
  } else {
    bar.style.width = "70%";
    bar.style.paddingLeft = ""
    bar.style.position = "absolute";
    bar.style.top = "";
  }
}

function styleButtons() {

  $("#getintouch").mouseenter(function () {

    $("#getintouch").css({
      "background-color": "white",
      "color": "black"
    })

  });

  $("#getintouch").mouseleave(function () {

    $("#getintouch").css({
      "background-color": "transparent",
      "color": "white"
    })

  });

}


function sendEmail() {

  var name = document.getElementById("jform_contact_name");
  var mail = document.getElementById("jform_contact_email");
  var destino = "jdomenechivars@gmail.com";
  var subject = document.getElementById("jform_contact_emailmsg");
  var message = document.getElementById("jform_contact_message")


}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("capishi");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
