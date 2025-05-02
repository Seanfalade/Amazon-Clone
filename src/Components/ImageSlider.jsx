import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageSlider.css";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <h2>Most wished for in Video Games</h2>
      <div className="slider-img">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={`/public/images/${image}`}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
