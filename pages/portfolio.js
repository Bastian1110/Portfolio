import { Transition } from "@headlessui/react";
import useScrollSnap from "react-use-scroll-snap";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

import { BeatDancer, AlertaAtizapan } from "../components/portfolio";

export default function Porfolio() {
  const [showPortfolioPage, setShowPortfolioPage] = useState(true);
  const router = useRouter();

  const goBack = () => {
    setShowPortfolioPage(!showPortfolioPage);
  };

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 10 });

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
      <section ref={scrollRef}>
        <div>
          <BeatDancer back={goBack} />
        </div>
        <div>
          <AlertaAtizapan back={goBack} />
        </div>
      </section>
    </Transition>
  );
}
