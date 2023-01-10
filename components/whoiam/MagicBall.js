import { useState } from "react";

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

export default function MagicBall() {
  const facts = [
    "My favourite programming language is Go",
    "My favourite movie is Blade Runner",
    "I got my first computer at 10 years old",
    "",
  ];
  const [actualFact, setActualFact] = useState("");

  const getNewFact = () => {
    setActualFact(choose(facts));
  };
  return (
    <div
      className="md:w-[21rem] md:h-[21rem] w-[18rem] h-[18rem]border-4 border-[#000000] rounded-full bg-[#000000] hover:motion-safe:animate-pulse mt-4"
      onClick={getNewFact}
    >
      <div className="md:w-[19rem] md:h-[19rem] w-[16rem] h-[16rem] rounded-full bg-[#1d1d1d] mt-2 mr-2 table">
        <div className="w-[2rem] h-[2rem] rounded-full  mx-auto pt-10 table-cell align-middle text-center">
          <div className="bg-[#c8c8c8] w-[12rem] h-[12rem] rounded-full table mx-auto">
            <span className="text-[#333333] font-bold align-middle pt-2 table-cell animate-appear">
              {actualFact}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
