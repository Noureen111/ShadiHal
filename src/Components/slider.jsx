import React from "react";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import "../App.css";

function Slider() {
    return (
        <div className="n">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={slide1} alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>
                            Banner Text one</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt
                            excepturi quas vero.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={slide1} alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>
                            Banner Text two</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt
                            excepturi quas vero.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={slide1} alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>
                            Banner Text three</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt
                            excepturi quas vero.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
    );

}

export default Slider;