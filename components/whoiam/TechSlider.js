import React from "react";
import Slider from "react-slick";

import { TechIcon } from "../misc";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const techs = [
    {
      src: "/images/langs/svelte.png",
      padding: "p-10",
      name: "Svelte",
      link: "https://svelte.dev",
    },
    {
      src: "/images/langs/android.png",
      padding: "p-9",
      name: "Android Studio",
      link: "https://developer.android.com",
    },
    {
      src: "/images/langs/tailwind.png",
      padding: "p-9",
      name: "Tailwind",
      link: "https://tailwindcss.com",
    },
    {
      src: "/images/langs/react.png",
      padding: "p-9",
      name: "React",
      link: "https://reactjs.org",
    },
    {
      src: "/images/langs/go.png",
      padding: "p-9",
      name: "Go",
      link: "https://go.dev",
    },
    {
      src: "/images/langs/python.png",
      padding: "p-9",
      name: "Python",
      link: "https://pyhton.org",
    },
    {
      src: "/images/langs/digital-ocean.png",
      padding: "p-9",
      name: "Digital Ocean",
      link: "https://digitalocean.com",
    },
    {
      src: "/images/langs/mongodb.png",
      padding: "p-9",
      name: "Mongo",
      link: "https://mongodb.com",
    },
    {
      src: "/images/langs/firebase.png",
      padding: "p-9",
      name: "Firebase",
      link: "https://firebase.google.com",
    },
    {
      src: "/images/langs/amazonwebservices.png",
      padding: "p-9",
      name: "AWS",
      link: "https://aws.amazon.com",
    },
    {
      src: "/images/langs/cplusplus.png",
      padding: "p-9",
      name: "C++",
      link: "https://cplusplus.com",
    },
    {
      src: "/images/langs/csharp.png",
      padding: "p-9",
      name: "C#",
      link: "https://dotnet.microsoft.com",
    },
    {
      src: "/images/langs/docker.png",
      padding: "p-4",
      name: "Docker",
      link: "https://docker.com",
    },
    {
      src: "/images/langs/git.png",
      padding: "p-4",
      name: "Git",
      link: "https://git-scm.com",
    },
    {
      src: "/images/langs/html5.png",
      padding: "p-8",
      name: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      src: "/images/langs/css3.png",
      padding: "p-8",
      name: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      src: "/images/langs/javascript.png",
      padding: "p-8",
      name: "JS",
      link: "https://javascript.com",
    },
    {
      src: "/images/langs/typescript.png",
      padding: "p-8",
      name: "TS",
      link: "https://typescriptlang.org",
    },
    {
      src: "/images/langs/mysql.png",
      padding: "p-4",
      name: "MySQL",
      link: "https://mysql.com",
    },
    {
      src: "/images/langs/nginx.png",
      padding: "p-4",
      name: "Nginx",
      link: "https://nginx.org/en/",
    },
    {
      src: "/images/langs/node-js.png",
      padding: "p-8",
      name: "Node",
      link: "https://nodejs.org/en/",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10,
    cssEase: "linear",
    vertical: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="mx-6 w-full">
      {techs.map((tech) => (
        <TechIcon
          src={tech.src}
          padding={tech.padding}
          name={tech.name}
          link={tech.link}
        />
      ))}
    </Slider>
  );
}
