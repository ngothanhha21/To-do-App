import "./App.css";
import "./assets/styles/footer.css"
import "./assets/styles/header.css"
import "./assets/styles/todo.css"
import React, { useState, useEffect } from "react";
import TodoList from "./components/todo/TodoList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { filterTodos } from "./utils/FilterCompleted";
import { saveLocalTodos, getLocalTodos } from "../src/utils/Storage";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isShowTodos, setIsShowTodos] = useState(true);

  useEffect(() => {
    setTodos(getLocalTodos());
  }, []);

  useEffect(() => {
    setFilteredTodos(filterTodos(todos, status));
    saveLocalTodos(todos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  useEffect(() => {
    if (isShowTodos) {
      setTodos(getLocalTodos());
    }
  }, [isShowTodos]);

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
