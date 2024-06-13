import styled from "styled-components";
import Titulo from "../Titulo";
import Texto from "../Texto";
import Wrapper from "../Wrapper";
import serviceDesktop from "../../assets/img/servicos/desktop.svg";
import serviceSEO from "../../assets/img/servicos/seo.svg";
import PathBackground from "../PathBackground";
import { useInView } from "react-intersection-observer";

const ServicosEstilizados = styled.div`
  margin-top: 12rem;
  position: relative;
`

const Servico = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media screen and (min-width: 768px) {
    gap: 5rem;
    flex-direction: row;
    justify-content: space-between;
  }
`

const ServicoAlt = styled(Servico)`
  margin-top: 37rem;
  margin-bottom: 22.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

const ServicoConteudo = styled.div<{ $isVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 2rem;
  opacity: 0;
  animation: ${(props) => (props.$isVisible ? 'top-revel 0.5s ease-in-out forwards' : 0)};

  @media screen and (min-width: 768px) {
    flex: 1;
    max-width: 65rem;
  }
`

const TextosContainer = styled(ServicoConteudo)`
  gap: 2rem;
`

const Imagem = styled.img<{ $isVisible?: boolean }>`
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;
  position: relative;
  top: 2rem;
  opacity: 0;
  opacity: 0;
  animation: ${(props) => (props.$isVisible ? 'top-revel 0.5s ease-in-out forwards' : 0)};


  @media screen and (min-width: 768px) {
    max-width: 55rem;
    flex: 1;
    width: 50%;
    object-fit: contain;
    margin: 0;
  }
`

const TituloStyled = styled(Titulo)`
  color: transparent;
  background-image: linear-gradient(90deg, #FF6006 0%, #FF7E06 80% 100%);
  background-clip: text;
  text-transform: uppercase;
  font-weight: 900;

  @media screen and (min-width: 1440px) {
    font-size: 6.4rem;
  }
`

const TituloStyledAlt = styled(TituloStyled)`
  text-transform: none;

  @media screen and (min-width: 1440px) {
    font-size: 6.4rem;
  }
`

const Sub = styled(Titulo).attrs({ as: 'span' })`
  font-size: 2rem;
  margin-bottom: 0;
`

const SubAlt = styled(Sub)`
  text-transform: none;
`

const TextoStyled = styled(Texto)`
  color: var(--color-font-gray-1);
`

const Servicos = () => {

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <ServicosEstilizados>
      <Wrapper>
        <Servico>
          <ServicoConteudo ref={ref1} $isVisible={inView1} >
            <TituloStyled>
              <Sub>Criando obras Primas </Sub>
              Design Sob Medida
            </TituloStyled>
            <TextosContainer ref={ref1} $isVisible={inView1}>
              <TextoStyled
                text="Do conceito à implementação, criamos designs personalizados que se destacam."
              />
              <TextoStyled
                text="Cada detalhe é pensado para atender às necessidades exclusivas de nossos clientes."
              />
            </TextosContainer>
          </ServicoConteudo>
          <Imagem src={serviceDesktop} ref={ref1} $isVisible={inView1} />
        </Servico>

        <ServicoAlt>
          <ServicoConteudo ref={ref2} $isVisible={inView2}>
            <TituloStyledAlt>
              <SubAlt>Desemepenho e Qualidade </SubAlt>
              Otimização de Desempenho
            </TituloStyledAlt>
            <TextosContainer ref={ref2} $isVisible={inView2}>
              <TextoStyled
                text="Cada site que desenvolvemos é otimizado para oferecer velocidade excepcional, eficiência e uma experiência de usuário sem igual."
              />
            </TextosContainer>
          </ServicoConteudo>
          <Imagem src={serviceSEO} ref={ref2} $isVisible={inView2} />
        </ServicoAlt>
      </Wrapper>
      <PathBackground />
    </ServicosEstilizados>
  );
}

export default Servicos