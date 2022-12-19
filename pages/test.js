import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Test() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    className: "slides",
  };

  return (
    <Slider className="h-[100vh]" {...settings}>
      <div className="bg-white h-[100vh]">
        <h1>White</h1>
      </div>
      <div className="bg-black h-[100vh]">
        <h1 className="text-white">White</h1>
      </div>
    </Slider>
  );
}
