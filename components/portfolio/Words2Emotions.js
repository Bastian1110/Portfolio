import { BackButton, LookInGit } from "../misc";

export default function Words2Emotions(props) {
  return (
    <div className="h-[100vh] bg-[#e1f5ff]">
      <BackButton
        clickHandler={props.back}
        iconColor="text-blue-800"
        hover="hover:bg-[#2f33b3]"
      />
      <header className="text-right mr-10 float-right md:float-none mt-4 md:mt-0">
        <h1 className="font-bold text-[#1c125b] text-2xl md:text-8xl">
          Words 2 Emotions
        </h1>
        <span className="font-bold text-[#4557db] text-sm md:text-2xl">
          March 3, 2023
        </span>
      </header>
      <div className="ml-[10vw] md:ml-0 pr-[10%] md:pr-0 md:pl-12 w-[90%] md:w-[50%] mt-1 md:mt-10 inline-block">
        <a
          href="https://words-to-emotions-bastian1110.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-[#00365a] to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-[#ffffff] flex items-end">
              <div className="p-4 pt-2 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <div className="font-bold text-2xl -mb-4">
                  Click to visit the actual web-page!
                </div>
              </div>
            </div>
            <img
              alt=""
              className=" aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src="/images/photos/words.gif"
            />
          </div>
        </a>
      </div>
      <div className="w-[90%] md:w-[45%] mt-1 md:mt-8 ml-2 md:ml-0 inline-block align-top pl-8">
        <h1 className="font-bold text-[#494caa] md:text-2xl">
          Technologies Used
        </h1>
        <div className="mt-1 md:mt-2 table">
          <img
            src="/images/langs/wasm.png"
            alt="Go"
            className="w-[5%] md:w-[6.5rem] float-left ml-1 md:ml-2"
          />
          <img
            src="/images/langs/rust_blk.png"
            alt="Go"
            className="w-[5%] md:w-[6.5rem] float-left ml-1 md:ml-2"
          />
          <img
            src="/images/langs/svelte.png"
            alt="Go"
            className="w-[5%] md:w-[6.5rem] float-left ml-1 md:ml-2"
          />
        </div>
        <h1 className="mt-0 md:mt-2 font-bold text-[#3b3ea8] text-lg md:text-2xl">
          Description
        </h1>
        <div className="mt-0 md:mt-2 w-full">
          <p className="text-[#6368d0] text-xs md:text-xl">
            Open source development of a Natural Language Processing model,
            which had the objective of obtaining a model capable of predicting
            the feeling of a user based on an input string. All this implemented
            in Rust, to be able to compile it to WASM, and thus obtain an AI
            model light enough to embed it in a SPA-type web page, without
            having to depend on a server.
          </p>
        </div>
        <LookInGit
          bg="bg-[#201568]"
          textColor="text-[#f7f7ff]"
          hover="hover:bg-[#475592]"
          link="https://github.com/Bastian1110/Words2Emotions"
        />
      </div>
    </div>
  );
}
