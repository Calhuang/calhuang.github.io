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
    targets: '#test1',
    scale: 1.5,
    elasticity: 500,
    direction: 'alternate',
    duration: 1000,
    // easing: 'easeInOutQuart'

  });
}