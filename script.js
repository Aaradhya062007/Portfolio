const words = ["Aspiring Developer 🚀", "Learning C & C++", "Future Engineer"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = words[i];

  if (!deleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j < 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 40 : 80);
}

type();

/* Scroll animation */
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});