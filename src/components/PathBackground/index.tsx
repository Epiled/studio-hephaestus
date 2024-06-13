const PathBackground = () => {

  const svgContainer = {
    width: "110%",
    height: "auto",
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    minWidth: "1520px",
  }

  const pathStyled = {
    strokeDasharray: 2691,
    strokeDashoffset: 0,
    animation: "pathRevel 2.5s linear",
  }

  return (
    <svg style={svgContainer} viewBox="0 0 1440 1224" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="paint0_linear_145_746" x1="674.345" y1="14.9999" x2="674.345" y2="1285" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0066FF" />
        <stop offset="1" stopColor="#E12D6E" />
      </linearGradient>
    </defs>
    <path d="M1526.3,14.9c0,0-145.5,14.7-208,54c-62,39-95,93-109,163c-15.9,79.5-5,140-83,156s-166,22-241,54
      c-53.1,22.6-100,57-111,96s60.1,124.3,93,101c38-27-49-125-113-86c-49,29.9-69,85-63,123s47.6,119.5,83,100c20-11,13-98-120-102
      c-145.9-4.4-243,167-279,213s-170,231-369,323" style={{ ...pathStyled, stroke: 'url(#paint0_linear_145_746)', strokeWidth: '30', fill: 'transparent' }} />
  </svg>
  )
}

export default PathBackground;
