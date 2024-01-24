import React from 'react'

import { createContext, useState } from "react";
import { Outlet } from 'react-router-dom';
import ReactSwitch from "react-switch";
import Home from '../Home';


export const ThemeContext = createContext(null);

function TogleTheme() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

   

  return (
    <>
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme} >
          <div className="switch">
            <Outlet/>
            <div style={{ position: 'fixed', bottom: 10, right: 20 }}>
              <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default TogleTheme
