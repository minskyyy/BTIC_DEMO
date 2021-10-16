function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("reveal_fromLeft")) {
    x = -30;
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
  if (document.getElementById("loader") !=null) {
    setTimeout(function() {
      document.getElementById("loader").style.visibility = 'visible';
    }, 5000);
  }
}

initialSetup();

function changeModel(button) {
  var list;

    if(button=='SZ1'){
    //Remove Display none class
    document.getElementById("digikam").style.display = "block";
    changeContent(1)
//      FadeInOut('out');

    fadeOutEffect("hideModel",20);
    document.getElementById("loader").visibility = 'visible!important';
    setTimeout(() => {document.getElementById("modelType").setAttribute("src", "images/scene.glb")}, 600);
    setTimeout(() => {document.getElementById("loader").visibility = 'hidden!important'}, 1400);
    setTimeout(() => {fadeInEffect("hideModel",20)}, 1600);
//      setTimeout(() => {FadeInOut('in'); }, 3000);
  }
  else if (button=='SZ2'){
    //Block sofia
    document.getElementById("digikam").style.display = "none";

    changeContent(2)
//    FadeInOut('out');
    fadeOutEffect("hideModel",20);
    document.getElementById("loader").visibility = 'visible!important';
    setTimeout(() => {document.getElementById("modelType").setAttribute("src", "images/turbine.glb")}, 600);
    setTimeout(() => {document.getElementById("loader").visibility = 'hidden!important'}, 1400);

    setTimeout(() => {fadeInEffect("hideModel",20)}, 1600);
//    setTimeout(() => {FadeInOut('in'); }, 3000);

  }
}

function fadeOutEffect(path, time) {
    var fadeTarget = document.getElementById(path);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, time);
}



function fadeInEffect(path, time, delay) {
          //Delay Start
            setTimeout(() => {
              //Function Start
              var element = document.getElementById(path);
              var op = 0.1;  // initial opacity
              //element.style.display = 'block';
              if (element != null){
                var timer = setInterval(function () {
                    if (op >= 1){
                        clearInterval(timer);
                    }
                    element.style.opacity = op;
                    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                    op += op * 0.1;
                }, time);
              }

            //Function End
            }, delay);
            //Delay End
        }

function pageContentLoad(path1, path2, path3, path4){
  let paths = [path1, path2, path3, path4];
  let time = 20;
  let delay = 50;
  for (var i = 0; i < paths.length; i++) {
    fadeInEffect(paths[i], time, delay);
    delay+=100;
    time+=5;
  }
}
