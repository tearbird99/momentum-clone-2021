const toDoForm = document.querySelector("#todo-form");
const toDoImform = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoImform.value;
  toDoImform.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
