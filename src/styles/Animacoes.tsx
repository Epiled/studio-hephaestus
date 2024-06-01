import { createGlobalStyle } from "styled-components";

const Animacoes: React.FC = createGlobalStyle`
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes revel {
    0% {
      opacity: 0;
      transform: translate(-25px, 125px) rotate(15deg);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0) rotate(0);
    }
  }

  
  @keyframes hidden {
    0% {
      opacity: 1;
      transform: translate(0, 0) rotate(0);
    }
    100% {
      opacity: 0;
      transform: translate(25px, 25px) rotate(-5deg);
    }
  }

  @keyframes scrollWave {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: -750px;
    }
  }

  @keyframes pathRevel {
    from {
      stroke-dashoffset: 2691;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scrollMaskHorizontal {
    0% {
      -webkit-mask-position-x: 0%;
    }
    100% {
      -webkit-mask-position-x: 57%;
    }
  }
`

export default Animacoes;