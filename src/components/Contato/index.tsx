import styled, { css } from "styled-components";
import Titulo from "../Titulo";
import Texto from "../Texto";
import CirculoSVG from "../CirculoSVG";
import Wrapper from "../Wrapper";
import ButtonWithArrow from "../ButtonWithArrow";

const ContatoEstilizado = styled.section`
  background-color: var(--darker);
  padding: 10rem 0;
  margin-top: 15rem;
`

const TituloEstilos = {
  base: css`
    color: var(--lighter);
    text-transform: uppercase;
    font-size: 3.2rem;
    margin-bottom: 0;
    text-transform: none;
    margin-bottom: 4rem;
  `,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 1440px)",
      styles: css`
        font-size: 4.8rem;
      `,
    },
  ],
}

const SubTitleStyle = {
  base: css`
    font-size: 2.4rem;
    font-weight: 400;
    text-transform: none;
  `,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 1440px)",
      styles: css`
        font-size: 3.2rem;
      `,
    },
  ]
}

const TextoEstilos = {
  base: css`
    color: var(--lighter);
    font-size: 2rem;
  `,
  mediaQueries: [
    {
      mediaQuery: "(min-width: 1440px)",
      styles: css`
        font-size: 2.4rem;
      `,
    },
  ],
}

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

const CustomButton = {
  base: css`
    color: var(--lighter);
    background-color: var(--darker);
    border: .2rem solid var(--lighter);
    width: fit-content;
    margin: 0 auto;
`,
}

const Contato = () => {
  return (
    <ContatoEstilizado>
      <Wrapper>
        <Blocos>
          <BlocoMain>
            <Titulo
              sub="Gostariamos de ouvi-ló :D"
              text="Vamos cirar uma grande obra!"
              $styles={TituloEstilos}
              $subStyles={SubTitleStyle}
            />
            <Texto
              text="Estamos ansiosos para ouvir sobre seu próximo projeto. Entre em contato para começarmos a transformar sua visão em realidade."
              $styles={TextoEstilos}
            />

            <Formulario>
              <CampoContainer>
                <Label>
                  <CirculoSVG />
                  Qual seu nome:
                </Label>
                <Input type="text" />
              </CampoContainer>

              <CampoContainer>
                <Label>
                  <CirculoSVG />
                  E-mail de contato:
                </Label>
                <Input type="text" />
              </CampoContainer>

              <CampoContainer>
                <Label>
                  <CirculoSVG />
                  Como podemos ajuda-ló?
                </Label>
                <Input type="text" />
              </CampoContainer>

              <ButtonWithArrow $styles={CustomButton} text="Ver Todos" />
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
