export const saveLocalTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

export const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
       return JSON.parse(localStorage.getItem("todos"));
    }
  };