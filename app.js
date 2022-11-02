gsap.registerPlugin(ScrollTrigger);

const intro = document.querySelector(".introContent");
const outro = document.querySelector(".community");

gsap.to(intro, {
  backgroundColor: "rgb(53, 53, 53)",
  color: "white",

  scrollTrigger: {
    trigger: intro,
    toggleActions: "restart pause reverse continue",
    start: "top 40%",

    scrub: 1,
  },
});

gsap.to(outro, {
  backgroundColor: "rgb(53, 53, 53)",
  color: "white",

  scrollTrigger: {
    trigger: outro,
    toggleActions: "restart pause reverse continue",
    start: "top 20%",

    scrub: 1,
  },
});

//hamburger Menu functionality
const burger = document.querySelector(".hamBurger");
const burger2 = document.querySelector(".hamBurger2");
const burger3 = document.querySelector(".hamBurger3");
const socialTab = document.querySelector(".socials");

burger.addEventListener("click", function () {
  burger.classList.toggle("change");
});

burger2.addEventListener("click", function () {
  socialTab.classList.add("drop");
  burger3.classList.add("change");
});

burger3.addEventListener("click", function () {
  socialTab.classList.remove("drop");
  burger3.classList.remove("change");
});
