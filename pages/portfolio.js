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
        src: "/videos/BeatDancer Short.mp4",
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
        <div className="w-[50%]">
          <VideoPlayer
            options={videoJsOptions}
            onReady={handlePlayerReady}
            className="w-[95%] ml-10"
          />
        </div>
      </div>
    </Transition>
  );
}
