const checkAndUncheckTodo = (todos, localStorageTodos) => {
  document.querySelectorAll('.check-box').forEach((check) => {
    check.addEventListener('change', (e) => {
      const todos = JSON.parse(localStorage.getItem(localStorageTodos));
      const todoId = e.target.closest('li').dataset.todoItem;
      const foundTodo = todos.find((todo) => todo.id === todoId);

      if (foundTodo.completed) {
        e.target.parentNode.nextSibling.nextElementSibling
          .querySelector('.todo-desc')
          .classList.remove('linethrough');
        foundTodo.completed = false;
      } else {
        e.target.parentNode.nextSibling.nextElementSibling
          .querySelector('.todo-desc')
          .classList.add('linethrough');
        foundTodo.completed = true;
      }
      const filteredTodo = todos.filter((todo) => todo.id !== todoId);
      filteredTodo.splice(foundTodo.index - 1, 0, foundTodo);
      localStorage.setItem(localStorageTodos, JSON.stringify(filteredTodo));
    });
  });
};

export default checkAndUncheckTodo;
