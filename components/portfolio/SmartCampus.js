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
      <div className="pr-[10%] md:pr-0 w-[90%] md:w-[50%] mt-1 md:mt-10 inline-block">
        maiu
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
            className="w-10 md:w-[6.5rem] float-left ml-1 md:ml-2"
          />
          <img
            src="/images/technologies/SQLite.png"
            alt="SQL Lite"
            className="w-8 md:w-[3.5rem] float-left ml-1 md:ml-2"
          />
          <img
            src="/images/technologies/GoogleCloud.png"
            alt="Google Cloud"
            className="w-[3rem] md:w-[5rem] float-left ml-3 md:ml-2 pt-1"
          />
        </div>
        <h1 className="mt-0 md:mt-2 font-bold text-[#494caa] text-lg md:text-2xl">
          Description
        </h1>
        <div className="mt-0 md:mt-2 w-full">
          <p className="text-[#e6fefc] text-xs md:text-xl">
            This project was quite satisfactory, since it had the objective of
            helping my hometown, creating a platform for civil protection to
            notify the population about catastrophes. I was in charge of
            designing and developing the entire backend and frontend with the
            help of node js and docker, in addition to designing all the
            aesthetic part of the platform.
          </p>
        </div>
        <LookInGit
          bg="bg-[#4246ac]"
          textColor="text-[#f7f7ff]"
          hover="hover:bg-[#475592]"
          link="https://github.com/Bastian1110/Alert-Atizapan"
        />
      </div>
    </div>
  );
}
