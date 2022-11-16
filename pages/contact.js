import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from "next/router";

import { BackButton } from "../components/misc";

export default function Contact() {
  const [showContactPage, setShowContactPage] = useState(true);
  const router = useRouter();
  return (
    <Transition
      as="main"
      appear={true}
      show={showContactPage}
      enter="transition-all duration-300"
      enterFrom="transform translate-x-full"
      enterTo="transform translate-x-0"
      leave="transition-all duration-300"
      leaveFrom="transform translate-x-0"
      leaveTo="transform translate-x-full"
      afterLeave={() => router.push("/")}
    >
      <BackButton clickHandler={() => setShowContactPage((prev) => !prev)} />
      <section className="block w-[50%] mx-auto my-[25vh] text-center">
        <a
          href="https://github.com/Bastian1110"
          className="group relative underline duration-300 hover:border-secondary border-4 border-str rounded-[1.5rem] inline-block p-6 mr-8"
        >
          <span class="transition-all duration-500 absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white font-bold text-lg after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
            Github
          </span>
          <svg
            class="h-24 w-24 text-white group-hover:text-secondary"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/sebastián-mora-ugalde-3693021b3"
          className="group relative underline duration-300 hover:border-blue-400 border-4 border-str rounded-[1.5rem] inline-block p-6 mr-8"
        >
          <span class="transition-all duration-500 absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white font-bold text-lg after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
            LinkedIn
          </span>
          <svg
            class="h-24 w-24 text-white group-hover:text-blue-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
            <rect x="2" y="9" width="4" height="12" />{" "}
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="mailto: chebimora02@gmail.com"
          className="group relative underline duration-300 hover:border-sky-300 border-4 border-str rounded-[1.5rem] inline-block p-6 mr-8 mt-2"
        >
          <span class="transition-all duration-500 absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white font-bold text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
            Mail: chebimora02@gmail.com
          </span>
          <svg
            class="h-24 w-24 text-white group-hover:text-sky-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </section>
    </Transition>
  );
}
