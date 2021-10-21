import React from "react";
import { useSetFormState, useSubmitState } from "./hooks/hooks";
import "./Navbar.css";

const Navbar = ({ addColor }) => {
    const [formData, updateForm, submitForm] = useSetFormState();
    const [formDisplayed, toggleFormDisplay] = useSubmitState();

    const optionalRender = () => {
        if (!formDisplayed) {
            return <button onClick={toggleFormDisplay}>Add Color</button>
        };
        return (
            <form onSubmit={evt => submitForm(addColor, toggleFormDisplay, evt)}>
                <label htmlFor="color">Enter a Color</label>
                <input
                    id="color"
                    name="color"
                    placeholder="i.e. red, blue, etc."
                    onChange={updateForm}
                    value={formData.color}
                    type="text"
                    required
                />
                <button type="submit">Add Color</button>
            </form>
        );
    };

    return (
        <nav>
            <h1>Welcome to the Color Factory!</h1>
            {optionalRender()}
        </nav>
    );
};

export default Navbar;