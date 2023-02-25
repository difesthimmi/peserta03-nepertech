AOS.init({
  duration: 800,
  offset: 160,
  once: true,
});

Splitting();

gsap.from("#jumbotron .container .row .col-md-6 p", {
  opacity: 0,
  y: -30,
  duration: 1,
  stagger: 0.6,
});
gsap.from(".light", {
  opacity: 0,
  x: 50,
  duration: 2.1,
});

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".box section");
let container = document.querySelector(".container-box");

const tween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  duration: 6,
  scrollTrigger: {
    trigger: ".box",
    pin: true,
    scrub: true,
    markers: true,
    end: `+=${container.offsetWidth}`,
  },
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: container,
  duration: 6000,
  triggerHook: 0,
})
  .setPin(container)
  .setTween(tween)
  // .addIndicators()
  .addTo(controller);

window.onscroll = function () {
  scrollFunction();
  navbar();
};

const footer = document.querySelector(".footer");

function scrollFunction() {
  if (
    document.body.scrollTop > 11300 ||
    document.documentElement.scrollTop > 11300
  ) {
    footer.style.background = "#fff";
  } else {
    footer.style.background = "#000";
  }
}

function navbar() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".navbar").style.background = "#030e0f";
    document.querySelector(".navbar").style.padding = "0 0";
  } else {
    document.querySelector(".navbar").style.background = "";
    document.querySelector(".navbar").style.padding = "10px 0";
  }
}

document.querySelector("#ragam-budaya").addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".img-parallax").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 1000;
    const y = (window.innerHeight - e.pageY * speed) / 1000;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
