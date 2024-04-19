import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos, filteredTodos, isShowTodos }) {
  return (
    <div className="todo-container">
      {isShowTodos && ( 
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              text={todo.title}
              key={todo.id}
              completed={todo.completed}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;




