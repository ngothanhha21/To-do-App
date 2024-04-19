import React from "react";
import downArrow from "../../img/down-chevron.png";
import upload from "../../img/video.png";

function Header({ inputText, setInputText, todos, setTodos, setStatus, isShowTodos, setIsShowTodos,}) {

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitTodoHandler(e);
    }
  };


  return (
    <>
      <form>
        <div className="img" onClick={() => setIsShowTodos(!isShowTodos)}>
          {isShowTodos ? (
            <img src={downArrow} alt="Complete" />
          ) : (
            <img src={upload} alt="Complete" />
          )}
        </div>

        <div className="input" >
          <input
            className="todo-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            placeholder="What needs to be done?"
            onKeyPress={handleKeyPress}
            onBlur={() => setInputText("")}
          />
        </div>
      </form>
    </>
  );
}

export default Header;
