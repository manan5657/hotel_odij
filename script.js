const animH = document.querySelector(".h2-fg");
var clutter = "";

animH.textContent.split("").forEach(function (elem) {
  clutter += `<span>${elem}</span>`;
});

animH.innerHTML = clutter;

const secAnim = document.querySelector(".h2-fg-2");
var clutter2 = "";

secAnim.textContent.split("").forEach(function (elem) {
  clutter2 += `<span>${elem}</span>`;
});

secAnim.innerHTML = clutter2;

var tl = gsap.timeline();
tl.from(".main-logo", {
  stagger: 1,
  duration: 1.6,
  opacity: 0,
  ease: "expo.inOut",
  y: -100,
});
tl.from(".hero>.str-d", {
  duration: 1.6,
  //   delay: 1,
  scale: 0.6,
  ease: "power3.inOut",
});
tl.from("nav", {
  stagger: 1,
  ease: "power2.inOut",
  duration: 1,
  opacity: 0,
  y: -50,
});

gsap.from(".anim-mid>.h2-fg>span", {
  scrollTrigger: {
    trigger: `.anim-mid>.h2-fg>span`,
    scroller: `body`,
    // markers: true,
    start: `top 90%`,
    end: `bottom 10%`,
    scrub: 3,
  },
  stagger: 0.4,
  opacity: 0,
  duration: 4,
});

gsap.from(".u-icon--separator-main", {
  scrollTrigger: {
    trigger: `.u-icon--separator-main`,
    scroller: `body`,
    // markers: true,
    start: `top 60%`,
    end: `bottom 5%`,
    scrub: 2.5,
  },
  duration: 2,
  left: "0px",
});
gsap.from(".u-icon--separator-secondary", {
  scrollTrigger: {
    trigger: `.u-icon--separator-secondary`,
    scroller: `body`,
    // markers: true,
    start: `top 60%`,
    end: `bottom 5%`,
    scrub: 2.5,
  },
  duration: 1.2,
  left: "0px",
});

gsap.from(".anim-mid>.h2-bg-2>span", {
  scrollTrigger: {
    trigger: `.anim-mid>.h2-bg-2>span`,
    scroller: `body`,
    // markers: true,
    start: `220% 50%`,
    end: `240% 20%`,
    scrub: 2.5,
  },
  stagger: 0.8,
  opacity: 0,
  duration: 2,
});

gsap.from(".left-ctr-exp>h4", {
  scrollTrigger: {
    trigger: `.left-ctr-exp>h4`,
    scroller: `body`,
    // markers: true,
    start: `-280% 50%`,
    end: `-260% 20%`,
    scrub: 3,
  },
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.inOut",
});

gsap.from(".left-ctr-exp>h3", {
  scrollTrigger: {
    trigger: `.left-ctr-exp>h3`,
    scroller: `body`,
    // markers: true,
    start: `-980% 50%`,
    end: `-960% 20%`,
    scrub: 3,
  },
  opacity: 0,
  y: 100,
  ease: "power3.inOut",
  duration: 1,
});

gsap.from(".left-ctr-exp>img", {
  scrollTrigger: {
    trigger: `.left-ctr-exp>img`,
    scroller: `body`,
    // markers: true,
    start: `-105% 50%`,
    end: `-90% 20%`,
    scrub: 3,
  },
  stagger: 0.6,
  opacity: 0,
  ease: "power3.inOut",
  y: 200,
  duration: 2.4,
});

const tln = gsap.timeline({ paused: true });
let path = document.querySelector("path");

function revealMenu() {
  revealMenuItems();

  const toggleBtn = document.querySelector(".menu>img");

  toggleBtn.onclick = (e) => {
    tln.reversed(!tln.reversed());
  };
}
revealMenu();

function revealMenuItems() {
  const end = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const start = "M0 1005S175 995 500 995s500 5 500 5V0H0Z";

  const power2 = "power2.inOut";
  const power4 = "power4.inOut";

  tl.to(
    path,
    0.8,
    {
      attr: {
        d: start,
      },
      ease: power2.easeIn,
    },
    "<"
  ).to(
    path,
    0.8,
    {
      attr: {
        d: end,
      },
      ease: power2.easeIn,
    },
    "-0.5"
  );
}
