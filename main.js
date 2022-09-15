let todoItems = [];
let displayItems = [];
let currentFilter = "all";
const key = "todoItems";

function saveTodoList() {
  localStorage.setItem(key, JSON.stringify(todoItems));
}

function loadTodoItems() {
  const raw = localStorage.getItem(key);

  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

todoItems = loadTodoItems();
renderTodoList();

function onStatusChange(event) {
  const isCompleted = event.target.checked;
  const id = event.target.getAttribute("data-id");

  const index = todoItems.findIndex((item) => item.id == id);
  if (index >= 0) {
    todoItems[index].isCompleted = isCompleted;
  }

  saveTodoList();
  renderTodoList();
}

function onRemoveItem(event) {
  const id = event.target.getAttribute("data-id");
  todoItems = todoItems.filter((item) => item.id != id);

  saveTodoList();
  renderTodoList();
}

function renderTodoItem(item) {
  return `
  <li class="todo-item ${item.isCompleted ? "completed" : ""}">
    <input type="checkbox" data-id="${item.id}" ${
    item.isCompleted ? "checked" : ""
  } onchange="onStatusChange(event)">
    <label>${item.label}</label>
    <button type="button" data-id="${
      item.id
    }" onclick="onRemoveItem(event)"></button>
  </li>
  `;
}

function applyFilter() {
  if (currentFilter === "all") {
    displayItems = todoItems;
    return;
  }
  if (currentFilter === "active") {
    displayItems = todoItems.filter((item) => !item.isCompleted);
    return;
  }
  if (currentFilter === "completed") {
    displayItems = todoItems.filter((item) => item.isCompleted);
    return;
  }
}

function renderTodoList() {
  const tasksBox = document.querySelector(".todo-list");
  const todoCount = document.querySelector(".todo-count strong");

  tasksBox.innerHTML = "";
  let html = "";

  applyFilter();
  displayItems.forEach((item) => {
    html += renderTodoItem(item);
  });

  tasksBox.innerHTML = html;
  todoCount.innerText = displayItems.length;
}

function onFilterChange(event, filter) {
  console.log(event, filter);
  document.querySelectorAll(".filters li").forEach((item) => {
    item.classList.remove("selected");
  });
  event.target.classList.add("selected");
  currentFilter = filter;
  applyFilter();
  renderTodoList();
}

const taskInput = document.querySelector(".new-todo");
const clearButton = document.querySelector(".clear-completed");

taskInput.addEventListener("keydown", (event) => {
  const value = event.target.value.trim();
  if (event.key === "Enter" && value) {
    event.target.value = "";

    todoItems.unshift({
      label: value,
      isCompleted: false,
      id: todoItems.length + 1,
    });

    saveTodoList();
    renderTodoList();
  }
});

clearButton.addEventListener("click", () => {
  todoItems = todoItems.filter((item) => !item.isCompleted);
  displayItems = todoItems;
  saveTodoList();
  renderTodoList();
});
