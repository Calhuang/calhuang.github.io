var cssSelector = anime({
  targets: '#line',
  scaleX: 0,
  delay: 1000,
  direction: 'reverse',
  elasticity: 0,
  duration: 3000,
  easing: 'easeInOutQuart'
});

var top1 = anime({
  targets: '#me',
  direction: 'normal',
  opacity: 1,
  delay: 2900,
  translateY: '3vw',
  elasticity: 100,
  duration: 1000,
  easing: 'easeInOutQuart'


});
var top2 = anime({
  targets: '#projects',
  direction: 'normal',
  opacity: 1,
  delay: 3200,
  translateY: '3vw',
  elasticity: 100,
  duration: 1000,
  easing: 'easeInOutQuart'


});
var top3 = anime({
  targets: '#contact',
  direction: 'normal',
  opacity: 1,
  delay: 3500,
  translateY: '3vw',
  elasticity: 100,
  duration: 1000,
  easing: 'easeInOutQuart'


});


// var top4 = anime({
//   targets: '.navBar',
//   direction: 'normal',
//   opacity: 1,
//   delay: 3500,
//   translateY: '3vw',
//   elasticity: 100,
//   duration: 1000,
//   easing: 'easeInOutQuart'
//
//
// });
function hover1() {

  var me = anime({
    targets: '#box1',
    elasticity: 500,
    scale: 1.1,
    duration: 700,
    direction: 'alternate',
    easing: 'easeInOutQuart'

  });
}

function hover2() {

  var me = anime({
    targets: '#box2',
    elasticity: 500,
    scale: 1.1,
    duration: 700,
    direction: 'alternate',
    easing: 'easeInOutQuart'

  });
}

function hover3() {

  var me = anime({
    targets: '#box3',
    elasticity: 500,
    scale: 1.1,
    duration: 700,
    direction: 'alternate',
    easing: 'easeInOutQuart'

  });
}

var loopAlternate = anime({
  targets: '#tri',
  translateY: '2vw',
  loop: 10,
  duration: 1500,
  direction: 'alternate'
});
var meText = document.getElementById('meText');
var pros = document.getElementById('pros');





VisSense.VisMon.Builder(VisSense(meText, {
    fullyvisible: 0.75,
    hidden: 0.35,
  }))

  .on('fullyvisible', function(monitor) {
    // meText.style.opacity = 1;
    var textExpand = anime({

      targets: '#meText',
      scale: [0, 1],
      duration: 1000,
      elasticity: 300,
      // easing: 'easeInOutQuart'
    });




  })
  .on('hidden', function(monitor) {
    // meText.style.opacity = 0;
    var textExpand2 = anime({

      targets: '#meText',
      scale: [1, .1],
      duration: 1000,
      elasticity: 300,
      // easing: 'easeInOutQuart'
    });

  })


  .build()
  .start();
