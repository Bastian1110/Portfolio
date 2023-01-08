export default function TechIcon(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative duration-300"
    >
      <span class="transition-all duration-500 absolute hidden group-hover:flex left-[20%] -top-2 -translate-y-full w-48 px-2 py-1 bg-[#2a2b38] rounded-lg text-center text-white font-bold text-lg mx-auto">
        {props.name}
      </span>
      <img
        src={props.src}
        className={`${props.padding} hover:bg-slate-500 hover:rounded-xl`}
      />
    </a>
  );
}
