import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from "next/router";

import { ProjectSlider } from "../components/portfolio";

import { BeatDancer, AlertaAtizapan } from "../components/portfolio";

export default function Porfolio() {
  const [showPortfolioPage, setShowPortfolioPage] = useState(true);
  const router = useRouter();

  const goBack = () => {
    setShowPortfolioPage(!showPortfolioPage);
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
      <ProjectSlider>
        <BeatDancer back={goBack} />
        <AlertaAtizapan back={goBack} />
      </ProjectSlider>
    </Transition>
  );
}
