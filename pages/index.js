import { Welcome } from "../components/home";
import { Transition } from "@headlessui/react";
import { Head } from "next/document";

export default function Home() {
  return (
    <Transition
      as="main"
      appear={true}
      show={true}
      enter="transition-all duration-300"
      enterFrom="transform translate-x-full"
      enterTo="transform translate-x-0"
      leave="transition-all duration-300"
      leaveFrom="transform translate-x-0"
      leaveTo="transform translate-x-full"
    >
      <Welcome />
    </Transition>
  );
}
