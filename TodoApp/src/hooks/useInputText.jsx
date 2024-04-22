import { useState } from "react";

export const useInputText = (initialValue = "") => {
    const [inputText, setInputText] = useState(initialValue);

    const handleInputChange = (text) => {
        setInputText(text);
    };

    return { inputText, setInputText, handleInputChange};
};
