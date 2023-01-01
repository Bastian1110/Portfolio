import { useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import { BackButton, LookInGit } from "../misc";

export default function BeatDancer(props) {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/videos/BDMini.mp4", //TODO : Make the video size smaller
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return (
    <div className="h-[100vh] bg-[#ADF1D2]">
      <BackButton
        clickHandler={props.back}
        iconColor="text-[#6B7FD7]"
        borderColor="border-[#6B7FD7]"
        hover="hover:bg-[#e5aeb9]"
      />
      <header className="text-right mr-10 float-right md:float-none mt-4 md:mt-0">
        <h1 className="font-bold text-[#6B7FD7] text-3xl md:text-8xl">
          Beat Dancer
        </h1>
        <span className="font-bold text-slate-400 text-sm md:text-2xl">
          March 24, 2022
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
        <h1 className="font-bold text-[#DE6C83] md:text-2xl">
          Technologies Used
        </h1>
        <div className="mt-1 md:mt-2 table">
          <img
            src="/images/technologies/React.png"
            alt="React"
            className="w-10 md:w-16 float-left"
          />
          <img
            src="/images/technologies/MySql.png"
            alt="MySQL"
            className="w-10 md:w-16 float-left ml-1 md:ml-4"
          />
          <img
            src="/images/technologies/CS.png"
            alt="C#"
            className="w-8 md:w-14 float-left ml-1 md:ml-4"
          />
          <img
            src="/images/technologies/Unity.png"
            alt="Unity"
            className="w-[3rem] md:w-[6rem] float-left ml-3 md:ml-4 pt-1"
          />
        </div>
        <h1 className="mt-0 md:mt-2 font-bold text-[#DE6C83] text-lg md:text-2xl">
          Description
        </h1>
        <div className="mt-0 md:mt-2 w-full">
          <p className="text-[#e7869a] text-xs md:text-xl">
            In this project, I was in charge of making a videogame for a an
            organization called PAS (Percussive Art Society) the challenge was
            to develop the entire project in just one month. As a result, we
            created an executable for the game, a web page, and a backend. I was
            focused in developing tha game code, the web page and the backend
            (auth and database).
          </p>
        </div>
        <LookInGit
          bg="bg-[#6072c1]"
          textColor="text-white"
          hover="hover:bg-[#4e5d9e]"
          link="https://github.com/Bastian1110/BeatDancer-PAS"
        />
      </div>
    </div>
  );
}
