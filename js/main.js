window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
        document.getElementById("bar").style.width = "100%";
        document.getElementById("bar").style.position = "fixed";
        document.getElementById("bar").style.top = "0";
    } else {
        document.getElementById("bar").style.width = "70%";
        document.getElementById("bar").style.position = "absolute";
        document.getElementById("bar").style.top = "";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
