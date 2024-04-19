import React, { useState, useEffect } from "react";
import checkBox from "../../img/correct.png";
import square from "../../img/checkbox (1).png";

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
      <button
        onClick={completeHandler}
        className={`complete-btn ${isEditing ? "hidden" : ""}`}
      >
        {isCompleted ? (
          <img src={checkBox} alt="Complete"
          className="checkbox"
          />
        ) : (
          <img
            src={square}
            alt="Complete"
            className="emptyCheckbox"
          />
        )}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditSave}
          onKeyPress={handleKeyPress} 
          autoFocus
        />
      ) : (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
      )}

      {isHovered && !isEditing && (
        <button onClick={deleteHandler} className="delete-btn">
          <span>X</span>
        </button>
      )}
    </div>
  );
}

export default TodoItem;
