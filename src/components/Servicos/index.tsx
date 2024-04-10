import styled, { css } from "styled-components";
import Titulo from "../Titulo";
import Texto from "../Texto";
import Wrapper from "../Wrapper";
import imagem from "../../assets/imagem.png"
import Lottie from "lottie-react";
import animationData from '../../db/data.json';
import walk from '../../db/walk.json';


const ServicosEstilizados = styled.div`
  margin-top: 25rem;
`

const Servico = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 20rem;
  
  @media screen and (min-width: 768px) {
    gap: 5rem;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40rem;
  }
`

const ServicoAlt = styled(Servico)`
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

const ServicoConteudo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex: 1;
    max-width: 65rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 3rem;
  }
`

const TextosContainer = styled(ServicoConteudo)`
  gap: 2rem;
`

const Imagem = styled.img`
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 55rem;
    flex: 1;
    width: 50%;
    object-fit: contain;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
  }
`

const TituloEstilos = {
  base: css`
    color: transparent;
    background-image: linear-gradient(90deg, #FF6006 0%, #FF7E06 80% 100%);
    background-clip: text;
    text-transform: uppercase;
    font-weight: 900;
  `,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 1440px)",
      styles: css`
        font-size: 6.4rem;
      `,
    },
  ],
}

const TituloEstilosAlt = {
  base: css`
  ${TituloEstilos.base};
    text-transform: none;
  `
}

const SubEstilos = {
  mediaQueries: [
    {
      mediaQuery: "(min-width: 1440px)",
      styles: css`
        font-size: 2rem;
      `,
    },
  ],
}

const SubEstilosAlt = {
  base: css`
    text-transform: none;
  `
}

const TextoEstilos = {
  base: css`
  color: #333333;
`,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 768px)",
      styles: css`
      font-size: 2.4rem;
    `,
    },
    {
      mediaQuery: "(min-width: 1440px)",
      styles: css`
      font-size: 3.2rem;
    `,
    },
  ],
}

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Servicos = () => {
  return (
    <ServicosEstilizados>
      {/* <Lottie animationData={walk} /> */}
      <Wrapper>
        <Servico>
          <ServicoConteudo>
            <Titulo
              sub="Criando obras Primas "
              text="Design Sob Medida"
              $styles={TituloEstilos}
              $subStyles={SubEstilos}
            />
            <TextosContainer>
              <Texto
                text="Do conceito à implementação, criamos designs personalizados que se destacam."
                $styles={TextoEstilos}
              />
              <Texto
                text="Cada detalhe é pensado para atender às necessidades exclusivas de nossos clientes."
                $styles={TextoEstilos}
              />
            </TextosContainer>
          </ServicoConteudo>
          <Imagem src={imagem} />
        </Servico>

        <ServicoAlt>
          <ServicoConteudo>
            <Titulo
              sub="Desemepenho e Qualidade "
              text="Otimização de Desempenho"
              $styles={TituloEstilosAlt}
              $subStyles={SubEstilosAlt}
            />
            <TextosContainer>
              <Texto
                text="Cada site que desenvolvemos é otimizado para oferecer velocidade excepcional, eficiência e uma experiência de usuário sem igual."
                $styles={TextoEstilos}
              />
            </TextosContainer>
          </ServicoConteudo>
          <Imagem src={imagem} />
        </ServicoAlt>
      </Wrapper>
    </ServicosEstilizados>
  );
}

export default Servicos