import styled, { css } from "styled-components";
import Estilos from "../../types/Estilos";

interface ITexto {
  text?: string;
  $styles?: Estilos;
}

const TextoEstilizado = styled.p<ITexto>`
  font-size: 1.6rem;
  color: black;

  ${(props) => props.$styles?.base && css`
    ${props.$styles.base}
  `}

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1400px) {
    font-size: 2.4rem;
  }

  ${(props) => props.$styles?.mediaQueries && props.$styles.mediaQueries.map((mqStyle) => css`
    @media ${mqStyle.mediaQuery} {
      ${mqStyle.styles}
    }
  `)}
`

const Texto = ({ text, $styles }: ITexto) => {
  return (
    <TextoEstilizado $styles={$styles}>
      {text}
    </TextoEstilizado>
  )
}

export default Texto