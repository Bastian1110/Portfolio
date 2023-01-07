import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10,
    cssEase: "linear",
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="mx-6 w-full">
      <img src="/images/langs/svelte.png" alt="MongoDB" className="p-12" />
      <img src="/images/langs/tailwind.png" alt="MongoDB" className="p-10" />
      <img src="/images/langs/react.png" alt="MongoDB" className="p-12" />
      <img src="/images/langs/go.png" alt="MongoDB" className="p-14" />
      <img src="/images/langs/python.png" alt="MongoDB" className="p-14" />
      <img
        src="/images/langs/digital-ocean.png"
        alt="MongoDB"
        className="p-14"
      />
      <img src="/images/langs/mongodb.png" alt="MongoDB" className="p-12" />
      <img src="/images/langs/firebase.png" alt="MongoDB" className="p-14" />
      <img
        src="/images/langs/amazonwebservices.png"
        alt="MongoDB"
        className="p-2"
      />
      <img src="/images/langs/android.png" alt="MongoDB" className="p-10" />
      <img src="/images/langs/cplusplus.png" alt="MongoDB" className="p-10" />
      <img src="/images/langs/csharp.png" alt="MongoDB" className="p-10" />
      <img src="/images/langs/docker.png" alt="MongoDB" className="p-4" />
      <img src="/images/langs/git.png" alt="MongoDB" className="p-4" />
      <img src="/images/langs/html5.png" alt="MongoDB" className="p-10" />
      <img src="/images/langs/css3.png" alt="MongoDB" className="p-10" />
      <img src="/images/langs/javascript.png" alt="MongoDB" className="p-12" />
      <img src="/images/langs/typescript.png" alt="MongoDB" className="p-12" />
      <img src="/images/langs/mysql.png" alt="MongoDB" className="p-4" />
      <img src="/images/langs/nginx.png" alt="MongoDB" className="p-4" />
      <img src="/images/langs/node-js.png" alt="MongoDB" className="p-8" />
    </Slider>
  );
}
