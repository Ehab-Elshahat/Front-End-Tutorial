let numbers = document.querySelectorAll(`.number`);
let section = document.querySelector(".container");
let started = false;

window.onscroll = function () {
  if (window.scrollY  >= section.offsetTop - 200) {
    if (!started) {
      numbers.forEach((num) => startCounter(num));
    }
    started = true;
  }
};

function startCounter(el) {
  let goal = el.dataset.target;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 5000 / goal);
}
