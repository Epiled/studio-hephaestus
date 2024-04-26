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
    }
    100% {
      opacity: 1;
    }
  }

  
  @keyframes hidden {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export default Animacoes;