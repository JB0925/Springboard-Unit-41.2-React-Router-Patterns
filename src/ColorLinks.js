import React from "react";
import { Link } from "react-router-dom";
import { useColorAdd } from "./hooks/hooks";
import "./ColorLinks.css";
import Navbar from "./Navbar";

const ColorLinks = () => {
    const [colors, addColor] = useColorAdd();
    const colorLinks = colors.map(c => <li><Link to={`/colors/${c}`}>{c}</Link></li>);

    return (
        <div className="ColorLinks">
            <Navbar addColor={addColor} />
            <h2>Please Select a Color</h2>
            <ul>
                {colorLinks}
            </ul>
        </div>
    );
};

export default ColorLinks;