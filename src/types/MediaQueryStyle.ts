import { DefaultTheme, Interpolation } from "styled-components";

type MediaQueryStyle = {
  mediaQuery: string;
  styles: Interpolation<DefaultTheme>;
};

export default MediaQueryStyle;
