import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ColorPage.css";

const ColorPage = () => {
    const { color } = useParams();
    const style = {
        backgroundColor: color,
        height: "100vh",
        width: "100vw"
    };

    return (
        <div className="ColorPage" style={style}>
            <h1>This page is {color}!!!</h1>
            <Link to="/colors">GO BACK</Link>
        </div>
    );
};

export default ColorPage;