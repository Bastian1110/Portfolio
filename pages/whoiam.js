import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from "next/router";

import { BackButton } from "../components/misc";
import { TechSlider, InstagramPost, MagicBall } from "../components/whoiam";

export default function WhoIam() {
  const [showSearchPage, setShowSearchPage] = useState(true);
  const router = useRouter();
  return (
    <Transition
      as="main"
      appear={true}
      show={showSearchPage}
      enter="transition-all duration-300"
      enterFrom="transform translate-x-full"
      enterTo="transform translate-x-0"
      leave="transition-all duration-300"
      leaveFrom="transform translate-x-0"
      leaveTo="transform translate-x-full"
      afterLeave={() => router.push("/")}
    >
      <BackButton
        clickHandler={() => setShowSearchPage((prev) => !prev)}
        iconColor="text-white"
        borderColor="border-white"
        hover="hover:bg-[#252631]"
      />

      <div className="mt-2 items-center">
        <div className="max-w-8xl mx-auto grid grid-cols-12">
          <div className="col-span-10 md:col-span-4 h-[70vh]">
            <div className="h-[90%] w-[80%] mx-auto block">
              <MagicBall />
              <span className="text-[#b1b0b0] font-bold text-xl md:text-3xl mt-2">
                Click for a random fact about me!
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 h-[70vh] mt-[0%] md:mt-0">
            <InstagramPost />
          </div>
          <div className="col-span-12 md:col-span-4 h-[70vh]">
            <div className="h-[90%] w-[90%] mx-auto mt-8 md:mt-0 overflow-y-scroll">
              <h1 className="font-bold text-secondary text-4xl md:text-6xl">
                Thats a good question ...
              </h1>
              <p className="text-white text-xl md:text-2xl py-4 mt-0 md:mr-10 mb-4">
                I am a very passionate person about computing and engineering in
                general, I love solving problems as{" "}
                <i className="font-aestethic">elegantly</i> as possible. I like
                to spend my free time building things, listening to music or
                playing basketball.
              </p>
            </div>
          </div>
        </div>
        <div>
          <TechSlider />
        </div>
      </div>
    </Transition>
  );
}
