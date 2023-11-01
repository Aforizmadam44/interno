import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandsSlider = () => {
  const settings = {
    infinite: true, // Sonsuz döngü etkinleştirildi
    slidesToShow: 5, // Aynı anda görünen SVG sayısı
    slidesToScroll: 1, // Kaydırma işlemi sırasında kaç SVG'nin ilerleyeceği
    autoplay: true, // Otomatik oynatma etkinleştirildi
    autoplaySpeed: 1000, // Otomatik oynatma hızı (ms cinsinden)
  };

  return (
    <div className="container w-100 mt-5 py-5 align-items-center">
      <Slider {...settings}>
        <div>
          <img src="./01.svg" alt="" />
        </div>
        <div>
          <img src="./02.svg" alt="" />
        </div>
        <div>
          <img src="./03.svg" alt="" />
        </div>
        <div>
          <img src="./04.svg" alt="" />
        </div>
        <div>
          <img src="./05.svg" alt="" />
        </div>
        <div>
          <img src="./01.svg" alt="" />
        </div>
        <div>
          <img src="./02.svg" alt="" />
        </div>
        <div>
          <img src="./03.svg" alt="" />
        </div>
        <div>
          <img src="./04.svg" alt="" />
        </div>
        <div>
          <img src="./05.svg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default BrandsSlider;
