import styled from "styled-components";
import Wrapper from "../../Wrapper";
import ButtonWithArrow from "../../ButtonWithArrow";
import Botao from "./Botao";
import Titulo from "../../Titulo";
import wave from "../../../assets/wave.svg";

const ContainerTopo = styled.div`
  position: relative;
  background-image: linear-gradient(90deg, var(--color-main) 0%, var(--color-complement) 80% 100%);

  &::before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    background-image: url(${wave});
    background-position: bottom, bottom;
    background-repeat: repeat-x;
    background-size: 750px auto, 100% auto;
    height: 5.3rem;
    width: 100%;
    animation: scrollWave 5s infinite linear forwards;
    transform: rotateZ(180deg);
  }
`;

const TopoStyled = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const TituloStyled = styled(Titulo)`
  color: var(--lighter);
  font-weight: 900;
  max-width: 66rem;
  margin-bottom: 0;

  @media screen and (min-width: 1440px) {
    font-size: 4.8rem;
  }
`;

const Sub = styled(TituloStyled).attrs({ as: 'span' })`
  font-size: 2rem;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }
`;

const Botoes = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

interface IBotoesSwiper {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const Topo = ({ onPrevClick, onNextClick }: IBotoesSwiper) => {
  return (
    <ContainerTopo>
      <Wrapper>
        <TopoStyled>
          <TituloStyled>
            <Sub>Obras primas:</Sub>
            Explore nossa coleção de projetos excepcionais.
          </TituloStyled>
          <Botoes>
            <ButtonWithArrow text="Ver Todos" />
            <Botao iconLeft="leftArrow" $aspect onClick={onPrevClick} />
            <Botao iconRight="rightArrow" $aspect onClick={onNextClick} />
          </Botoes>
        </TopoStyled>
      </Wrapper>
    </ContainerTopo>
  );
};

export default Topo;
