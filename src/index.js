import './main.css';
import clearListContainer from './utils/clear-container.js';

const listContainer = document.querySelector('[data-lists]');
const newTodoForm = document.querySelector('[data-new-todo-form]');
const newTodoInput = document.querySelector('[data-new-todo-input]');

const checkCompleBox = document.querySelector('.box');
const unCheckComplete = document.querySelector('.check');

const localStorageTodos = 'todo.lists';
const localStorageSelectedTodo = 'todo.completedTodoId';

const todos = JSON.parse(localStorage.getItem(localStorageTodos)) || [];
const selectedTodoId = localStorage.getItem(localStorageSelectedTodo);

const createList = (name) => ({
  id: Date.now().toString(),
  description: name,
  completed: false,
});

const save = () => {
  localStorage.setItem(localStorageTodos, JSON.stringify(todos));
};

const handleRender = () => {
  clearListContainer(listContainer);
  // Looping through the list
  todos.forEach((todo) => {
    // Creating li element to be append to the listContainer
    const listElement = document.createElement('li');
    listElement.classList.add('todo');

    // Adding id to the listElement
    listElement.dataset.listId = todo.id;

    listElement.innerHTML = `
      <div class="toggle">
        <div class="check-div">
          <span class="material-icons box">check_box_outline_blank</span>
          <span class="material-icons check">done</span>
        </div>
        </div>
        <div class="view">
          <p>${todo.description}</p>
        </div>
      <span class="material-icons move-icon">more_vert</span>
    `;

    if (todo.id === selectedTodoId) {
      listElement.classList.add('selected');
    }

    listContainer.appendChild(listElement);
  });
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

handleRender();
