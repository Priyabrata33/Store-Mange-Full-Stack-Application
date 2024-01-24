import './App.css'

import Appbar from './component/Header/Appbar.jsx'
// import ThemeChange from './ThemeChange'import { createContext} from "react";
import TogleTheme from './component/toggleButton/TogleTheme.jsx';
import { Outlet } from 'react-router-dom';

function App() {
 
  return (
    <>

      <Appbar/>
      {/* <Outlet/>   */}
      <TogleTheme/>

    </>
  );
}

export default App
