const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingBox = document.querySelector("#greeting-box");
const loginBox = document.querySelector("#login-box");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  /*loginBox.classList.add(HIDDEN_CLASSNAME);
  greetingBox.classList.remove(HIDDEN_CLASSNAME);*/
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  loginBox.classList.add(HIDDEN_CLASSNAME);
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}.`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  greetingBox.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
