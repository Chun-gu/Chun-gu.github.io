const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad() {
  console.log("loading finished");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./toDoImage/${imgNumber + 1}.jpg`;
  image.classList.add("bgImg");
  body.appendChild(image);
  //image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
