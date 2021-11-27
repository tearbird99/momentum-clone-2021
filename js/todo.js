const toDoForm = document.querySelector("#todo-form");
const toDoImform = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const toDoBtn = document.querySelector("#todo-button");
const toDoBubble = document.querySelector("#todo-bubble");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoImform.value;
  toDoImform.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function handleToDoBtnClick(event) {
  event.preventDefault();
  toDoBubble.classList.toggle("hidden");
  toDoBtn.classList.toggle("opacity");
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoBtn.addEventListener("click", handleToDoBtnClick);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
