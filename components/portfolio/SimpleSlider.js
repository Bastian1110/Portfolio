import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="/images/technologies/React.png"
          alt="React"
          className="w-14 inline-block"
        />
      </div>
      <div>
        <img
          src="/images/technologies/MySql.png"
          alt="MySQL"
          className="w-14 inline-block ml-4"
        />
      </div>
      <div>
        <img
          src="/images/technologies/CS.png"
          alt="C#"
          className="w-12 inline-block ml-4"
        />
      </div>
      <div>
        <img
          src="/images/technologies/Unity.png"
          alt="Unity"
          className="w-[5rem] inline-block ml-4"
        />
      </div>
    </Slider>
  );
}
