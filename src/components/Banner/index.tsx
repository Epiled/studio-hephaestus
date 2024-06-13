import styled from "styled-components";
import Titulo from "../Titulo";
import Texto from "../Texto";
import wave from "../../assets/wave.svg";

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
      url(${wave});

    background-position: bottom, bottom;
    background-repeat: repeat-x;
    background-size: 750px auto, 100% auto;

    height: 5.3rem;
    width: 100%;

    animation: scrollWave 5s infinite linear forwards;
  }
`

const Wrapper = styled.div`
  width: calc(100vw - 4rem);

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

const TituloStyled = styled(Titulo)`
  color: var(--lighter);
  font-size: 3.6rem;
  font-weight: 900;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 4.8rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 6.4rem;
  }
`

const Sub = styled(Texto).attrs({as: 'span'})`
  color: var(--lighter);
  font-size: 2.4rem;
  font-family: 'Mada', sans-serif;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    font-size: 3.6rem;
  }
`

const TextoStyled = styled(Texto)`
  color: var(--lighter);
  font-family: 'Mada', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 3rem;

  @media screen and (min-width: 1440px) {
    font-size: 2.4rem;
  }
`

const Banner = () => {

  return (
    <BannerEstilizado>
      <BannerConteudo>

        <TituloStyled>
          <Sub>Transformamos ideias em </Sub>
          Obras Primas digitais
        </TituloStyled>

        <TextoStyled
          text="Somos um estúdio de especializado em criar websites de alto desempenho e soluções sob medida. Cada projeto é único, assim como nossos clientes."
        />

      </BannerConteudo>
    </BannerEstilizado>
  )
}

export default Banner
