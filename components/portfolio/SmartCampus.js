import { BackButton, LookInGit } from "../misc";

export default function SmartCampus(props) {
  return (
    <div className="h-[100vh] bg-[#45a5d5]">
      <BackButton
        clickHandler={props.back}
        iconColor="text-white"
        hover="hover:bg-[#2f33b3]"
      />
      <header className="text-right mr-10 float-right md:float-none mt-4 md:mt-0">
        <h1 className="font-bold text-[#FFFFFA] text-2xl md:text-8xl">
          Smart Campus
        </h1>
        <span className="font-bold text-[#e6e6e6] text-sm md:text-2xl">
          August 1, 2022
        </span>
      </header>
      <div className="pr-[10%] md:pr-0 md:pl-12 w-[90%] md:w-[50%] mt-1 md:mt-10 inline-block">
        <a href="https://campusinteligente.com" target="_blank">
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
              src="/images/photos/SmartCampus.jpg"
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
            src="/images/technologies/React.png"
            alt="React"
            className="w-10 md:w-16 float-left"
          />
          <img
            src="/images/technologies/Go.png"
            alt="Go"
            className="w-16 md:w-[6.5rem] float-left ml-1 md:ml-2"
          />
          <img
            src="/images/technologies/SQLite.png"
            alt="SQL Lite"
            className="w-10 md:w-[3.5rem] float-left ml-1 md:ml-2"
          />
          <img
            src="/images/technologies/GoogleCloud.png"
            alt="Google Cloud"
            className="w-[3.5rem] md:w-[5rem] float-left ml-1 md:ml-2 pt-1"
          />
        </div>
        <h1 className="mt-0 md:mt-2 font-bold text-[#494caa] text-lg md:text-2xl">
          Description
        </h1>
        <div className="mt-0 md:mt-2 w-full">
          <p className="text-[#e6fefc] text-xs md:text-xl">
            In my school, a principal had the idea of creating a platform called
            Smart Campus, which has the objective of uniting the community to
            improve our campus. I was in charge of IT, developing a large part
            of the page, which has authentication and a system for students to
            upload their own projects, in addition to obtaining statistics from
            them.
          </p>
        </div>
        <LookInGit
          bg="bg-[#4246ac]"
          textColor="text-[#f7f7ff]"
          hover="hover:bg-[#475592]"
          link="https://github.com/Bastian1110/Smart-Campus-React.git"
        />
      </div>
    </div>
  );
}
