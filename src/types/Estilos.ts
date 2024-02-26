import { DefaultTheme, Interpolation } from "styled-components";
import MediaQueryStyle from "./MediaQueryStyle";

type Estilos = {
  base: Interpolation<DefaultTheme>;
  mediaQueries?: MediaQueryStyle[];
}

export default Estilos;