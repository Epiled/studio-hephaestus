import styled, { css, DefaultTheme, Interpolation } from "styled-components";

interface ITitulo extends ISub {
  as?: React.ElementType;
  text?: string;
  $styles?: Estilos;
}

interface ISub {
  sub?: string;
  $subStyles?: Estilos;
}

type MediaQueryStyle = {
  mediaQuery: string;
  styles: Interpolation<DefaultTheme>;
};

type Estilos = {
  base: Interpolation<DefaultTheme>;
  mediaQueries?: MediaQueryStyle[];
}

const TituloEstilizado = styled.h2<ITitulo>`
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  color: black;

  ${(props) => props.$styles?.base && css`
    ${props.$styles.base}
  `}

  ${(props) => props.$styles?.mediaQueries && props.$styles.mediaQueries.map((mqStyle) => css`
    @media ${mqStyle.mediaQuery} {
      ${mqStyle.styles}
    }
  `)}
`;

const Sub = styled.span<ISub>`
  ${(props) => props.$subStyles?.base && css`
    ${props.$subStyles.base}
  `}

  ${(props) => props.$subStyles?.mediaQueries && props.$subStyles.mediaQueries.map((mqStyle) => css`
    @media ${mqStyle.mediaQuery} {
      ${mqStyle.styles}
    }
  `)}
`

const Titulo = ({ as: Tag = "h2", sub, text, $styles, $subStyles }: ITitulo) => {

  return (
    <TituloEstilizado
      as={Tag}
      $styles={$styles}
    >
      {sub && (
        <Sub $subStyles={$subStyles}>
          {sub}
        </Sub>
      )}

      {text && text}

    </TituloEstilizado>
  )
}

export default Titulo