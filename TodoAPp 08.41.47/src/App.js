import "./App.css";
import "./assets/styles/footer.css"
import "./assets/styles/header.css"
import "./assets/styles/todo.css"
import React from "react";
import TodoList from "./components/todo/TodoList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useApp } from "./hooks/useApp";

function App() {
  const {
    inputText,
    setInputText,
    todos,
    setTodos,
    status,
    setStatus,
    filteredTodos,
    isShowTodos,
    setIsShowTodos,
    handleClearComplete,
    number,
    handleFilterClick,
  } = useApp();

  return (
    <div className="App">
      <header>
        <h1>To Do App</h1>
      </header>

      <Header
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        isShowTodos={isShowTodos}
        setIsShowTodos={setIsShowTodos}
      />

      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
        isShowTodos={isShowTodos} 
      />

      <Footer
        status={status} 
        setStatus={setStatus} 
        todos={todos} 
        setTodos={setTodos}
        handleClearComplete={handleClearComplete}
        number={number}
        handleFilterClick={handleFilterClick}
      />
    </div>
  );
}

export default App;