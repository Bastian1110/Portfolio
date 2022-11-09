import { Welcome } from "../components/home";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <Welcome />
    </main>
  );
}
