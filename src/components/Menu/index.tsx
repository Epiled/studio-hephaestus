import styled from "styled-components";
import Botao from "../Botao";

const MenuEstilizado = styled.header`
  width: 100%;
`

const MenuBotao = styled.div`
  position: fixed;
  top: 3.5rem;
  right: 5rem;
`

const Menu = () => {
  return (
    <MenuEstilizado>
      <MenuBotao>
        <Botao text="Menu" iconRight='menu' iconRightShow={true} $gap='1rem' />
      </MenuBotao>
    </MenuEstilizado>
  );
}

export default Menu;