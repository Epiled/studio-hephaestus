import styled, { css } from "styled-components";
import Titulo from "../Titulo";

const BannerEstilizado = styled.section`
  background-image: linear-gradient(90deg, #FF6006 0%, #FF7E06 80% 100%);
  position: relative;
  min-height: 60rem;
`

const BannerConteudo = styled.div`
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
`

const TituloEstilos = {
  base: css`
  font-size: 6.4rem;
  color: white;
  text-transform: uppercase;
`,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 768px)",
      styles: css`
    font-size: 6.4rem;
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

const Banner = () => {

  return (
    <BannerEstilizado>
      <BannerConteudo>
        <Titulo
          sub="Transformamos ideias em "
          text="Obras Primas digitais"
          $styles={TituloEstilos}
        />
      </BannerConteudo>
    </BannerEstilizado>
  )
}

export default Banner