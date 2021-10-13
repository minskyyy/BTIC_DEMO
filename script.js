function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  else if (elem.classList.contains("reveal_fromMid")) {
    x = 0;
    y = 0;
  }
  else if (elem.classList.contains("reveal_fromTop")) {
    x = 0;
    y = -100;
  }

  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      start : 'top 40% ',
      end: 'top 40%',
      //markers: true,
      onEnter: function() { animateFrom(elem) },
      onEnterBack: function() { },
      onLeave: function() { },
    });
  });
});
function initialSetup() {
    setTimeout(function() {
      document.getElementById("loader").style.display = 'none';
    }, 4800);
}

initialSetup();
