import { createGlobalStyle } from "styled-components";

const Variaveis: React.FC = createGlobalStyle`
  :root {
    --color-main: #FF6006;
    --color-complement: #FF7E06;
    --color-gray-1: #F0F0F0;


    --color-red-dark-1: #470000;
    --color-red-middle-1: #FF0000;
    --color-red-light-1: #FFD2D2;

    --lighter: #ffffff;
    --darker: #000000;
  }
`

export default Variaveis;