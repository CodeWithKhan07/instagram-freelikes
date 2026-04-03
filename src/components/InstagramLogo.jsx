export default function InstagramLogo({ size = 80 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="ig-gradient-1"
          cx="17"
          cy="48"
          r="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="ig-gradient-2"
          cx="42"
          cy="-4"
          r="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3771C8" />
          <stop offset="0.128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="14"
        fill="url(#ig-gradient-1)"
      />
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="14"
        fill="url(#ig-gradient-2)"
      />
      <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="3" fill="none" />
      <circle cx="36" cy="12" r="2.5" fill="white" />
    </svg>
  );
}
