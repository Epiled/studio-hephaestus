/// <reference types="vite-plugin-svgr/client" />
import styled from "styled-components";
import IconMenu from "../../assets/svg/menu.svg?react";
import IconEllipse from "../../assets/svg/ellipse.svg?react";
import IconArrowLeft from "../../assets/svg/arrowLeft.svg?react";
import IconArrowRight from "../../assets/svg/arrowRight.svg?react";
import StyledIcon from "../StyledIcon";
import { MouseEvent, useRef } from "react";
import Estilos from "../../types/Estilos";

const Circle = styled.span`
  position: absolute;
  width: 0rem;
  height: 0rem;
  border-radius: 50%;
  background-color: var(--darker);
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
  aspect-ratio: ${(props) => props.$aspect ? 1 / 1 : "initial"};
  width: ${(props) => props.$width || "initial"};

  &:hover, &[data-revel="true"] {
    color: var(--lighter);
    cursor: pointer;

    ${Circle} {
      transition: width .5s ease-in-out, height .5s ease-in-out;
    }

    ${StyledIcon} {
      fill: var(--lighter);
    }


  }
`

const BotaoConteudo = styled.div<IBotao>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justifyContent || "initial"};
  gap: ${(props) => props.$gap || "0"};
  font-size: inherit;
  text-transform: uppercase;
  z-index: 1;
`

interface IBotao {
  text?: string,
  iconLeft?: 'menu' | 'leftArrow' | 'rightArrow' | 'circle',
  iconRight?: 'menu' | 'leftArrow' | 'rightArrow' | 'circle',
  $fontSize?: string,
  pt?: string,
  pr?: string,
  pb?: string,
  pl?: string,
  $gap?: string,
  $aspect?: boolean,
  $width?: string,
  $justifyContent?: string,
  onClick?: () => void,
  $styles?: Estilos;
}

const IconsMap = {
  'menu': IconMenu,
  'leftArrow': IconArrowLeft,
  'rightArrow': IconArrowRight,
  'circle': IconEllipse,
}

const Botao = ({ text, iconLeft, iconRight, $fontSize, $gap, $aspect, $width, $justifyContent, onClick, $styles }: IBotao) => {

  const botao = useRef<HTMLButtonElement | null>(null);
  const circulo = useRef<HTMLSpanElement | null>(null);

  const revelPoint = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const parentOffset = botao.current?.getBoundingClientRect();
    const circuloAnimate = circulo.current

    if (parentOffset && circuloAnimate) {
      const relX = e.pageX - parentOffset.left;
      const relY = e.clientY - parentOffset.top;
      const larguraElemtno = parentOffset.width * 2.2;

      circuloAnimate.style.top = `${relY}px`;
      circuloAnimate.style.left = `${relX}px`;
      circuloAnimate.style.width = `${larguraElemtno}px`;
      circuloAnimate.style.height = `${larguraElemtno}px`;
    }
  }

  const hiddenPoint = () => {
    const parentOffset = botao.current?.getBoundingClientRect();
    const circuloAnimate = circulo.current
    const botaoDataset = botao.current?.dataset.revel;

    if (parentOffset && circuloAnimate && botaoDataset === "false") {
      circuloAnimate.style.width = `0px`;
      circuloAnimate.style.height = `0px`;
    }
  }

  const markRevel = () => {
    const botaoDataset = botao.current?.dataset.revel
    if (botao.current) {
      if (botaoDataset === "false") {
        botao.current.dataset.revel = "true";
      } else {
        botao.current.dataset.revel = "false";
      }
    }
  }

  return (
    <BotaoEstilizado
      ref={botao}
      onMouseEnter={(e) => revelPoint(e)}
      onMouseLeave={() => hiddenPoint()}
      onClick={() => {
        markRevel();
        onClick && onClick();
      }}
      $fontSize={$fontSize}
      $aspect={$aspect}
      $width={$width}
      $styles={$styles}
      data-revel="false"
    >
      <BotaoConteudo
        $justifyContent={$justifyContent}
        $gap={$gap}
      >
        {iconLeft ? <StyledIcon as={IconsMap[iconLeft || ""]} /> : ""}
        {text && text}
        {iconRight ? <StyledIcon as={IconsMap[iconRight || ""]} /> : ""}
      </BotaoConteudo>
      <Circle ref={circulo} />
    </BotaoEstilizado>
  );
}

export { BotaoEstilizado };
export default Botao;