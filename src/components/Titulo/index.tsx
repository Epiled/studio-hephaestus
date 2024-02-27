import styled, { css } from "styled-components";
import Estilos from "../../types/Estilos";

interface ITitulo extends ISub {
  as?: React.ElementType;
  text?: string;
  $styles?: Estilos;
}

interface ISub {
  sub?: string;
  $subStyles?: Estilos;
}

const TituloEstilizado = styled.h2<ITitulo>`
  display: flex;
  flex-direction: column;
  font-size: 2.4rem;
  color: black;

  ${(props) => props.$styles?.base && css`
    ${props.$styles.base}
  `}

  @media screen and (min-width: 768px) {
    font-size: 3.6rem
  }

  @media screen and (min-width: 1440px) {
    font-size: 4.8rem
  }

  ${(props) => props.$styles?.mediaQueries && props.$styles.mediaQueries.map((mqStyle) => css`
    @media ${mqStyle.mediaQuery} {
      ${mqStyle.styles}
    }
  `)}
`;

const Sub = styled.span<ISub>`
  font-size: 1.2rem;

  ${(props) => props.$subStyles?.base && css`
    ${props.$subStyles.base}
  `}

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }

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