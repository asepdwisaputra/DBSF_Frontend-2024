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
  //   console.log(todos);

  const uncompletedTODOList = document.getElementById("todos");
  uncompletedTODOList.innerHTML = "";

  for (const todoItem of todos) {
    const todoElement = makeTodo(todoItem);
    uncompletedTODOList.append(todoElement);
  }
});

// "Yang harus dilakukan" view
function makeTodo(todoObject) {
  const textTitle = document.createElement("h2");
  textTitle.innerText = todoObject.task;

  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = todoObject.timestamp;

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);
  container.setAttribute("id", `todo-${todoObject.id}`);

  return container;
}
