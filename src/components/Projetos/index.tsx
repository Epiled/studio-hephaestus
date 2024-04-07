import styled from "styled-components"
// import Titulo from "../Titulo"
import Wrapper from "../Wrapper"
import Botao from "../Botao"
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
  justify-content: space-between;
`

const Titulo = styled.h2`
  color: white;
  font-size: 4.2rem;
  max-width: 66rem;
`

const SubTitulo = styled.span`
  font-size: 3.2rem;
  display: block;
`

const TituloProjeto = styled(Titulo)`
  font-family: 4.8rem;
  font-weight: 700;
  color: black;
`

const SubProjeto = styled(SubTitulo)`
  font-size: 2.4rem;
  font-weight: 400;
  background-image: linear-gradient(90deg, #FF6006 0%, #FF7E06 80% 100%);
  background-clip: text;
  color: transparent;
`

const Texto = styled.p`
  color: #2E2E2E;
  font-size: 3.2rem;
`

const Botoes = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const BotaoLeft = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 5rem;
  outline: 0;
  border: 0;
  cursor: pointer;
`

const BotaoRight = styled(BotaoLeft)``

const BotaoMenu = styled(BotaoLeft)`
  display: flex;
  gap: 2rem;
  font-size: 3.6rem;
  padding: 0 4rem;
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
  width: 20.8rem;
  height: 20.8rem;
  aspect-ratio: 1 / 1;
  background: #beffc9;
  border: 1rem solid #2dff50;
  border-radius: 50%;
`

const Pontos = styled.span`
  font-size: 6.4rem;
  font-weight: 900;
`

const PontosTitulos = styled.h3`
  color: #494949;
  font-size: 3.2rem;
  margin-top: 6rem;
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