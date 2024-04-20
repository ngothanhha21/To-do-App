export const filterTodos = (todos, status) => {
    switch (status) {
      case "completed":
        return todos.filter((todo) => todo.completed === true);

      case "uncompleted":
        return todos.filter((todo) => todo.completed === false);

      default:
        return todos
    }
  };