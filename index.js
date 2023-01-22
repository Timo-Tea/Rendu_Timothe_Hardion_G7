const heure = document.querySelector("#heure");

setInterval(() => {
  const date = new Date();
  heure.innerHTML =
    (date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());
}, 1000);

heure.classList.add("bleu");

window.addEventListener("keydown", (event) => {
  const top = window.getComputedStyle(Blitzø).top;
  if (event.key === "z") {
    Blitzø.style.top = `${parseInt(top) - 20}px`;
  } else if (event.key === "s") {
    Blitzø.style.top = `${parseInt(top) + 20}px`;
  }
});

let i = 0;
const Blitzø = document.querySelector(".Blitzø");
const interval = setInterval(() => {
  Blitzø.style.transform = `translatex(${i}px)`;
  i = i + 1;
  if (i >= window.innerWidth) {
    i = -100;
    //ou "i=0;"
    //c'est pour faire apparaitre le gif tout a gauche et un peu cacher
  }
});

Blitzø.addEventListener("mouseover", () => {
  const y = Math.floor(Math.random() * window.innerHeight);
  Blitzø.style.top = `${y}px`;
});

const button = document.querySelector("bouton");
const ici = document.querySelector(".ici");

button.addEventListener("click", function () {

  const y = Math.floor(Math.random() * window.innerHeight);
  
  ici.style.top = `${y}px`;
});

