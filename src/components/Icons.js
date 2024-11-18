import * as React from "react";

export const WhatsappIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1.4em"
    height="1.4em"
    viewBox="0 0 105.885 105.885"
    {...rest}
    className={` ${className}`}
  >
    <defs>
      <linearGradient id="d">
        <stop
          offset={0}
          style={{
            stopColor: "#000",
            stopOpacity: 0.41666666,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#000",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient id="a">
        <stop
          offset={0}
          style={{
            stopColor: "#006c00",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#00c100",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="e"
        x1={79.186}
        x2={132.859}
        y1={116.516}
        y2={192.112}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#d"
        id="f"
        x1={397.456}
        x2={478.736}
        y1={600.332}
        y2={700.332}
        gradientUnits="userSpaceOnUse"
      />
      <path
        id="b"
        d="M11.113 6.085a.53.53 0 0 0 .529-.529v-3.44a.53.53 0 0 0-.53-.529h-1.058v4.498z"
        style={{
          strokeWidth: 0.26458332,
        }}
      />
      <path
        id="c"
        d="M11.113 6.085a.53.53 0 0 0 .529-.529v-3.44a.53.53 0 0 0-.53-.529h-1.058v4.498z"
        style={{
          strokeWidth: 0.26458332,
        }}
      />
    </defs>
    <g transform="translate(-47.365 -93.159) scale(.95064)">
      <ellipse
        cx={105.845}
        cy={154.125}
        rx={46.125}
        ry={47.625}
        style={{
          opacity: 1,
          fill: "#00c100",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.8041358,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: ".80413575,4.82481454",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
      />
      <circle
        cx={105.515}
        cy={153.687}
        r={52.162}
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          stroke: "#26e72b",
          strokeWidth: 1.56200004,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "1.562,9.372",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
      />
      <ellipse
        cx={105.845}
        cy={154.125}
        rx={46.125}
        ry={47.625}
        style={{
          opacity: 1,
          fill: "url(#e)",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.8041358,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: ".80413575,4.82481454",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
      />
      <path
        d="M469.066 504.81 292.518 695.037l55.097 59.1a169.294 169.294 0 0 0 52.43 8.384c83.967-.06 155.962-61.915 171.283-147.157z"
        style={{
          fill: "url(#f)",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: ".99999994px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="scale(.26458)"
      />
      <path
        d="M106.196 128.976c-13.206 0-23.912 11.054-23.912 24.69.01 5.231 1.45 11.228 2.655 12.525v0l-3.975 14.151 14.242-3.633v0c2.882 1.608 6.007 1.638 10.99 1.646 13.206 0 23.912-11.054 23.912-24.69 0-13.635-10.706-24.689-23.912-24.689z"
        style={{
          opacity: 1,
          fill: "#00a400",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 5.09299994,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
      />
      <path
        d="M96.716 146.469c-.482 4.11 1.311 8.588 3.582 11.884 2.923 4.243 6.55 8.023 11.241 8.726.8.12 2.27-.862 2.27-.862l.02.02a4.104 4.104 0 0 0 1.059-5.706c-1.269-1.848-4.927-1.357-6.815-.106-1.472-1.487-2.891-3.03-3.8-4.31-.847-1.195-1.763-2.898-2.626-4.65 1.755-1.354 3.398-4.582 2.247-6.38-1.194-1.865-3.731-2.406-5.635-1.274l.656 1.605c-.403-.968-.656-1.605-.656-1.605s-1.424 1.64-1.543 2.658z"
        style={{
          opacity: 1,
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.92763442,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
      />
    </g>
  </svg>
);

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect width={28} height={28} x={2} y={2} fill="url(#a)" rx={6} />
    <rect width={28} height={28} x={2} y={2} fill="url(#b)" rx={6} />
    <rect width={28} height={28} x={2} y={2} fill="url(#c)" rx={6} />
    <path fill="#fff" d="M23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C6 21.44 6 19.76 6 16.4v-.8ZM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 0 1 1.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 0 1-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 0 1-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 0 1 1.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076Z"
      clipRule="evenodd"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-55.376 27.916 .066) scale(25.5196)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B13589" />
        <stop offset={0.793} stopColor="#C62F94" />
        <stop offset={1} stopColor="#8A3AC8" />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-65.136 29.766 6.89) scale(22.5942)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E0E8B7" />
        <stop offset={0.445} stopColor="#FB8A2E" />
        <stop offset={0.715} stopColor="#E2425C" />
        <stop offset={1} stopColor="#E2425C" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(38.50003 -5.5 1.1764 8.23476 .5 3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.157} stopColor="#406ADC" />
        <stop offset={0.468} stopColor="#6A45BE" />
        <stop offset={1} stopColor="#6A45BE" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M487.609 776.318c7.994 1.25 15.547 2.498 23.129 3.53 3.8.518 5.086 2.4 4.425 6.101-4.879 27.329-8.967 54.783-13.019 82.243-.435 2.95-1.223 4.982-5.056 4.316-14.584-2.532-29.317-4.31-43.79-7.343-23.216-4.867-38.75-23.594-38.503-45.256.308-27.099 19.548-46.106 46.597-46.357 8.736-.082 17.227 1.467 26.217 2.766m-49.123 36.779c-2.635 20.198 5.274 31.642 24.458 35.213 4.908.914 9.878 1.489 14.81 2.278 2.753.44 4.439-.28 4.904-3.362a5288.568 5288.568 0 0 1 7.504-48.333c.39-2.43-.445-3.345-2.715-3.67a658.283 658.283 0 0 1-15.78-2.478c-16.178-2.726-27.659 4.075-33.181 20.352zM371.06 261.964c-6.296-4.93-12.318-9.635-19.649-15.361 1.635 8.596 2.984 15.766 4.364 22.93 1.165 6.043 2.295 12.094 3.58 18.11.57 2.674-.136 4.454-2.594 5.745-2.205 1.158-4.257 2.607-6.38 3.924-9.263 5.75-6.688 5.567-14.755-.741-15.477-12.103-30.84-24.354-46.23-36.57-2.044-1.622-3.967-3.398-6.607-5.672 5.572-3.405 10.467-6.464 15.435-9.4 2.2-1.3 3.73.304 5.293 1.573 9.957 8.077 19.92 16.147 29.894 24.203 1.393 1.125 2.857 2.162 5.252 3.967-2.972-14.229-5.807-27.326-8.374-40.475-.54-2.767-3.05-6.18-.407-8.44 4.004-3.425 8.519-6.44 13.551-8.282 1.661-.608 2.975 1.207 4.247 2.225 11.292 9.044 22.56 18.116 34.903 28.038-2.23-10.629-4.212-20.066-6.188-29.504a6611.214 6611.214 0 0 1-3.259-15.643c-.343-1.658-.723-3.432.998-4.539 4.44-2.856 8.95-5.608 13.99-8.75 2.795 5.956 3.246 11.753 4.421 17.316 3.745 17.726 7.26 35.5 11.104 53.205.654 3.012-.089 4.57-2.5 6.171-13.373 8.89-13.346 8.934-25.905-.697-1.321-1.013-2.609-2.07-4.185-3.333zM817.758 668.245c.659-1.596.302-2.557-.898-3.254-4.575-2.657-8.92-5.758-14.49-7.668-3.856 6.885-7.657 13.674-11.46 20.462-2.36 4.213-4.803 8.382-7.053 12.653-1.425 2.705-2.946 3.594-5.898 1.85-13.81-8.156-12.856-4.023-5.325-18.07 4.55-8.488 9.242-16.9 14.143-25.843-5.375-3.092-10.322-6.075-15.405-8.806-2.784-1.495-3.368 1.272-4.25 2.841-6.614 11.754-13.316 23.464-19.598 35.394-2.032 3.86-3.842 4.028-7.347 2.087-11.104-6.148-11.246-6.085-5.229-17.082 8.872-16.214 17.936-32.322 26.765-48.56 1.73-3.179 3.29-3.849 6.606-1.988 24.398 13.686 48.872 27.237 73.376 40.732 3.097 1.705 3.862 3.198 1.95 6.586a3346.525 3346.525 0 0 0-29.438 53.357c-2.005 3.71-3.81 4.043-7.369 1.963-11.15-6.514-11.247-6.392-5.15-17.49 5.29-9.632 10.631-19.236 16.07-29.164zM634.254 819.683a48137.584 48137.584 0 0 1-25.953-49.939c-3.079-5.934-3.06-5.94 3.085-9.073 2.372-1.21 4.88-2.223 7.07-3.703 3.413-2.307 6.092-2.489 8.08 2.82 6.27-12.413 16.153-18.694 28.781-20.655 7.853-1.22 15.184.73 21.976 4.852 14.466 8.78 22.266 29.059 17.155 44.75-5.067 15.558-20.774 25.487-38.425 24.112-.563 2 .867 3.412 1.63 4.903 3.485 6.814 6.997 13.619 10.705 20.312 1.48 2.67 1.057 4.185-1.667 5.496-3.896 1.874-7.771 3.828-11.477 6.046-3.216 1.925-4.945 1.192-6.58-2.1-4.587-9.237-9.447-18.34-14.38-27.82m12.038-58.045c-9.893 6.804-10.982 19.107-2.522 29.023 4.375 5.13 10.06 7.13 16.562 5.803 6.415-1.309 11.226-4.995 13.312-11.476 2.731-8.49-.597-15.56-6.348-21.264-5.815-5.767-13.028-5.977-21.004-2.086zM520.3 160.17c-.259 5.42-.515 10.366-.817 16.209 11.503-7.23 23.023-7.26 34.631-2.192 6.936 3.028 12.096 8.117 15.696 14.79 8.011 14.85 4.955 35.816-6.822 46.64-13.155 12.09-29.854 12.399-48.122.703l-1.096 5.456c-6.095 1.318-11.992-.22-17.895-.714-2.177-.182-2.124-2.306-2.017-3.969 1.168-18.074 2.397-36.145 3.566-54.22.761-11.777 1.65-23.551 2.067-35.342.148-4.196 1.929-5.17 5.53-4.839 3.476.32 6.97.8 10.442.7 5.106-.148 6.288 2.436 5.7 6.87-.414 3.128-.583 6.288-.863 9.908m30.57 38.656c-5.527-10.112-16.728-13.451-25.773-7.5-6.605 4.347-8.005 11.08-7.764 18.4.303 9.207 6.864 16.23 15.816 16.973 9.055.752 16.43-4.943 18.625-13.898 1.123-4.578.68-8.885-.904-13.975zM741.823 254.197 726.2 241.27l-14.854 17.536c7.444 6.279 14.637 12.363 21.852 18.422a390.52 390.52 0 0 0 8.114 6.646c2.157 1.715 2.266 3.346.35 5.414-2.26 2.437-4.485 4.959-6.346 7.7-2.102 3.097-3.969 2.695-6.482.555-8.494-7.233-17.19-14.23-25.592-21.567-2.847-2.486-4.546-2.324-6.828.582-5.036 6.413-10.457 12.525-15.47 18.954-2.205 2.827-3.931 2.876-6.463.55-3.43-3.153-7.05-6.103-10.678-9.032-2.32-1.873-2.375-3.564-.457-5.857 18.16-21.71 36.281-43.45 54.322-65.259 2.279-2.754 3.99-2.56 6.564-.39a5409.015 5409.015 0 0 0 47.198 39.342c2.805 2.311 3.104 4.028.676 6.906-8.672 10.276-8.59 10.36-18.875 1.92-3.733-3.063-7.423-6.178-11.407-9.495zM192.976 467.81c14.275-7.146 27.964-6.48 40.39 2.8 13.03 9.73 16.718 23.75 14.373 39.227-3.554 23.47-23.688 36.884-46.284 31.403-17.55-4.256-29.695-23.143-27.41-42.358 1.562-13.148 7.057-23.818 18.93-31.072m3.924 22.585c-6.181 7.979-6.21 18.29-.069 24.63 5.684 5.868 19.195 6.998 26.124 2.14 6.012-4.215 7.558-10.259 6.836-17.165-.627-5.998-3.786-10.404-9.245-12.66-8.046-3.323-15.935-3.048-23.646 3.055zM445.329 232.713c9.378 1.43 17.293-.83 23.576-7.47 2.364-2.5 4.266-2.695 6.76-.627.893.742 1.895 1.357 2.864 2.005 8.208 5.495 8.246 5.956 1.037 13.023-12.887 12.632-38.54 15.457-53.047 5.84-12.772-8.468-18.88-23.755-15.7-39.297 2.875-14.055 15.288-25.486 30.885-28.443 20.353-3.86 37.975 7.213 43.065 27.06 1.803 7.026 1.446 7.589-5.471 9.14-13.64 3.06-27.274 6.15-40.911 9.222-1.268.285-2.714.165-3.61 1.913 1.817 4.444 5.761 6.299 10.552 7.634m-14.217-25.504c-.695 3.065.591 3.96 3.483 3.277 4.367-1.032 8.75-1.993 13.128-2.977 4.947-1.111 9.895-2.215 14.883-3.33-2.147-6.78-7.489-10.21-14.815-10.058-8.522.176-14.273 4.461-16.679 13.088zM378.08 818.225c-13.926-.937-24.693-6.89-32.604-17.746-7.92-10.868-7.764-27.945-.206-39.179 1.993-2.962 3.835-2.26 6.28-1.008a5105.713 5105.713 0 0 0 37.46 18.959c1.576.79 3.04 2.099 5.432 1.736 1.559-5.466-.231-10.08-3.953-13.986-5.612-5.89-12.637-8.753-20.744-7.763-4.336.529-6.612-.624-7.161-5-.143-1.14-.629-2.238-.956-3.356-2.37-8.091-2.187-8.376 6.244-9.705 15.858-2.5 38.273 10.402 44.94 25.868 6.69 15.52 1.77 33.331-12.31 44.185-6.445 4.968-13.878 7.054-22.422 6.995m-9.992-19.684c8.91 3.949 16.302 2.425 20.225-4.575-9.288-4.97-18.463-10.116-28.207-14.172-3.242 7.017-.44 13.758 7.982 18.747zM801.256 349.383c19.55 7.564 31.348 28.832 27.084 48.276-5.65 25.764-36.063 37.322-57.377 21.805-20.195-14.704-23.548-45.835-6.229-61.666 10.24-9.36 22.49-12.48 36.522-8.415m3.9 49.26c3.685-4.121 6.255-8.644 5.038-14.46-3.037-14.516-17.385-19.611-30.3-10.772-6.04 4.134-8.887 11.508-7.076 18.328 2.074 7.812 8.376 13.599 15.896 13.67 5.97.056 11.362-2.266 16.442-6.766zM262.11 708.914c2.707 1.636 5.123 3.064 7.722 4.6-1.242 4.714-3.773 8.641-6.043 12.637-1.697 2.989-4.183 1.156-6.103.134-9.97-5.307-17.56-13.158-23.156-22.854-9.908-17.168-7.16-30.308 8.834-42.076 9.92-7.299 20.122-14.214 30.122-21.407 2.536-1.825 4.384-1.888 6.161.907 1.785 2.807 3.585 5.643 5.72 8.18 2.86 3.4 3.754 6.279-2.127 8.941 12.58 3.217 19.432 11.348 23.344 22.123 5.65 15.562-5.014 30.527-20.683 29.18-7.065-.608-12.456-4.608-16.82-9.822-3.945-4.713-7.408-9.831-11.06-14.787-1.069-1.45-1.901-3.11-3.552-3.956-4.911 3.4-6.39 7.887-4.41 13.459 2.206 6.21 6.623 10.673 12.052 14.74m11.928-24.44c1.394 1.656 2.743 3.36 4.703 4.413 4.59 2.463 10.147-.033 10.607-5.169.469-5.23-2.415-9.307-6.372-12.319-3.84-2.921-8.228-4.443-13.066-2.132-3.313 1.583-4.554 3.644-1.862 6.957 1.99 2.45 3.705 5.124 5.99 8.25zM227.296 327.374c19.135-26.724 52.524-19.527 64.147 2.975 8.928 17.285 1.6 41.112-16.043 52.434-16.007 10.273-36.603 6.931-48.478-7.865-10.905-13.586-10.849-30.363.374-47.544m41.537 37.07c.846-.803 1.749-1.554 2.528-2.416 6.8-7.521 6.375-17.865-.985-24.516-9.21-8.322-20.54-8.586-27.53-.642-5.938 6.749-6.258 15.752-.797 22.365 7.281 8.815 17.102 10.932 26.784 5.208zM812.197 486.017c3.238-.45 6.063-.708 8.833-1.246 8.876-1.725 12.431-6.307 11.755-14.959-.66-8.445-6.195-14.241-14.332-14.426-10.354-.234-20.455 2.255-30.69 3.35-11.646 1.246-10.663 3.778-12.157-9.173-1.195-10.358-1.25-10.57 9.33-12.118 18.412-2.693 36.88-5.007 55.296-7.679 4.363-.633 6.187.655 6.177 5.11a33.135 33.135 0 0 0 1.052 8.38c1.25 4.776.75 8.061-6.34 7.279 6.875 6.997 10.374 14.243 11.414 22.844 1.874 15.511-6.31 28.267-21.6 31.634-9.394 2.069-19.06 2.907-28.608 4.28-4.443.64-8.905 1.152-13.334 1.877-3.382.554-5.45-.392-5.844-4.077-.476-4.459-.985-8.92-1.659-13.352-.453-2.977 1.04-3.73 3.597-4.053 8.9-1.124 17.783-2.394 27.11-3.671zM738.918 764.18c-12.32 5.904-23.232 3.685-32.565-5.14-10.04-9.493-19.475-19.626-29.237-29.416-1.956-1.96-2.024-3.528.022-5.438 3.164-2.955 6.341-5.923 9.227-9.142 2.506-2.796 4.422-2.661 6.94.004 6.635 7.022 13.445 13.879 20.208 20.78 1.632 1.664 3.259 3.352 5.042 4.844 6.164 5.158 12.15 5.571 17.7 1.34 6.352-4.845 8.393-12.69 5.041-19.581-1.325-2.726-3.288-4.986-5.404-7.14-6.89-7.009-13.64-14.157-20.65-21.042-2.696-2.648-3.293-4.577-.106-7.264 3.174-2.676 6.055-5.72 8.914-8.746 2.022-2.139 3.657-2.29 5.805-.087 15 15.388 30.06 30.719 45.148 46.022 1.941 1.97 2.018 3.566-.087 5.419-2.498 2.2-5.094 4.354-7.243 6.873-3.023 3.542-5.846 5.652-9.793-.056-1.87 12.759-8.492 21.425-18.962 27.77z" />
    <path d="M282.143 757.817c-3.087-3.767-5.568-7.496-7.567-11.558-1.207-2.452-.737-4.137 1.82-5.183.308-.126.604-.283.901-.433 9.943-5.023 9.896-4.992 16.025 4.08 3.39 5.017 7.394 9.506 12.948 12.204 2.763 1.343 5.921 2.15 8.256-.67 2.265-2.735-.059-5.1-1.543-7.138-4.702-6.455-10.425-12.147-14.331-19.205-3.652-6.598-4.374-13.177-.134-19.847 4.89-7.694 13.51-11.08 23.09-8.68 13.34 3.34 22.648 12.242 30.631 22.813 2.51 3.324 4.635 6.901 6.28 10.77 1.153 2.712.561 4.436-2.167 5.552-3.54 1.449-7.066 4.237-10.558 4.175-4.407-.078-4.074-5.718-6.134-8.712-4.017-5.84-8.383-11.214-14.452-14.989-2.631-1.637-5.694-3.03-8.227-.365-2.76 2.905-.357 5.634 1.445 7.967 4.377 5.666 9.344 10.874 13.185 16.956 5.153 8.158 5.38 15.679.368 22.353-5.597 7.455-12.979 10.763-22.32 8.602-11.433-2.645-19.746-9.975-27.516-18.692zM783.862 531.943c6.484-7.271 14.5-8.923 23.387-7.88 7.095.832 14.2 1.591 21.272 2.588 4.435.625 7.254-.507 7.104-5.492-.119-3.984 2-4.868 5.406-4.266 1.31.232 2.622.474 3.943.62 7.132.794 7.21.784 7.243 7.843.012 2.651.97 4.11 3.673 4.253.498.026 1.002.013 1.495.08 14.308 1.963 11.669-.65 10.329 13.066-.902 9.234-1.368 9.12-10.76 8.636-2.272-.117-4.578-.93-7.338.051-.46 3.931-1.03 8.004-1.387 12.095-.286 3.295-1.485 4.482-5.122 4.077-12.234-1.359-12.463-1.217-11.06-13.522.494-4.324-.305-5.838-4.898-6.019-6.955-.274-13.89-1.305-20.806-2.213-8.309-1.09-12.237 2.194-11.04 10.578.697 4.876-.875 6.195-5.248 7.147-10.717 2.333-12.133 1.377-12.424-9.678-.207-7.865 1.209-15.224 6.23-21.964zM232.679 394.237c10.486 3.942 20.592 7.795 30.747 11.511 2.875 1.052 4.07 2.372 2.66 5.543a109.631 109.631 0 0 0-4.564 12.14c-1.076 3.484-2.864 3.75-5.984 2.582-27.893-10.437-55.807-20.822-83.779-31.047-3.793-1.387-4.488-3.158-2.922-6.677 1.552-3.49 2.894-7.108 3.926-10.782 1.102-3.925 3.114-4.342 6.661-3.005 17.594 6.63 35.255 13.08 53.255 19.735zM159.218 439.21c-3.348-.598-4.104-2.322-3.388-5.129a292.828 292.828 0 0 0 3.024-13.118c.611-2.955 2.201-3.699 5.033-3.033 29.293 6.89 58.584 13.791 87.924 20.48 3.592.818 4.267 2.404 3.482 5.532-.85 3.385-1.551 6.807-2.361 10.202-1.534 6.434-1.541 6.404-7.83 4.945a87912.875 87912.875 0 0 0-85.884-19.88zM782.059 302.075c2.38 3.83 2.38 3.83-2.186 9.08 7.169 1.488 13.065 4.903 17.94 10.125 2.284 2.446 2.694 4.467-.49 6.397-.85.515-1.566 1.24-2.368 1.837-2.938 2.182-5.625 5.48-8.897 6.238-4.13.956-4.933-4.47-7.675-6.639-6.425-5.083-13.585-5.643-21.184-.323-8.183 5.73-16.234 11.69-23.938 18.04-4.116 3.393-6.364 2.67-8.99-1.46-2.573-4.045-5.663-7.76-8.55-11.653 2.355-3.374 5.615-5.187 8.471-7.377 14.807-11.353 29.758-22.517 44.56-33.876 2.856-2.192 4.766-2.41 6.834.897 1.847 2.956 4.154 5.624 6.473 8.714zM233.207 623.237c9.903-4.071 19.486-7.88 28.945-11.974 3.17-1.372 4.897-.903 6.084 2.395a181.173 181.173 0 0 0 5.021 12.497c1.275 2.858.309 4.114-2.4 5.208-19.581 7.91-39.134 15.888-58.636 23.99-3.343 1.388-4.913.34-6.005-2.739-1-2.817-2.129-5.597-3.347-8.328-1.738-3.9-3.834-7.81 4.172-8.75-3.455-2.601-6.012-4.297-8.298-6.302-2.905-2.549-4.836-5.893-6.771-9.205-1.7-2.908-1.363-4.997 2.137-6.068 1.108-.339 2.147-.899 3.235-1.31 3.26-1.232 6.583-3.537 9.776-3.373 3.728.192 3.344 5.123 5.122 7.77 4.605 6.856 11.11 9.01 20.965 6.19zM195.22 552.036c4.161 19.116 14.453 20.716 28.694 16.848 7.852-2.132 15.934-3.401 23.867-5.258 3.304-.773 4.976.017 5.527 3.529.67 4.262 1.616 8.49 2.653 12.68.721 2.912-.224 4.35-3.121 4.957-20.845 4.362-41.678 8.78-62.513 13.187-2.547.539-4.163-.15-4.656-2.978-.57-3.274-1.173-6.568-2.133-9.74-1.386-4.586-1.373-8.135 6.103-8.087-5.965-5.251-9.939-10.314-12.196-16.683-1.496-4.221-.662-6.343 3.872-6.721 4.595-.384 8.868-2.929 13.902-1.734zM818.508 578.474c2.308 1.405 1.457 3.063 1.016 4.621-2.666 9.418-5.47 18.8-7.975 28.26-.978 3.695-2.882 4.29-6.223 3.267-14.758-4.522-12.16-1.954-8.686-15.193 1.852-7.056 4.135-13.997 6.071-21.032.831-3.02 2.293-4.124 5.411-3.05 3.29 1.135 6.682 1.974 10.386 3.127zM622.213 238.195c7.039 3.027 10.564 8.074 9.856 13.699-.763 6.065-5.765 11.46-11.404 12.304-5.966.891-11.81-2.274-14.176-7.825-2.058-4.825-1.412-9.514 1.605-13.673 3.397-4.683 8.244-5.785 14.119-4.505zM544.808 785.955c.451-10.924 12.598-16.988 21.312-10.64 4.613 3.36 6.595 9.77 4.798 15.178-1.631 4.91-7.098 8.627-12.806 8.705-5.782.079-10.48-3.294-12.38-8.967-.418-1.25-.616-2.574-.924-4.276z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
