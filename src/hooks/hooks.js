import React, { useState } from "react";

const useSetFormState = () => {
    const initialState = { color: "" };
    const [formData, setFormData] = useState(initialState);

    const updateForm = evt => {
        const { name, value } = evt.target;
        setFormData(formData => {
            return {
                ...formData,
                [name]: value
            };
        });
    };

    const submitForm = (addColor, toggleDisplay, evt) => {
        const { color } = formData;
        evt.preventDefault();
        addColor(color);
        toggleDisplay();
        setFormData(formData => initialState);
    };

    return [formData, updateForm, submitForm];
};

const useSubmitState = () => {
    const [formDisplayed, setFormDisplayed] = useState(false);
    const toggleFormDisplay = () => {
        setFormDisplayed(formDisplayed => !formDisplayed);
    };
    return [formDisplayed, toggleFormDisplay];
};

const useColorAdd = () => {
    const defaultValue = JSON.stringify([]);
    const initialState = JSON.parse(window.localStorage.getItem("colors") || defaultValue);
    const [colors, setColors] = useState(initialState);

    const addColor = newColor => {
        setColors(colors => {
            const newColors = [...colors, newColor];
            window.localStorage.setItem("colors", JSON.stringify(newColors));
            return newColors;
        });
    };
    return [colors, addColor];
};

export {
    useSetFormState,
    useSubmitState,
    useColorAdd
};
