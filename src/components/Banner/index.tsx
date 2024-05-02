import styled, { css } from "styled-components";
import Titulo from "../Titulo";
import Texto from "../Texto";
//import onda from "../../assets/svg/onda.svg";
//import onda2 from "../../assets/svg/onda2.svg";
// import onda3 from "../../assets/svg/waveAnimate_1.svg";
import onda3 from "../../assets/svg/wave.svg";


const BannerEstilizado = styled.section`
  background-image: linear-gradient(90deg, var(--color-main) 0%, var(--color-complement) 80% 100%);
  position: relative;
  min-height: 60rem;

  &::before {
    content: '';
    bottom: 0;
    left: 0;
    position: absolute;
    background-image: 
      url(${onda3});

    background-position: bottom, bottom;
    background-repeat: repeat-x;
    background-size: 750px auto, 100% auto;

    height: 5.3rem;
    width: 100%;

    animation: scrollWave 5s infinite linear forwards;
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
  gap: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    max-width: 80rem;
  }

  @media screen and (min-width: 1440px) {
    left: 15rem;
    transform: translate(0, -50%);
  }
`

const TituloEstilos = {
  base: css`
    color: var(--lighter);
    text-transform: uppercase;
    font-size: 3.6rem;
    margin-bottom: 0;
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

const SubTitleStyle = {
  base: css`
    font-size: 2.4rem;
  `,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 1440px)",
      styles: css`
        font-size: 3.6rem;
      `,
    },
  ]
}

const TextoEstilos = {
  base: css`
    color: var(--lighter);
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 3rem;
  `,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 1440px)",
      styles: css`
        font-size: 2.4rem;
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
          $subStyles={SubTitleStyle}
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