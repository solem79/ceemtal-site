// COUNTER WITH "+" SIGN
const counters = document.querySelectorAll(".counter");
let started = false;

function runCounter() {
  if (started) return;

  const section = document.querySelector("#stats");
  const position = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 100;

      const update = () => {
        if (count < target) {
          count += speed;
          counter.innerText = Math.ceil(count) + '+';
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + '+';
        }
      };

      update();
    });

    started = true;
  }
}

window.addEventListener("scroll", runCounter);
