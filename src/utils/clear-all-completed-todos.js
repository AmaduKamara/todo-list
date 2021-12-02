// Clear all completed todos function
const clearAllCompletedTodos = (localStorageTodos) => {
  const localArr = JSON.parse(localStorage.getItem(localStorageTodos));
  const pendingTodos = localArr.filter((todo) => todo.completed === false);

  localStorage.setItem(localStorageTodos, JSON.stringify(pendingTodos));
};

export default clearAllCompletedTodos;
