import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from "next/router";

import { BackButton } from "../components/misc";

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
      <div className="">
        <BackButton
          clickHandler={() => setShowSearchPage((prev) => !prev)}
          iconColor="text-white"
          borderColor="border-white"
          hover="hover:bg-[#252631]"
        />
        <h1 className="text-primary font-bold md:text-6xl text-4xl pt-10 pr-8 text-right">
          That's a good question ...
        </h1>
        <section className="text-white text-xl font-bold justify-evenly w-[50%] mt-8">
          I am a person who quite enjoys fixing any type of problem, from
          mechanics to electronics, I am really fascinated by learning how
          things work. I would call myself a "romantic" person who believes in
          doing things the right way, without the need to be motivated by
          material things, but rather doing things for the love of art. Another
          of my great loves, in addition to engineering, is basketball, which I
          practice with my friends on a recurring basis and with great passion.
          I am loyal and a good friend, as well as an outgoing and fun person.
        </section>
      </div>
    </Transition>
  );
}
