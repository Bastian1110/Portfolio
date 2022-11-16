export default function BackButton(props) {
  return (
    <button
      onClick={props.clickHandler}
      className="transition ease-in-out hover:bg-[#252631] hover:scale-110 active:bg-secondary p-2 border mx-6 my-4"
    >
      <svg
        className="h-8 w-8 text-white"
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
        <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
      </svg>
    </button>
  );
}
