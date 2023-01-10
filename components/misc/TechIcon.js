export default function TechIcon(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="overflow-hidden aspect-square cursor-pointer relative group">
        <div className="w-[100%] h-[100%]  z-50 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out cursor-pointer absolute bg-[#303340] flex items-end">
          <span className="text-white font-bold text-[200%] mx-auto align-middle text-center mb-[38%] group-hover:opacity-100 z-1">
            {props.name}
          </span>
        </div>
        <img
          alt={props.name}
          className={`aspect-square group-hover:scale-90 transition duration-300 ease-in-out mx-auto mt-[0%] ${props.padding}`}
          src={props.src}
        />
      </div>
    </a>
  );
}
