export default function InstagramPost() {
  return (
    <a
      href="https://www.instagram.com/bastian_mora1110/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-[#0c0b0b] h-full w-[85%] mx-auto rounded-xl overflow-y-scroll">
        <div>
          <img
            src="/images/photos/Profile.png"
            className="w-8 ml-3 rounded-full inline-block"
          />

          <h1 className="font-bold text-white inline-block mt-6 mb-6 ml-3 text-sm hover:text-blue-400">
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
        <img src="/images/photos/Me.png" alt="Photo" className="w-full" />
        <div className="w-full h-8 mt-2">
          <svg
            class="h-7 w-7 text-white inline-block ml-2 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <svg
            class="h-7 w-7 text-white inline-block mx-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <svg
            class="h-7 w-7 text-white inline-block mx-1"
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
            <line x1="10" y1="14" x2="21" y2="3" />{" "}
            <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
          </svg>
          <svg
            class="h-7 w-7 text-white inline-block float-right mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
        </div>
        <div className="w-full h-4">
          <p className="text-white text-xs inline-block ml-2">
            Liked by <b>milo_polilla_2</b> and <b>29 others</b>
          </p>
        </div>
        <div className="w-full h-4">
          <p className="text-white text-xs mx-2 mt-3">
            <b>bastian_mora1110</b> Well I wonder do you see me when we pass ...{" "}
            <span className="text-slate-400"> more</span>
          </p>
          <p className="text-sm text-slate-400 mt-4 mx-2">
            View all 7 comments
          </p>
        </div>
      </div>
    </a>
  );
}
