import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import Card from './card';
import s1 from '../images/s1.jpg'
import s2 from '../images/s2.jpg'
import s3 from '../images/s3.jpg'
import s4 from '../images/s4.jpg'
import s5 from '../images/s5.jpg'
import s6 from '../images/s6.jpg'
import s7 from '../images/s7.jpg'
import s8 from '../images/s8.jpg'

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

          <Card src={s1} />
          <Card src={s2} />
          <Card src={s3} />
          <Card src={s4} />
          <Card src={s5} />
          <Card src={s6} />
          <Card src={s7} />
          <Card src={s8} />
      
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