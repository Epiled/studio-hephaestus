import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import phone from "../../assets/imagem.png";
import CirculoSVG from "../CirculoSVG";

const RodapeStyled = styled.footer`
  background: var(--darker);
  color: var(--lighter);
  margin-top: 12rem;
  padding-top: 10rem;
  padding-bottom: 4rem;
`

const Blocos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`

const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 10rem;
  max-width: 32rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    max-width: 35rem;
  }
`

const BlocoCopy = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  gap: 3.5rem;
  position: relative;
`

const Logo = styled.img`
`

const Frase = styled.p`
  font-size: 2rem;
  font-weight: 600;
`

const Categoria = styled.h3`
  font-size: 3.2rem;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const Navegacao = styled.nav`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

const LinkStyled = styled(Link)`
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--lighter);
  text-decoration: none;
  font-style: normal;
`

const Contato = styled.address`
  color: var(--lighter);
`

const Horario = styled(LinkStyled).attrs({ as: "span" })``

const Extra = styled.span`
  font-size: 2rem;
  font-weight: bold;
`

const CirculoContainer = styled.div`
  position: absolute;
  top: -3.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Rodape = () => {
  return (
    <RodapeStyled>
      <Wrapper>
        <Blocos>
          <Bloco>
            <Logo src={phone} />
            <Frase>
              Pronto para criar algo extraordinário? Entre em contato para uma consulta gratuita.
            </Frase>
          </Bloco>

          <Bloco>
            <Categoria>
              <CirculoSVG />
              Navegação
            </Categoria>
            <Navegacao>
              <LinkStyled to={''}>
                Link 1
              </LinkStyled>
              <LinkStyled to={''}>
                Link 2
              </LinkStyled>
              <LinkStyled to={''}>
                Link 3
              </LinkStyled>
            </Navegacao>
          </Bloco>

          <Bloco>
            <Categoria>
              <CirculoSVG />
              Contato
            </Categoria>
            <Contato>
              <LinkStyled to={''}>
                contato@contato.com
              </LinkStyled>
            </Contato>
            <Contato>
              <LinkStyled to={''}>
                (xx) x xxxx-xxxx
              </LinkStyled>
            </Contato>
            <Horario to={''}>
              09:00 ás 18:00
            </Horario>
          </Bloco>
        </Blocos>
        <BlocoCopy>
          <CirculoContainer>
            <CirculoSVG />
          </CirculoContainer>
          <Extra>Copyright</Extra>
          <Extra>Politica de provacidade</Extra>
        </BlocoCopy>
      </Wrapper>
    </RodapeStyled>
  )
}

export default Rodape;
