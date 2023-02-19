import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkTheme = () => {
        document.body.id = "dark";
    };

    const setLightTheme = () => {
        document.body.id = "light";
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkTheme();
        else setLightTheme();
    };
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
