import { useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import { BackButton, LookInGit } from "../misc";

export default function AlertaAtizapan(props) {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/videos/AlertaAtizapan.mp4", //TODO : Make the video size smaller
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return (
    <div className="h-[100vh] bg-[#6665DD]">
      <BackButton
        clickHandler={props.back}
        iconColor="text-white"
        hover="hover:bg-[#eb80bb]"
      />
      <header className="text-right mr-10 float-right md:float-none mt-4 md:mt-0">
        <h1 className="font-bold text-[#FFFFFA] text-2xl md:text-8xl word-wraps">
          Alerta Atizapan
        </h1>
        <span className="font-bold text-[#cccbca] text-sm md:text-2xl">
          November 1, 2022
        </span>
      </header>
      <div className="pr-[10%] md:pr-0 w-[90%] md:w-[50%] mt-1 md:mt-10 inline-block">
        <VideoPlayer
          options={videoJsOptions}
          onReady={handlePlayerReady}
          className="w-[95%] ml-10"
        />
      </div>
      <div className="w-[90%] md:w-[45%] mt-1 md:mt-8 ml-2 md:ml-0 inline-block align-top pl-8">
        <h1 className="font-bold text-[#fcc3d5] md:text-2xl">
          Technologies Used
        </h1>
        <div className="mt-1 md:mt-2 table">
          <img
            src="/images/technologies/React.png"
            alt="React"
            className="w-10 md:w-[3.9rem] float-left"
          />
          <img
            src="/images/technologies/MongoDB.png"
            alt="MongoDB"
            className="w-9 md:w-[3.6rem] float-left ml-1 md:ml-4"
          />
          <img
            src="/images/technologies/AndroidStudio.png"
            alt="Android Studio"
            className="w-9 md:w-[3.6rem] float-left ml-1 md:ml-4"
          />
          <img
            src="/images/technologies/Firebase.png"
            alt="Firebase"
            className="w-8 md:w-[3.5rem] float-left ml-3 md:ml-4 pt-1"
          />
          <img
            src="/images/technologies/Docker.png"
            alt="Docker"
            className="w-9 md:w-[4rem] float-left ml-3 md:ml-4 pt-1"
          />
        </div>
        <h1 className="mt-0 md:mt-2 font-bold text-[#fcc3d5] text-lg md:text-2xl">
          Description
        </h1>
        <div className="mt-0 md:mt-2 w-full">
          <p className="text-[#f3d4e9] text-xs md:text-xl">
            This project was quite satisfactory, since it had the objective of
            helping my hometown, creating a platform for civil protection to
            notify the population about catastrophes. I was in charge of
            designing and developing the entire backend and frontend with the
            help of node js and docker, in addition to designing all the
            aesthetic part of the platform.
          </p>
        </div>
        <LookInGit
          bg="bg-[#eb80bb]"
          textColor="text-[#f7f7ff]"
          hover="hover:bg-[#4e5d9e]"
          link="https://github.com/Bastian1110/Alert-Atizapan"
        />
      </div>
    </div>
  );
}
