const toDoForm = document.querySelector("#todo-form");
const toDoImform = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-List");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoImform.value;
  toDoImform.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
