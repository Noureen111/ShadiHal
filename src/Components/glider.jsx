import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import Card from './card';

function Glider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "50px"
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px"
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px"
        }
      }
    ]
  };

  return (

    <div className="container-fluid">
      <div>
        <div className="sec-heading">
          <h2>Services</h2>
        </div>
        <Slider {...settings}>

          <Card src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" />
          <Card src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" />
          <Card src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" />
          <Card src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" />
          <Card src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" />
          <Card src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" />
          <Card src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" />
          <Card src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg" />
      
        </Slider>
        <div style={{ height: 50 }}></div>
      </div>

      {/* <section className="customer-logos slider">
      
        
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg" />
        </div>
      </section> */}
    </div>
  );
}

export default Glider;