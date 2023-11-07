const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 2.5
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
        left: dets.x - 250,
        top: dets.y - 250,
    });
});

}

function loadingAnimation(){
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
    });
     gsap.from("#page1 #video-container", {
         opacity:0,
         delay: 0.5,
         duration: 0.5,
     });
}

videoconAnimation();
loadingAnimation();
