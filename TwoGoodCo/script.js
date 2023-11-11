  const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
      multiplier: 0.8
     });


function videoconAnimation() {
var videocon = document.querySelector("#video-container");

var playbtn = document.querySelector("#play");
videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
    });
});
videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
    });
});
videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 70,
    });
});

}

function loadingAnimation(){
    gsap.from("#page1 h1", {
        y:30,
        opacity:0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
    });
     gsap.from("#page1 #video-container", {
         y:30,
         scale:1,
         opacity:0,
         delay: 0.7,
         duration: 0.5,
     });
}

videoconAnimation();
loadingAnimation();

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
  
    // })
  
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();




