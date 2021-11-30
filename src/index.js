import './main.css';
import clearListContainer from './utils/clear-container.js';


const listContainer = document.querySelector('[data-lists]');


const todos = [
  {
    id: 1,
    description: 'Join Morning session meeting at 8am Monday to Friday',
    completed: false,
  },
  {
    id: 2,
    description: 'Join Collaborative session 1 at 9am',
    completed: false,
  },
  {
    id: 3,
    description: 'Work on lessons and solo projects',
    completed: false,
  },
  {
    id: 4,
    description: 'Watch the walking dead season 11 Finale',
    completed: false,
  },
];

const handleRender = () => {
  clearListContainer(listContainer);
  todos.forEach((todo) => {
    const listElement = document.createElement('li');
    listElement.classList.add('todo');
    listElement.innerHTML = `
      <div class="toggle">
        <span class="material-icons box">check_box_outline_blank</span>
        <div class="check-div">
          <span class="material-icons check">done</span>
        </div>
      </div>
      <div class="view">
        <p>${todo.description}</p>
      </div>
      <span class="material-icons move-icon">more_vert</span>
    `;
    listContainer.appendChild(listElement);
  });
};

handleRender();
