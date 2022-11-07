export default function Welcome() {
  return (
    <section className="pt-[10vh] md:pt-[30vh] pb-[30vh] scroll-m-[100vh]">
      <div className="inline-block w-full">
        <div className="text-left ml-4 md:ml-14">
          <h1 className="text-primary font-bold md:text-[10rem] text-8xl md:-mb-2">
            Hello There!
          </h1>
          <h1 className="text-secondary font-bold md:text-[8rem] text-6xl">
            I'm Sebastian Mora
          </h1>
        </div>
        <h1 className="inline-block ml-4 md:ml-14 overflow-hidden text-white whitespace-nowrap font-mono text-lg md:text-xl font-bold animate-typing border-r-4 border-white">
          Programmer, Designer and Developer
        </h1>
      </div>
    </section>
  );
}
