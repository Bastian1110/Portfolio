import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from "next/router";

import { BackButton } from "../components/misc";
import { TechSlider } from "../components/whoiam";

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

      <div className="">
        <div className="max-w-7xl mx-auto grid grid-cols-12 h-[65vh]">
          <div className="col-span-4">
            <div className="border "></div>
          </div>
          <div className="col-span-4">2</div>
          <div className="col-span-4">
            <h1 className="font-bold text-secondary text-6xl">
              Thats a good question ...
            </h1>
            <p className="text-white text-2xl py-4 mt-4 mr-4 mb-4">
              I am a very passionate person about computing and engineering in
              general, I love solving problems as elegantly as possible. I like
              to spend my free time building things, listening to music or
              playing basketball.
            </p>
          </div>
        </div>
        <div>
          <TechSlider />
        </div>
      </div>
    </Transition>
  );
}
