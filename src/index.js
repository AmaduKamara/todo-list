import './main.css';
import clearListContainer from './utils/clear-container.js';
import checkAndUncheckTodo from './utils/check-uncheck-todo.js';
import clearAllCompletedTodos from './utils/clear-all-completed-todos.js';
import editTodo from './utils/edit.js';

// Get HTML elements
const listContainer = document.querySelector('[data-lists]');
const newTodoForm = document.querySelector('[data-new-todo-form]');
const newTodoInput = document.querySelector('[data-new-todo-input]');

// Get clear all completed button
const clearButton = document.querySelector('[data-clear-all]');

// Local storage data
const localStorageTodos = 'todo.lists';
const todos = JSON.parse(localStorage.getItem(localStorageTodos)) || [];

const createList = (name) => ({
  id: Date.now().toString(),
  description: name,
  completed: false,
  index: todos.length + 1,
});

const save = () => {
  localStorage.setItem(localStorageTodos, JSON.stringify(todos));
};

const handleRender = () => {
  clearListContainer(listContainer);

  const todos = JSON.parse(localStorage.getItem(localStorageTodos)) || [];

  // Looping through the list
  todos.forEach((todo) => {
    // Creating li element to be append to the listContainer
    const listElement = document.createElement('li');
    listElement.classList.add('todo');
    listElement.setAttribute('data-todo-item', todo.id);

    if (todo.completed) {
      listElement.innerHTML = `
      <div class="check-div">
        <input type="checkbox" checked class="check-box" />
      </div>
      <div class="view">
        <input class="todo-desc linethrough" value="${todo.description}" data-edited-todo id="${todo.id}"/>
      </div>
      <span class="material-icons move-icon">more_vert</span>
    `;
    } else {
      listElement.innerHTML = `
      <div class="check-div">
        <input type="checkbox" class="check-box" />
      </div>
      <div class="view">
        <input class="todo-desc" value="${todo.description}" data-edited-todo id="${todo.id}"/>
      </div>
      <span class="material-icons move-icon">more_vert</span>
    `;
    }
    listContainer.appendChild(listElement);
  });
  checkAndUncheckTodo(todos, localStorageTodos);

  editTodo(localStorageTodos);
};

const handleSaveAndRender = () => {
  save();
  handleRender();
};

newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = newTodoInput.value.trim();
  if (todo === null || todo === '') return;
  const list = createList(todo); // Create new list
  newTodoInput.value = null; // Reset the input field
  todos.push(list); // add the list to the todos array
  handleSaveAndRender();
});

// Clear all completed todos upon click
clearButton.addEventListener('click', () => {
  clearAllCompletedTodos(localStorageTodos);
  handleRender();
});

handleRender();
