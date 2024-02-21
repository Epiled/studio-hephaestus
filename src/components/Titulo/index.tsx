import styled, { Interpolation, css } from "styled-components";

interface ITitulo extends ISub {
  as?: React.ElementType;
  text?: string;
  $styles?: Estilos;
}

interface ISub {
  sub?: string;
  subStyles?: Estilos;
}

type MediaQueryStyle = {
  mediaQuery: string;
  styles: FlattenSimpleInterpolation;
};

type Estilos = {
    mediaQueryStyles: Interpolation<object>;
    mediaQuery: Interpolation<object>;
    base: Interpolation<object>;
  }

const TituloEstilizado = styled.h2<ITitulo>`
  display: flex;
  flex-direction: column;

  ${(props) => props.$styles && css`
    ${props.$styles.base}
  `}

  /* Adicione uma media query personalizada, se especificada */
  ${(props) => props.$styles?.mediaQuery && css`
    @media ${props.$styles.mediaQuery} {
      /* Estilos específicos para a media query */
      ${props.$styles.mediaQueryStyles}
    }
  `}
`;

// const Sub = styled.span<ISub>`
//   font-size: ${(props) => props.subStyles?.fontSize || "2rem"};
//   color: ${(props) => props.subStyles?.color || "black"};
//   text-transform: ${(props) => props.subStyles?.textTransform || "none"};
// `

const Titulo = ({ as: Tag = "h2", sub, text, $styles, subStyles = {} }: ITitulo) => {

  return (
    <TituloEstilizado
      as={Tag}
      $styles={$styles}
    >
      {/* {sub && (
        <Sub subStyles={subStyles}>
          {sub}
        </Sub>
      )} */}

      {text && text}

    </TituloEstilizado>
  )
}

export default Titulo