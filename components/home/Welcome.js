import Link from "next/link";

export default function Welcome() {
  return (
    <section className="pt-[10vh] md:pt-[30vh] pb-[30vh] scroll-m-[100vh]">
      <div className="inline-block md:w-[65%]">
        <div className="text-left ml-4 md:ml-14">
          <h1 className="text-primary font-bold md:text-[8rem] text-8xl md:-mb-2">
            Hello There!
          </h1>
          <h1 className="text-secondary font-bold md:text-[6rem] text-6xl">
            I'm Sebastian Mora
          </h1>
        </div>
        <h1 className="inline-block ml-4 md:ml-14 overflow-hidden text-white whitespace-nowrap font-mono text-lg md:text-xl font-bold animate-typing border-r-4 border-white">
          Programmer, Designer and Developer
        </h1>
      </div>
      <div className="inline-block md:w-[30%] align-top mt-[20vh]">
        <Link
          href="/whoiam"
          className="transition-all duration-300 bg-gradient-to-r to-[#7765e3] via-[#1F2029] from-[#1F2029] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold block border w-full my-4 py-2 text-left"
        >
          <svg
            className="h-8 w-8 text-white inline-block ml-2"
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
            <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />{" "}
            <line x1="10" y1="10" x2="10.01" y2="10" />{" "}
            <line x1="14" y1="10" x2="14.01" y2="10" />{" "}
            <path d="M10 14a3.5 3.5 0 0 0 4 0" />
          </svg>
          <span className="ml-2">Who I am?</span>
        </Link>
        <button className="transition-all duration-300 bg-gradient-to-r to-[#7765e3] via-[#1F2029] from-[#1F2029] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold block border w-full my-4 py-2 text-left">
          <svg
            className="h-8 w-8 text-white inline-block ml-2"
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
            <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />{" "}
            <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
          </svg>
          <span className="ml-2">Portfolio</span>
        </button>
        <button className="transition-all duration-300 bg-gradient-to-r to-[#7765e3] via-primarybg from-primarybg bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold block border w-full my-4 py-2 text-left">
          <svg
            className="h-8 w-8 text-white inline-block ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>

          <span className="ml-2">Contact</span>
        </button>
      </div>
    </section>
  );
}
