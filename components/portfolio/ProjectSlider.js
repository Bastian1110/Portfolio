import { React, useRef, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectSlider({ children }) {
  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    className: "slides",
  };

  const slider = useRef(null);

  function scroll(e) {
    if (slider === null) return 0;

    e.wheelDelta > 15000
      ? slider.current.slickPrev()
      : slider.current.slickNext();
  }

  useEffect(() => {
    window.addEventListener("wheel", scroll, true);

    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);

  return (
    <Slider className="" {...settings} ref={slider}>
      {children}
    </Slider>
  );
}
