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
  background: var(--color-gray-1);
  min-width: 30rem;
  opacity: 0;
  display: none;
  flex-direction: column;

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
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  height: 5rem;
  padding: 0 2rem;
  cursor: pointer;
`

const Menu = () => {

  const revelMenu = () => {
    const current = menuRef.current;
    if(current) {
      const isRevealed = current.dataset.reveal === "true";
      current.dataset.reveal = String(!isRevealed);
      current.style.display = isRevealed ? "none" : "block";
    }
  }

  const menuRef = useRef<HTMLDivElement>(null);

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

    </MenuEstilizado>
  );
}

export default Menu;