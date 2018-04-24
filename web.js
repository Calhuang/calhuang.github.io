var color_rand = "#c7ce7d";
var rotate_bool = 0;

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
      document.getElementById('projects_nav').style.color = color_rand;
    }
    else if (!visibleY(document.getElementById('projects_text'))) {
      document.getElementById('projects_nav').style.color = "white";
    }
    //
    if(visibleY(document.getElementById('home_text'))) {
      document.getElementById('home_nav').style.color = color_rand;
    }
    else if (!visibleY(document.getElementById('home_text'))) {
      document.getElementById('home_nav').style.color = "white";
    }
    //
    if(visibleY(document.getElementById('aboutme_text'))) {
      document.getElementById('aboutme_nav').style.color = color_rand;
    }
    else if (!visibleY(document.getElementById('aboutme_text'))) {
      document.getElementById('aboutme_nav').style.color = "white";
    }
    //
    if(visibleY(document.getElementById('contact_text'))) {
      document.getElementById('contact_nav').style.color = color_rand;
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function changeColor (){

  // animation
  if (rotate_bool == 0) {
  document.getElementById('button_cb2').style.WebkitTransform = "rotate(360deg)";
  rotate_bool = 1;
} else {
  document.getElementById('button_cb2').style.WebkitTransform = "rotate(0deg)";
  rotate_bool = 0;
}

// randomizer
var bg_red = getRandomInt(100,256);  // random from range 0 to 255
var bg_green = getRandomInt(100,256);  // random from range 0 to 255
var bg_blue = getRandomInt(100,256);  // random from range 0 to 255

var bg_red_dark = Math.floor(Math.random() * 100);  // random from range 0 to 255
var bg_green_dark = Math.floor(Math.random() * 100);  // random from range 0 to 255
var bg_blue_dark = Math.floor(Math.random() * 100);  // random from range 0 to 255

var hsluv_hue_rand = getRandomInt(0,361);
var hsluv_sat_rand = getRandomInt(80,101);
var hsluv_light_rand = getRandomInt(60,80);

var hsluv_hue_rand_dark = getRandomInt(0,361);
var hsluv_sat_rand_dark = getRandomInt(80,101);
var hsluv_light_rand_dark = getRandomInt(30,40);

var hsluv_color = window.hsluv.hsluvToHex([hsluv_hue_rand, hsluv_sat_rand, hsluv_light_rand]);
var hsluv_color_dark = window.hsluv.hsluvToHex([hsluv_hue_rand_dark, hsluv_sat_rand_dark, hsluv_light_rand_dark]);
var hsluv_color2 = window.hsluv.hsluvToRgb([hsluv_hue_rand, hsluv_sat_rand, hsluv_light_rand]);
// color_rand = window.hsluv.hsluvToHex([getRandomInt(0,361), getRandomInt(80,101), getRandomInt(70,90)]);
color_rand = hsluv_color;



// combine into string
var rand_color = "rgba("+ bg_red +", "+bg_green+", "+bg_blue+", 1)";
var rand_color_dark = "rgba("+ bg_red_dark +", "+bg_green_dark+", "+bg_blue_dark+", 1)";
var rand_color_trans = "rgba("+ hsluv_color2[0] +", "+hsluv_color2[1]+", "+hsluv_color2[2]+", .4)";
var hsla_color = "rgba("+ hsluv_hue_rand +", "+hsluv_sat_rand+", "+hsluv_light_rand+", .4)";



  //change elements
  var change1 = document.getElementsByClassName('text_box');
  for (var i = 0; i < change1.length; i++) {
  change1[i].style.background = hsluv_color;
}

  var change2 = document.getElementById('navbar_container');
  change2.style.background = hsla_color;
  var change2 = document.getElementById('profile');
  change2.style.borderColor= hsluv_color;

  var change3 = document.getElementsByClassName('text_box2');
  for (var j = 0; j < change3.length; j++) {
  change3[j].style.background = hsluv_color_dark;
}


}
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var mouseHue = (((x - 0) * (360 - 0)) / (document.getElementById("profile").offsetWidth - 0)) + 0;
    console.log(mouseHue);
    var hsluv_sat_rand_prof = getRandomInt(90,101);
    var hsluv_color_prof = window.hsluv.hsluvToHex([mouseHue, hsluv_sat_rand_prof, 90]);
    document.getElementById("profile").style.borderColor = "hsla("+mouseHue+",100% ,50%,1.0)";

}

function clearCoor() {
    document.getElementById("profile").style.borderColor = "#c7ce7d";
}
