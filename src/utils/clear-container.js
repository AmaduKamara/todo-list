const clearListContainer = (lists) => {
  while (lists.firstChild) {
    lists.removeChild(lists.firstChild);
  }
};

export default clearListContainer;
