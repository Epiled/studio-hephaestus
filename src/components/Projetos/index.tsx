import styled from "styled-components"
// import Titulo from "../Titulo"
import Wrapper from "../Wrapper"
//import Botao from "../Botao"
// import Texto from "../Texto"
import IconEllipse from "../../assets/svg/ellipse.svg?react";
import IconArrowRight from "../../assets/svg/arrowLeft.svg?react";
import IconArrowLeft from "../../assets/svg/arrowRight.svg?react";


const ProjetosEstilizados = styled.section`
`

const ContainerTopo = styled.div`
  background-image: linear-gradient(90deg, #FF6006 0%, #FF7E06 80% 100%);
`

const ContainerMid = styled.div`
`

const ContainerBottom = styled.div`
`

const Topo = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Titulo = styled.h2`
  color: var(--lighter);
  font-size: 3.2rem;
  max-width: 66rem;

  @media screen and (min-width: 1440px) {
    font-size: 4.8rem;
  }
`

const SubTitulo = styled.span`
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }
`

const TituloProjeto = styled(Titulo)`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--darker);
  margin-bottom: 3rem;

  @media screen and (min-width: 1440px) {
    font-size: 4.8rem;
  }
`

const SubProjeto = styled(SubTitulo)`
  font-size: 2rem;
  font-weight: 400;
  background-image: linear-gradient(90deg, #FF6006 0%, #FF7E06 80% 100%);
  background-clip: text;
  color: transparent;
  margin-bottom: .5rem;
  
  @media screen and (min-width: 1440px) {
    font-size: 2.4rem;
  }
`

const Texto = styled.p`
  color: #2E2E2E;
  font-size: 2rem;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }
`

const Botoes = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    gap: 1rem;
    justify-content: flex-start;
  }
`

const BotaoLeft = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
  min-height: 5rem;
  border-radius: 5rem;
  outline: 0;
  border: 0;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    min-width: 10rem;
    min-height: 10rem;
  }
`

const BotaoRight = styled(BotaoLeft)``

const BotaoMenu = styled(BotaoLeft)`
  display: flex;
  gap: 1rem;
  font-size: 1.6rem;
  padding: 0 2rem;

  @media screen and (min-width: 1440px) {
    gap: 2rem;
    font-size: 3.6rem;
    padding: 0 4rem;
  }
`

const Pontuacoes = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;
`

const PontosContainer = styled.div`
`

const PontosEsfera = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  aspect-ratio: 1 / 1;
  background: #beffc9;
  border: 1rem solid #2dff50;
  border-radius: 50%;
  
  @media screen and (min-width: 1440px) {
    width: 20.8rem;
    height: 20.8rem;
  }
`

const Pontos = styled.span`
  font-size: 3.6rem;
  font-weight: 900;

  @media screen and (min-width: 1440px) {
    font-size: 6.4rem;
  }
`

const PontosTitulos = styled.h3`
  color: #494949;
  font-size: 2rem;
  margin-top: 3rem;
  text-align: center;
  flex-wrap: wrap;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
    margin-top: 6rem;
  }
`


const Projetos = () => {
  return (
    <ProjetosEstilizados>
      <ContainerTopo>
        <Wrapper>
          <Topo>
            <Titulo>
              <SubTitulo>Obras primas: </SubTitulo>
              Explore nossa coleção de projetos excepcionais.
            </Titulo>
            <Botoes>
              {/* <Botao text="Ver Todos" iconLeft='circle' iconLeftShow={true} /> */}
              {/* <Botao iconLeft='leftArrow' iconLeftShow={true} />
            <Botao iconLeft='rightArrow' iconLeftShow={true} /> */}
              <BotaoMenu>
                <IconEllipse />
                Ver Todos
              </BotaoMenu>
              <BotaoLeft>
                <IconArrowLeft />
              </BotaoLeft>
              <BotaoRight>
                <IconArrowRight />
              </BotaoRight>
            </Botoes>
          </Topo>
        </Wrapper>
      </ContainerTopo>

      <ContainerMid>

      </ContainerMid>

      <ContainerBottom>
        <Wrapper>
          <TituloProjeto>
            <SubProjeto>Resultados do: </SubProjeto>
            Projeto - Site
          </TituloProjeto>
          <Texto>
            Nossos clientes veem resultados tangíveis, desde tempos de carregamento rápidos até classificações elevadas nos motores de busca.
          </Texto>

          <Pontuacoes>
            <PontosContainer>
              <PontosEsfera>
                <Pontos>100</Pontos>
              </PontosEsfera>
              <PontosTitulos>
                Desempenho
              </PontosTitulos>
            </PontosContainer>

            <PontosContainer>
              <PontosEsfera>
                <Pontos>100</Pontos>
              </PontosEsfera>
              <PontosTitulos>
                Acessibilidade
              </PontosTitulos>
            </PontosContainer>
          </Pontuacoes>

        </Wrapper>
      </ContainerBottom>


    </ProjetosEstilizados>
  )
}

export default Projetos