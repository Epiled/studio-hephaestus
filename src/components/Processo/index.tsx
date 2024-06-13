import styled from "styled-components";
import Wrapper from "../Wrapper";
import TituloSection from "../Titulo";
import processoConceito from "../../assets/img/processo/conceito.svg";
import processoMaterial from "../../assets/img/processo/material.svg";
import processoMobile from "../../assets/img/processo/mobile.svg";
import processoForja from "../../assets/img/processo/forja.svg";
import processoRefinamento from "../../assets/img/processo/refinamento.svg";
import processoMundo from "../../assets/img/processo/mundo.svg";
import CirculoSVG from "../CirculoSVG";
import Titulo from "../Titulo";

const ProjetosEstilizados = styled.section`
  margin-top: 15rem;
`

const Part = styled.div<{ $alt?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  min-height: 30rem;
  padding: 2.5rem 0;
  position: relative;

  &:first-of-type {
    margin-top: 10rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: ${props => props.$alt ? 'row-reverse' : 'row'};
    justify-content: center;
    gap: 10rem;
  }

  @media screen and (min-width: 1440px) {
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 30rem;

  @media screen and (min-width: 1440px) {
    max-width: 48.9rem;
  }
`

const TituloStyled = styled(Titulo)`
display: block;
  font-size: 3.2rem;
  font-weight: bold;

  @media screen and (min-width: 1440px) {
    font-size: 3.9rem;
  }
`

const TituloStyledAlt = styled(Titulo)`
  display: block;
  margin-bottom: 0;
`

const Sub = styled(TituloStyled).attrs({as: 'span'})`
  font-size: 2.4rem;
  font-weight: 400;
  background-image: linear-gradient(90deg, var(--color-main) 0%, var(--color-complement) 80% 100%);
  background-clip: text;
  color: transparent;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }
`

const Des = styled.span`
  color: transparent;
  background-image: linear-gradient(90deg, #FF6006 0%, #FF7E06 80% 100%);
  background-clip: text;
`

const Texto = styled.p`
  font-size: 2rem;
  font-weight: 100;

  @media screen and (min-width: 1440px) {
    font-size: 2.4rem;
  }
`

const Imagem = styled.img`
  width: 100%;
  max-width: 30rem;
  
  @media screen and (min-width: 1440px) {
    max-width: 48.9rem;
  }
`

const Rodape = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextoRodape = styled.p`
  font-size: 2.4rem;
  text-align: center;

  &:first-of-type {
    margin-top: 10rem;
  }

  &:last-of-type {
    margin-top: 2.5rem;
    margin-bottom: 7.5rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }
`

interface IContainerSVG {
  $largura?: string,
  $distancia?: string,
  $altura?: string,
  $top?: string,
  $zIndex?: number,
}

const ContainerSVG = styled.div<IContainerSVG>`
  position: absolute;
  top:  ${props => props.$top ? props.$top : '0'};;
  left: ${props => props.$distancia ? props.$distancia : '0'};
  width: ${props => props.$largura ? props.$largura : "100%"}; /* Largura do container SVG */
  height:  ${props => props.$altura ? props.$altura : "-webkit-fill-available"}; /* Altura do container SVG */
  z-index: ${props => props.$zIndex ? props.$zIndex : 0};
`

const Vetor = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  stroke-linecap: square;
`

const Caminho = styled.path<{ $color?: string, $sw?: string | number }>`
  fill: none;
  stroke: ${props => props.$color ? props.$color : '#332424'};
  stroke-width: ${props => props.$sw ? props.$sw : 15};
`

const CaminhoSup = styled(Caminho)`
  stroke: #F26222;
  stroke-width: 5;
  z-index: 1;
`

const Processo = () => {
  return (
    <ProjetosEstilizados>
      <Wrapper>
        <TituloStyled>
          <Sub>
            Quer conhecer o processo?
          </Sub>
          Assim que nasce uma obra prima<Des>.</Des>
        </TituloStyled>

        <Part $alt>
          <ContainerSVG>
            <Vetor
              viewBox="0 0 641.5 448.5"
              width="641.5"
              height="448.5"
              preserveAspectRatio="none"
            >
              <Caminho
                d="M634,0v441H0"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>

          {/* <ContainerSVG
            $distancia="3.5px"
            $largura="calc(50% - 7px)"
            $altura="calc(100% - 3.5px)"
          >
            <Vetor
              viewBox="0 0 636.5 456.5"
              width="636.5"
              height="456.5"
              preserveAspectRatio="none"
            >
              <CaminhoSup
                d="M634,0v454H0"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG> */}

          <Box>
            <TituloStyledAlt><Des>1.</Des> O Conceito</TituloStyledAlt>
            <Texto>
              Aqui teremos uma conversa para entender o seu negocio e sua necessidade.
            </Texto>
          </Box>
          <Imagem src={processoConceito} />
        </Part>

        <Part>
          <ContainerSVG>
            <Vetor
              viewBox="0 0 1277.5 417.5"
              width="1277.5"
              height="417.5"
              preserveAspectRatio="none"
            >
              <Caminho
                d="M7.5,0v410h1270"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>

          {/* <ContainerSVG
            $top="-3.5px"
            $distancia="3.5px"
            $largura="calc(100% - 7px)"
            $altura="100%"
          >
            <Vetor
              viewBox="0 0 1272.5 412.5"
              width="1272.5"
              height="412.5"
              preserveAspectRatio="none"
            >
              <CaminhoSup
                d="M2.5,0v410h1270"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG> */}

          <Box>
            <TituloStyledAlt><Des>2.</Des> Coleta de materia prima</TituloStyledAlt>
            <Texto>
              Neste ponto, nosso cliente ativamente diz, quais são os elementos que  agradão em uma obra e oque não pode faltar.
            </Texto>
          </Box>
          <Imagem src={processoMaterial} />
        </Part>

        <Part $alt>
          <ContainerSVG>
            <Vetor
              viewBox="0 0 1277.5 531.5"
              width="1277.5"
              height="531.5"
              preserveAspectRatio="none"
            >
              <Caminho
                d="M1270,0v524H0"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>

          <ContainerSVG
            $top="-3.5px"
            $distancia="4px"
            $largura="calc(100% - 7.5px)"
            $altura="100%"
          >
            <Vetor
              viewBox="0 0 1272.5 526.5"
              width="1272.5"
              height="526.5"
              preserveAspectRatio="none"
            >
              <CaminhoSup
                d="M1270,0v524H0"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>
          <Box>
            <TituloStyledAlt><Des>3.</Des> A concepção do molde</TituloStyledAlt>
            <Texto>
              Tendo o conceito e a materia prima em mãos, um model será concebido, um wireframe, ilustrado o corpo e aparecia da obra.
            </Texto>
          </Box>
          <Imagem src={processoMobile} />
        </Part>

        <Part>
          <ContainerSVG>
            <Vetor
              viewBox="0 0 1277.5 511.5"
              width="1277.5"
              height="511.5"
              preserveAspectRatio="none"
            >
              <Caminho
                d="M7.5,0v504h1270"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>

          <ContainerSVG
            $top="-3.5px"
            $distancia="4px"
            $largura="calc(100% - 9.5px)"
            $altura="100%"
          >
            <Vetor
              viewBox="0 0 1272.5 506.5"
              width="1272.5"
              height="506.5"
              preserveAspectRatio="none"
            >
              <CaminhoSup
                d="M2.5,0v504h1270"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>

          <Box>
            <TituloStyledAlt><Des>4.</Des> Para a forja</TituloStyledAlt>
            <Texto>
              Aqui começa a criação da obra, a partir do molde nossos mestres de forja comoçaram a dar forma e vida ao molde.
            </Texto>
          </Box>
          <Imagem src={processoForja} />
        </Part>

        <Part $alt>
          <ContainerSVG $distancia="calc(50% - 8px);">
            <Vetor
              viewBox="0 0 15 544"
              width="15"
              height="544"
              preserveAspectRatio="none"
            >
              <Caminho
                d="M7.5,0v544"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>

          <ContainerSVG
            $top="-7.5px"
            $distancia="calc(50% - 8px)"
            $altura="calc(100% + 15px)"
            $zIndex={1}
          >
            <Vetor
              viewBox="0 0 5 544"
              width="5"
              height="544"
              preserveAspectRatio="none"
            >
              <CaminhoSup
                d="M2.5,0v544"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>

          <Box>
            <TituloStyledAlt><Des>5.</Des> Refinamento</TituloStyledAlt>
            <Texto>
              A obra já saiu do molde, agora suas impuresas serão expurgadas pelo nosso trabalho de refinamento sobre medidas.
            </Texto>
            <Texto>
              É nesta etapa, que a qualidade e velocidade serão concebidos a grande obra.
            </Texto>
          </Box>
          <Imagem src={processoRefinamento} />
        </Part>

        <Part>
          <ContainerSVG $largura="50%" $distancia="50%">
            <Vetor
              viewBox="0 0 643.5 477.5"
              width="643.5px"
              height="477.5px"
              preserveAspectRatio="none"
            >
              <Caminho
                d="M643.5,7.5H7.5v470"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>

          <ContainerSVG
            $top="4px"
            $distancia="calc(50% + 4px)"
            $altura="calc(100% - 4px)"
            $largura="calc(50% - 9.5px)"
          >
            <Vetor
              viewBox="0 0 637.5 472.5"
              width="637.5px"
              height="472.5px"
              preserveAspectRatio="none"
            >
              <CaminhoSup
                d="M637.5,2.5H2.5v470"
                vector-effect="non-scaling-stroke"
              />
            </Vetor>
          </ContainerSVG>

          <Box>
            <TituloStyledAlt><Des>6.</Des> Para o Mundo</TituloStyledAlt>
            <Texto>
              Nossa obra está completa e agora ela será lançada ao mundo.
            </Texto>
            <Texto>
              Exclusiva e sob-medida, não haverá nenhuma outra a sua altura.
            </Texto>
          </Box>
          <Imagem src={processoMundo} />
        </Part>

        <Rodape>
          <TextoRodape>
            Nosso processo transparente e colaborativo leva os projetos do conceito à realidade, garantindo a satisfação do cliente em cada fase.
          </TextoRodape>

          <TextoRodape>
            Trabalhamos em estreita colaboração com nossos clientes para entender suas metas e criar soluções que impulsionem o sucesso.
          </TextoRodape>

          <CirculoSVG width="25" />
        </Rodape>
      </Wrapper>
    </ProjetosEstilizados>
  )
}

export default Processo;
