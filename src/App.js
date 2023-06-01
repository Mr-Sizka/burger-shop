import './App.css';
import Nav from "./Nav/Nav";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <Nav></Nav>
    </div>
      </BrowserRouter>
  );
}

export default App;
