import styled from "styled-components";
import Botao from "../Botao";
import { useRef } from "react";

const MenuEstilizado = styled.header`
  width: 100%;
`

const MenuBotao = styled.div`
  position: fixed;
  top: 3.5rem;
  right: 2.5rem;
  z-index: 5;

  @media screen and (min-width: 768px) {
    right: 3.75rem;
  }

  @media screen and (min-width: 1440px) {
    right: 5rem;
  }
`

const Navegation = styled.nav`
  position: fixed;
  top: 12.5rem;
  right: 2.5rem;
  z-index: 5;
  border-radius: 1.5rem;
  background: var(--lighter);
  padding: 2rem;
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  display: none;

  @media screen and (min-width: 768px) {
    right: 3.75rem;
  }

  @media screen and (min-width: 1440px) {
    right: 5rem;
  }

  &[data-revel="true"] {
    opacity: 1;
    animation: revel 1s;
  }

  &[data-revel="false"] {
    opacity: 0;
    animation: hidden 1s;
  }

`

const LinkStyled = styled.a`
  height: 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
`

const Contact = styled.div`
  position: fixed;
  top: 27.5rem;
  right: 2.5rem;
  z-index: 5;
  border-radius: 1.5rem;
  background: var(--lighter);
  padding: 2rem;
  min-width: 30rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    right: 3.75rem;
  }

  @media screen and (min-width: 1440px) {
    right: 5rem;
  }
`

const Menu = () => {

  const revelMenu = () => {
    const current = menuRef.current;
    if(current) {
      if(current.dataset.revel == "false") {
        current.dataset.revel = true;
        current.style.display = "block";
      } else {
        current.dataset.revel = false;
        current.style.display = "none";
      }
    }
  }

  const menuRef = useRef(null);

  return (
    <MenuEstilizado>
      <MenuBotao>
        <Botao 
          text="Menu" 
          iconRight='menu' 
          $gap='1rem' 
          onClick={revelMenu}
          />
      </MenuBotao>

      <Navegation ref={menuRef} data-revel="false" >
        <LinkStyled>Sobre</LinkStyled>
        <LinkStyled>Projetos</LinkStyled>
        <LinkStyled>Contato</LinkStyled>
      </Navegation>

      {/* <Contact>
        <LinkStyled>Sobre</LinkStyled>
        <LinkStyled>Projetos</LinkStyled>
        <LinkStyled>Contato</LinkStyled>
      </Contact> */}
    </MenuEstilizado>
  );
}

export default Menu;