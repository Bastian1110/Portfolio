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
      <BackButton clickHandler={() => setShowSearchPage((prev) => !prev)} />
      <div className="text-right inline-block float-right">
        <h1 className="text-primary font-bold md:text-6xl text-4xl pt-10 pr-8">
          That's a good question ...
        </h1>
      </div>
    </Transition>
  );
}
