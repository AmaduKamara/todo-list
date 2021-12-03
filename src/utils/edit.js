// Edit Todo List
const editTodo = (localStorageTodos) => {
  document.querySelectorAll('.todo-desc').forEach((todoInput) => {
    todoInput.addEventListener('change', (e) => {
      e.preventDefault();
      const todos = JSON.parse(localStorage.getItem(localStorageTodos));
      const found = todos.find((todo) => todo.id === todoInput.id);
      found.description = todoInput.value;
      localStorage.setItem(localStorageTodos, JSON.stringify(todos));
    });
  });
};

export default editTodo;
