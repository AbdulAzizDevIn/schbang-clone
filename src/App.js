import "./App.css"
import "./Components/Header/navbar.css"
import "./Components/Home/home.css"
import Navbar from './Components/Header/Navbar';
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
