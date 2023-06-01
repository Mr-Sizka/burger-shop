import './App.css';
import Nav from "./Nav/Nav";
import {BrowserRouter} from "react-router-dom";
import navClasses from './Nav/Nav.module.css'

function App() {

  const setActive = () =>{
    document.getElementById(window.location.pathname.slice(1)).className= navClasses.navLinkActive
  }
  return (
      <BrowserRouter>
    <div className="App" onLoad={setActive}>
        <Nav></Nav>
    </div>
      </BrowserRouter>
  );
}

export default App;
