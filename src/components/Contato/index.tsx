import styled, { css } from "styled-components";
import Titulo from "../Titulo";
import Texto from "../Texto";
import CirculoSVG from "../CirculoSVG";
import Wrapper from "../Wrapper";
import ButtonWithArrow from "../ButtonWithArrow";
import Bubble from "../Bubble";
import wave from "../../assets/wave.svg";

const ContatoEstilizado = styled.section`
  position: relative;
  background-color: var(--darker);
  padding: 20rem 0;
  margin-top: 10rem;

  &::before {
    content: '';
    top: 0;
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
    transform: rotateZ(180deg);
  }
`

const TituloStyled = styled(Titulo)`
  color: var(--lighter);
  font-size: 3.2rem;
  text-transform: none;

  @media screen and (min-width: 1440px) {
    font-size: 4.8rem;
  }
`

const Sub = styled(TituloStyled).attrs({ as: 'span' })`
  font-size: 2.4rem;
  font-weight: 400;
  margin-bottom: 0;
  text-transform: none;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }
`

const TextoStyled = styled(Texto)`
  color: var(--lighter);
  font-size: 2rem;

  @media screen and (min-width: 1440px) {
    font-size: 2.4rem;
  }
`

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  margin-top: 4rem;

  @media screen and (min-width: 1440px) {
    margin-top: 7rem;
  }
`

const CampoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--lighter);

  @media screen and (min-width: 1440px) {
    font-size: 2.4rem;
  }
`

const Input = styled.input`
  border: 2px solid var(--color-complement);
  background-color: #FFF3E9;
  height: 5rem;
  padding: 0 1rem;
  font-size: 1.6rem;

  @media screen and (min-width: 1440px) {
    height: 7rem;
  }
`

const ContatosInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 5rem;
  padding: 3.5rem 5rem;
  width: 100%;
  max-width: 60rem;
  background-image: linear-gradient(90deg, var(--color-main) 0%, var(--color-complement) 80% 100%);
`

const Informacoes = styled.h3`
  position: relative;
  padding-left: 1rem;
  font-size: 2.4rem;
  font-weight: 900;
`

const ContatoTipo = styled.address`
  font-style: normal;
  font-size: 1.8rem;
  font-weight: 900;

  @media screen and (min-width: 1440px) {
    font-size: 2.4rem;
  }
`

const Circle = styled.span`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--darker);
  top: 50%;
  left: 0rem;
  transform: translate(-50%, -50%);
  transition: width .5s ease-in-out, height .5s ease-in-out;
  z-index: 0;
`

const Blocos = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    font-size: 2.4rem;
    justify-content: space-between;
    gap: 0;
  }
`

const BlocoMain = styled.div`
  max-width: 65rem;
`

const BubbleStyled = styled(Bubble)`
  top: -5rem;
`

const ButtonWithArrowStyled = styled(ButtonWithArrow)`
  color: var(--lighter);
  background-color: var(--darker);
  border: .2rem solid var(--lighter);
  width: fit-content;
  margin: 0 auto;

  &:hover {
    color: var(--darker);
  }
`


const customGradiente = [
  { porcent: 0, color: '#fff' }
]

const Contato = () => {
  return (
    <ContatoEstilizado>
      <BubbleStyled reverse gradienteCustom={customGradiente} />
      <Wrapper>
        <Blocos>
          <BlocoMain>
            <TituloStyled>
              <Sub>Gostariamos de ouvi-ló :D</Sub>
              Vamos cirar uma grande obra!
            </TituloStyled>
            <TextoStyled
              text="Estamos ansiosos para ouvir sobre seu próximo projeto. Entre em contato para começarmos a transformar sua visão em realidade."
            />

            <Formulario>
              <CampoContainer>
                <Label>
                  <CirculoSVG width="10" />
                  Qual seu nome:
                </Label>
                <Input type="text" />
              </CampoContainer>

              <CampoContainer>
                <Label>
                  <CirculoSVG width="10" />
                  E-mail de contato:
                </Label>
                <Input type="text" />
              </CampoContainer>

              <CampoContainer>
                <Label>
                  <CirculoSVG width="10" />
                  Como podemos ajuda-ló?
                </Label>
                <Input type="text" />
              </CampoContainer>

              <ButtonWithArrowStyled iconColor={"#ffffff"} text="Ver Todos" />

            </Formulario>
          </BlocoMain>

          <ContatosInfos>
            <Informacoes>
              <Circle />
              Informações
            </Informacoes>
            <ContatoTipo>
              contato@contato.com
            </ContatoTipo>
            <ContatoTipo>
              (xx) x xxxx-xxxx
            </ContatoTipo>
            <ContatoTipo>
              09:00 ás 18:00
            </ContatoTipo>
          </ContatosInfos>
        </Blocos>
      </Wrapper>
    </ContatoEstilizado>
  )
}

export default Contato;
