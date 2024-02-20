/// <reference types="vite-plugin-svgr/client" />
import styled from "styled-components";
import IconMenu from "../../assets/svg/menu.svg?react";
import IconEllipse from "../../assets/svg/ellipse.svg?react";
import IconArrowLeft from "../../assets/svg/arrowLeft.svg?react";
import IconArrowRight from "../../assets/svg/arrowRight.svg?react";
import StyledIcon from "../StyledIcon";
import { MouseEvent, useRef } from "react";

const Circle = styled.span`
  position: absolute;
  width: 0rem;
  height: 0rem;
  border-radius: 50%;
  background-color: #000000;
  transform: translate(-50%, -50%);
  transition: width .5s ease-in-out, height .5s ease-in-out;
  z-index: 0;
`

const BotaoEstilizado = styled.button<IBotao>`
  position: relative;

  overflow: hidden;
  border-radius: 5rem;
  border: 0;
  font-size: ${(props) => props.$fontSize || "2rem"};
  padding-top: ${(props) => props.$fontSize || "2rem"};
  padding-right: ${(props) => props.$fontSize || "2rem"};
  padding-bottom: ${(props) => props.$fontSize || "2rem"};
  padding-left: ${(props) => props.$fontSize || "2rem"};
  transition: color .5s ease-in-out;

  &:hover {
    color: white;
    cursor: pointer;

    ${Circle} {
      transition: width .5s ease-in-out, height .5s ease-in-out;
    }

    ${StyledIcon} {
      fill: #ffffff;
    }
  }
`

const BotaoConteudo = styled.div<IBotao>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${(props) => props.$gap || "0"};;
  font-size: inherit;
  text-transform: uppercase;
  z-index: 1;
`

interface IBotao {
  text?: string,
  iconLeft?: 'menu',
  iconRight?: 'menu',
  iconLeftShow?: boolean,
  iconRightShow?: boolean,
  $fontSize?: string,
  pt?: string,
  pr?: string,
  pb?: string,
  pl?: string,
  $gap?: string,
}

const IconsMap = {
  'menu': IconMenu,
  'leftArrow': IconMenu,
  'rightArrow': IconMenu,
  'circle': IconMenu,

}

const Botao = ({ text, iconLeft, iconRight, iconLeftShow, iconRightShow, $fontSize, $gap }: IBotao) => {

  const botao = useRef<HTMLButtonElement | null>(null);
  const circulo = useRef<HTMLSpanElement | null>(null);

  const revelPoint = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const parentOffset = botao.current?.getBoundingClientRect();
    const circuloAnimate = circulo.current

    if (parentOffset && circuloAnimate) {
      const relX = e.pageX - parentOffset.left;
      const relY = e.pageY - parentOffset.top;
      const larguraElemtno = parentOffset.width * 2;

      circuloAnimate.style.top = `${relY}px`;
      circuloAnimate.style.left = `${relX}px`;
      circuloAnimate.style.width = `${larguraElemtno}px`;
      circuloAnimate.style.height = `${larguraElemtno}px`;
    }
  }

  const hiddenPoint = () => {
    const parentOffset = botao.current?.getBoundingClientRect();
    const circuloAnimate = circulo.current

    if (parentOffset && circuloAnimate) {
      circuloAnimate.style.width = `0px`;
      circuloAnimate.style.height = `0px`;
    }
  }

  return (
    <BotaoEstilizado
      ref={botao}
      onMouseEnter={(e) => revelPoint(e)}
      onMouseLeave={() => hiddenPoint()}
      $fontSize={$fontSize}
    >
      <BotaoConteudo
        $gap={$gap}
      >
        {iconLeftShow && iconLeft ? <StyledIcon as={IconsMap[iconLeft || ""]} /> : ""}
        {text && text}
        {iconRightShow && iconRight ? <StyledIcon as={IconsMap[iconRight || ""]} /> : ""}
      </BotaoConteudo>
      <Circle ref={circulo} />
    </BotaoEstilizado>
  );
}

export default Botao;