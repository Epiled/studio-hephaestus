import styled from "styled-components"
import Wrapper from "../../Wrapper";
import IconEllipse from "../../../assets/svg/ellipse.svg?react";
import Botao from "../../Botao";
import SpecialButton from "./SpecialButton";
import BotaoTeste from "./BaseButton";
import ButtonWithArrow from "../../ButtonWithArrow";

const ContainerTopo = styled.div`
  background-image: linear-gradient(90deg, var(--color-main) 0%, var(--color-complement) 80% 100%);
`

const TopoStyled = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;
  /* margin-bottom: 5rem; */
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

interface IBotoesSwiper {
  onPrevClick: () => void,
  onNextClick: () => void,
}

const Topo = ({ onPrevClick, onNextClick }: IBotoesSwiper) => {

  return (
    <ContainerTopo>
      <Wrapper>
        <TopoStyled>
          <Titulo>
            <SubTitulo>Obras primas: </SubTitulo>
            Explore nossa coleção de projetos excepcionais.
          </Titulo>
          
          <Botoes>
            <ButtonWithArrow  text="Ver Todos" />
            <Botao iconLeft='leftArrow' aspect onClick={onPrevClick} />
            <Botao iconRight='rightArrow' aspect onClick={onNextClick} />
          </Botoes>

        </TopoStyled>
      </Wrapper>
    </ContainerTopo>
  )
}

export default Topo;