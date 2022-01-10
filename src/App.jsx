// import './App.css';
import Navbar from "./Components/navbar.jsx";
import Home from "./Components/home.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductsPage from "./Components/productsPage.jsx";
import Rout from "./rout.jsx";
import Footer from './Components/footer';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Rout />
    </Router>
      
      {/* <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/venues" element={<ProductsPage />} />
        </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
