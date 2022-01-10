import React from "react";
import logo from "../images/logo.png";
import logo1 from '../images/logo1.png';
import "../App.css";
import { useState } from "react";
import {Link} from "react-router-dom";

function Navbar(){

    const [nav, setNav] = useState(false);

    const handleScroll = () => {
        if(window.scrollY >= 20)
        {
            setNav(true);
        }
        else
        setNav(false);
    }
    window.addEventListener('scroll', handleScroll);

    return (
      <div>
        <nav id={nav ? "change" : ""} className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container px-2">
            <a className="navbar-brand" href="#"><img src={nav? logo1 : logo} alt="Logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolio</a>
                </li>
                {/* Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-hover="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="/productsPage" className="dropdown-item" >Venues</Link>
                    <a className="dropdown-item" href="#">Caterers</a>
                    {/* <a className="dropdown-item" href="#">Makeup Artist</a> */}
                    <a className="dropdown-item" href="#">Rent a Car</a>
                    {/* <a className="dropdown-item" href="#">Event Management</a> */}
                    <a className="dropdown-item" href="#">Photography</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      );
}

export default Navbar;