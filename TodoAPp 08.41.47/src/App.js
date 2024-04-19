// App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/todolist/Header";
import TodoList from "./component/todolist/TodoList";
import Footer from "./component/todolist/Footer";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isShowTodos, setIsShowTodos] = useState(true);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (isShowTodos && storedTodos) {
      setTodos(storedTodos);
    }
  }, [isShowTodos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

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
        setTodos={setTodos} />
    </div>
  );
}

export default App;
