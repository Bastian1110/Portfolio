export default function LookInGit(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative duration-300 border-2 ${props.borderColor} rounded-md ${props.hover} ${props.bg} no-underline table mt-4`}
    >
      <img
        src="/images/technologies/Github.png"
        className="w-8 my-2 ml-2 float-left"
      />
      <h1
        className={`${props.textColor} mx-4 ml-4 inline-block float-left pt-2.5`}
      >
        Look on <b>Github</b>
      </h1>
    </a>
  );
}
