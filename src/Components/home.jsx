import React from "react";
import Slider from "./slider";
import Glider from "./glider";
import Packages from "./packages";
import '../App.css';

function Home() {
    return (
        <div>
            <Slider />
            <Packages />
            <div className="container">
                <Glider />
            </div>
        </div>
    );
}

export default Home;