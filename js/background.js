const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
const boolBox = document.querySelector("#login-box");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

body.style.backgroundImage = `url(img/${chosenImage})`;
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";
