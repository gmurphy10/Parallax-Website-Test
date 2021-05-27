// create new scroll Magic controller.
let controller = new ScrollMagic.Controller();
// Chain together multiple animations using timeline
let timeline = new TimelineMax();

timeline
  .to('.rock', 10, {y: -300})
  .to('.girl', 10, {y: -200}, '-=10')
  .fromTo('.bg1', { y: -50 }, { y: 0, duartion: 3 }, "-=3")
  .to('.content', 3, { top: "0%" }, "-=10")
  // .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  // .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

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
