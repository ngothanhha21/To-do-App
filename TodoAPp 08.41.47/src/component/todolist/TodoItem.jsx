import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import EditText from "./EditText";
import DeleteButton from "./DeleteButton";


function TodoItem({ text, todo, todos, setTodos }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);


  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          const updatedItem = {
            ...item,
            completed: !item.completed,
          };
          setIsCompleted(!item.completed);
          return updatedItem;
        }
        return item;
      })
    );
  };

  const handleEditSave = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            title: editText,
          };
        }
        return item;
      })
    );
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    e.key === 'Enter' && handleEditSave();
  };

  useEffect(() => {
    setEditText(text); 
  }, [text]);

  
  return (
    <div
      className={`todo  ${isEditing ? "editing" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={() => setIsEditing(true)}
    >
      <Checkbox 
        isCompleted={isCompleted}
        isEditing={isEditing}
        completeHandler={completeHandler}
      />

      {isEditing ? (
        <EditText
          editText={editText}
          setEditText={setEditText}
          handleEditSave={handleEditSave}
          handleKeyPress={handleKeyPress}
        />
      ) : (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
      )}

      {isHovered && !isEditing && (
        <DeleteButton deleteHandler={deleteHandler} />
      )}
    </div>
  );
}

export default TodoItem;
