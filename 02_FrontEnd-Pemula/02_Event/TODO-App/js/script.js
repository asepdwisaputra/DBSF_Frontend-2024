document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });
});

function addTodo() {
  const textTodo = document.getElementById("title").value;
  const timestamp = document.getElementById("date").value;

  const generateID = generateId();
  const todoObject = generateTodoObject(generateID, textTodo, timestamp, false);
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function generateId() {
  let result = +new Date();
  console.log(result);
  return result;
}

function generateTodoObject(id, task, timestamp, isComplete) {
  return {
    id,
    task,
    timestamp,
    isComplete,
  };
}

const todos = [];
const RENDER_EVENT = "render-todo";

document.addEventListener(RENDER_EVENT, () => {
  console.log(todos);
});
