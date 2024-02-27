import styled, { css } from "styled-components";
import Titulo from "../Titulo";
import Texto from "../Texto";
import onda from "../../assets/svg/onda.svg";
import onda2 from "../../assets/svg/onda2.svg";
import onda3 from "../../assets/svg/onda3.svg";


const BannerEstilizado = styled.section`
  background-image: linear-gradient(90deg, #FF6006 0%, #FF7E06 80% 100%);
  position: relative;
  min-height: 60rem;

  &::before {
    content: '';
    top: 100%;
    left: 0;
    position: absolute;
    background-image: 
      url(${onda3}),
      linear-gradient(90deg, #FF6006 0%, #FF7E06 80% 100%);
    background-position: bottom;
    background-repeat: repeat-x;
    height: 6.8rem;
    width: 100%;
  }
`

const Wrapper = styled.div`
  width: calc(100vw - 5rem);

  @media screen and (min-width: 768px) {
    width: calc(100vw - 7.5rem);
  }

  @media screen and (min-width: 1440px) {
    width: calc(100vw - 10rem);
  }
`

const BannerConteudo = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    gap: 2rem;
    max-width: 80rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 3rem;
    left: 15%;
    transform: translate(0, -50%);
  }
`

const TituloEstilos = {
  base: css`
    color: white;
    text-transform: uppercase;
  `,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 768px)",
      styles: css`
        font-size: 4.8rem;
      `,
    },
    {
      mediaQuery: "(min-width: 1440px)",
      styles: css`
        font-size: 6.4rem;
      `,
    },
  ],
}

const TextoEstilos = {
  base: css`
    color: white;
    font-size: 1.6rem;
  `,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 768px)",
      styles: css`
        font-size: 2rem;
      `,
    },
  ],
}

const Banner = () => {

  return (
    <BannerEstilizado>
      <BannerConteudo>

        <Titulo
          sub="Transformamos ideias em "
          text="Obras Primas digitais"
          $styles={TituloEstilos}
        />
        <Texto
          text="Somos um estúdio de especializado em criar websites de alto desempenho e soluções sob medida. Cada projeto é único, assim como nossos clientes."
          $styles={TextoEstilos}
        />

      </BannerConteudo>
    </BannerEstilizado>
  )
}

export default Banner