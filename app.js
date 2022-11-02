gsap.registerPlugin(ScrollTrigger);

const intro = document.querySelector(".introContent");

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

//hamburger Menu functionality
const burger = document.querySelector(".hamBurger");
burger.addEventListener("click", function () {
  burger.classList.toggle("change");
});
