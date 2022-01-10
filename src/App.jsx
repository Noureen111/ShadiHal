import Navbar from "./Components/navbar.jsx";
import Home from "./Components/home.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Rout from "./rout.jsx";
import Footer from './Components/footer';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Rout />
    </Router>
  
  <div style={{height: '100px'}}></div>
      <Footer />
    </div>
  );
}

export default App;
