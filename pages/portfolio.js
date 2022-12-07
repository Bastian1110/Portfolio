import { Transition } from "@headlessui/react";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

import { BackButton } from "../components/misc";
import { VideoPlayer } from "../components/portfolio";

export default function Porfolio() {
  const [showPortfolioPage, setShowPortfolioPage] = useState(true);
  const router = useRouter();
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/videos/BeatDancer Short.mp4", //TODO : Make the video size smaller
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <Transition
      as="main"
      appear={true}
      show={showPortfolioPage}
      enter="transition-all duration-300"
      enterFrom="transform translate-x-full"
      enterTo="transform translate-x-0"
      leave="transition-all duration-300"
      leaveFrom="transform translate-x-0"
      leaveTo="transform translate-x-full"
      afterLeave={() => router.push("/")}
    >
      <BackButton clickHandler={() => setShowPortfolioPage((prev) => !prev)} />
      <div className="border py-10 rounded-2xl mx-auto my-6 w-[90%]">
        <header className="text-right mr-10">
          <h1 className="font-bold text-secondary text-5xl">Beat Dancer</h1>
          <span className="font-bold text-slate-300 text-lg">
            March 24, 2022
          </span>
        </header>
        <div className="w-[90%] md:w-[50%] mt-4 md:mt-0 inline-block">
          <VideoPlayer
            options={videoJsOptions}
            onReady={handlePlayerReady}
            className="w-[95%] ml-10"
          />
        </div>
        <div className="w-[90%] md:w-[45%] mt-4 md:mt-0 ml-2 md:ml-0 inline-block align-top pl-8">
          <h1 className="font-bold text-white text-xl">Technologies Used</h1>
          <div className="mt-2 w-full">
            <img
              src="/images/technologies/React.png"
              alt="React"
              className="w-14 inline-block"
            />
            <img
              src="/images/technologies/MySql.png"
              alt="MySQL"
              className="w-14 inline-block ml-4"
            />
            <img
              src="/images/technologies/CS.png"
              alt="C#"
              className="w-12 inline-block ml-4"
            />
            <img
              src="/images/technologies/Unity.png"
              alt="C#"
              className="w-16 inline-block ml-4"
            />
          </div>
          <h1 className="mt-2 font-bold text-white text-xl">Description</h1>
          <div className="mt-2 w-full">
            <p className="text-white">
              In this project, I was in charge of making a videogame for a an
              organization called PAS (Percussive Art Society) the challenge was
              to develop the entire project in just one month. As a result, we
              created an executable for the game, a web page, and a backend.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="https://github.com/Bastian1110/BeatDancer-PAS"
              className="group relative underline duration-300 border-2 rounded-md inline-block hover:bg-slate-800"
            >
              <img
                src="/images/technologies/Github.png"
                className="w-8 my-2 ml-2 inline-block"
              />
              <span className="text-white mx-4">
                Look on <b>Github</b>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  );
}
