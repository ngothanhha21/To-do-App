import { useState, useEffect } from "react";
import { filterTodos } from "../utils/FilterCompleted";
import { saveLocalTodos, getLocalTodos } from "../utils/Storage";

export const useApp = () => {
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
    }, [todos, status]);

    useEffect(() => {
        if (isShowTodos) {
            setTodos(getLocalTodos());
        }
    }, [isShowTodos]);

    const handleClearComplete = () => {
        setTodos(todos.filter((item) => !item.completed));
    };

    const number = () => {
      switch (status) {
      case "completed":
          return todos.filter((item) => item.completed === true).length;
      case "uncompleted":
          return todos.filter((item) => item.completed === false).length;
      default:
          return todos.length;
      }
    };

    const handleFilterClick = (filter) => {
        setStatus(filter);
    };

    return {
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
    };
    };