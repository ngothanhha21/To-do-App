// useIsShowTodos.js
import { useState, useEffect } from "react";
import { getLocalTodos } from "../utils/Storage";
import { useListTodos } from "./useListTodos";

export const useIsShowListTodos = () => {
    const {setTodos} = useListTodos()
    const [isShowTodos, setIsShowTodos] = useState(true);

    useEffect(() => {
        if (isShowTodos) {
            setTodos(getLocalTodos());
        }
    }, [isShowTodos]);

    return { isShowTodos, setIsShowTodos };
};
