const CirculoSVG = () => (
  <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FF6006" />
        <stop offset="100%" stop-color="#FF7E06" />
      </linearGradient>
    </defs>
    <circle r="7.5" cx="10" cy="10" fill="url(#grad3)" />
  </svg>
)

export default CirculoSVG;
