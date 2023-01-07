export default function InstagramPost() {
  return (
    <div className="bg-[#0c0b0b] h-[90%] w-[80%] mx-auto rounded-xl">
      <div>
        <img
          src="/images/photos/Profile.png"
          className="w-8 ml-3 rounded-full inline-block"
        />
        <h1 className="font-bold text-white inline-block mt-6 mb-6 ml-3 text-sm">
          bastian_mora1110
        </h1>
        <svg
          class="h-8 w-8 text-white inline-block float-right m-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="5" cy="12" r="1" /> <circle cx="12" cy="12" r="1" />{" "}
          <circle cx="19" cy="12" r="1" />
        </svg>
      </div>
      <img src="/images/photos/Me.png" />
    </div>
  );
}
