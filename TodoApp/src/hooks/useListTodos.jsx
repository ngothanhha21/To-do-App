import { useState, useEffect } from "react";
import { filterTodos } from "../utils/FilterCompleted";
import { saveLocalTodos, getLocalTodos } from "../utils/Storage";

export const useListTodos = () => {
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("All");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        setTodos(getLocalTodos());
    }, []);

    useEffect(() => {
        setFilteredTodos(filterTodos(todos, status));
        saveLocalTodos(todos);
    }, [todos, status]);

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
        todos,
        setTodos,
        status,
        setStatus,
        filteredTodos,
        handleClearComplete,
        number,
        handleFilterClick,
    };
};
