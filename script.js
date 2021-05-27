// create new scroll Magic controller.
let controller = new ScrollMagic.Controller();
// Chain together multiple animations using timeline
let timeline = new TimelineMax();

timeline
  .to('.rock', 3, {y: -300})
  .to('.girl', 3, {y: -200}, '-=3')
  .to('.bg1', 3, { y: 50 }, "-=3")
  .to('.content', 3, { top: "0%" }, "-=10");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  // where does the animation start
  triggerHook: 0,
})
  // hookup animation to scene
  .setTween(timeline)
  // Pin page on top of container image
  .setPin("section")
  // connect to controller
  .addTo(controller);
