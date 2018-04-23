window.onload = function() {



var visibleY = function(el){
  var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height,
    el = el.parentNode;
  do {
    rect = el.getBoundingClientRect();
    if (top <= rect.bottom === false) return false;
    // Check if the element is out of view due to a container scrolling
    if ((top + height) <= rect.top) return false
    el = el.parentNode;
  } while (el != document.body);
  // Check its within the document viewport
  return top <= document.documentElement.clientHeight;
};

// Stuff only for the demo
function attachEvent(element, event, callbackFunction) {
    if (element.addEventListener) {
        element.addEventListener(event, callbackFunction, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + event, callbackFunction);
    }
};

var update = function(){
    if(visibleY(document.getElementById('projects_text'))) {
      document.getElementById('projects_nav').style.color = "#c7ce7d";
    }
    else if (!visibleY(document.getElementById('projects_text'))) {
      document.getElementById('projects_nav').style.color = "white";
    }
    //
    if(visibleY(document.getElementById('home_text'))) {
      document.getElementById('home_nav').style.color = "#c7ce7d";
    }
    else if (!visibleY(document.getElementById('home_text'))) {
      document.getElementById('home_nav').style.color = "white";
    }
    //
    if(visibleY(document.getElementById('aboutme_text'))) {
      document.getElementById('aboutme_nav').style.color = "#c7ce7d";
    }
    else if (!visibleY(document.getElementById('aboutme_text'))) {
      document.getElementById('aboutme_nav').style.color = "white";
    }
    //
    if(visibleY(document.getElementById('contact_text'))) {
      document.getElementById('contact_nav').style.color = "#c7ce7d";
    }
    else if (!visibleY(document.getElementById('contact_text'))) {
      document.getElementById('contact_nav').style.color = "white";
    }
    //

};
attachEvent(document.getElementById('info_box'), "scroll", update);
attachEvent(window, "resize", update);
update();
};

function changeColor (){

// randomizer
var bg_red = Math.floor(Math.random() * 256);  // random from range 0 to 255
var bg_green = Math.floor(Math.random() * 256);  // random from range 0 to 255
var bg_blue = Math.floor(Math.random() * 256);  // random from range 0 to 255

// combine into string
var rand_color = "rgba("+ bg_red +", "+bg_green+", "+bg_blue+", 1)";
var rand_color_trans = "rgba("+ bg_red +", "+bg_green+", "+bg_blue+", .4)";

console.log(rand_color);

  //change elements
  var change1 = document.getElementsByClassName('text_box');
  for (var i = 0; i < change1.length; i++) {
  change1[i].style.background = rand_color;
}

  var change2 = document.getElementById('navbar_container');
  change2.style.background = rand_color_trans;


}
