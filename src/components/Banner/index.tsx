import styled from "styled-components";
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

const Banner = () => {

  return (
    <BannerEstilizado>
      <BannerConteudo>
        <Titulo
          sub="Transformamos ideias em "
          text="Obras Primas digitais"
          $styles={{
            base: {
              fontSize: "6.4rem"
            },
            mediaQuery: "(min-width: 768px)",
            mediaQueryStyles: {
              fontSize: "10rem",
              color: "green",
              // Adicione outras propriedades conforme necessário
            },
          }}
        />
      </BannerConteudo>
    </BannerEstilizado>
  )
}

export default Banner