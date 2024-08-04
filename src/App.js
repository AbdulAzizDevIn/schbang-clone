import "./App.css"
import "./Components/Header/navbar.css"
import "./Components/Home/home.css"
import "./Components/Footer/footer.css"
import Navbar from './Components/Header/Navbar';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
