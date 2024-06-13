import styled from "styled-components";
import { useRef, useState } from "react";
import StyledIcon from "../StyledIcon";
import IconArrowRight from "../../assets/svg/arrowRight.svg?react";
import Estilos from "../../types/Estilos";

interface IBotao {
  text?: string,
  iconLeft?: 'menu' | 'leftArrow' | 'rightArrow' | 'circle',
  iconRight?: 'menu' | 'leftArrow' | 'rightArrow' | 'circle',
  $fontSize?: string,
  $gap?: string,
  aspect?: boolean,
  onClick?: () => void,
  $styles?: Estilos;
  className?: string;
  iconColor?: string;
}

const StyledIconCustom = styled(StyledIcon)<{iconColor?: string}>`
  position: absolute;
  top: 50%;
  right: -5rem;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: transform .7s ease-in-out, fill .25s, opacity .5s;
  z-index: 1;

  @media screen and (min-width: 1440px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`

const Circle = styled.span<{iconColor?: string}>`
  position: absolute;
  width: .75rem;
  height: .75rem;
  border-radius: 50%;
  background-color: ${(props) => props.iconColor || `var(--darker)`};
  top: 50%;
  left: 2.5rem;
  transform: translate(-50%, -50%);
  transition: width .5s ease-in-out, height .5s ease-in-out;
  z-index: 0;

  @media screen and (min-width: 1440px) {
    left: 3.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`

const BotaoConteudo = styled.div<IBotao>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${(props) => props.$gap || "0"};;
  font-size: inherit;
  text-transform: capitalize;
  z-index: 1;
  margin-left: 2rem;
  transform: translateX(0);
  transition: transform .25s ease-in-out;
`

const BotaoEstilizado = styled.button<IBotao>`
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 5rem;
  border: 0;
  font-size: ${(props) => props.$fontSize || "2rem"};
  padding: 0 2rem;
  transition: color .5s ease-in-out;
  aspect-ratio: ${(props) => props.aspect ? 1 / 1 : "auto"};
  min-height: 5rem;

  &:hover {
    color: var(--lighter);
    cursor: pointer;

    ${Circle} {
      transition: width .5s ease-in-out, height .5s ease-in-out;
    }

    ${StyledIconCustom} {
      fill: ${(props) => (props.iconColor ? 'var(--darker)' : `var(--lighter)`)};
      opacity: 1;
      transition: transform .4s ease-in-out, fill .2s, opacity .1s;
      transform: translate(-5.5rem, -50%);
    }

    ${BotaoConteudo} {
      transition: transform .2s ease-in-out;
      transform: translateX(-2rem);
    }
  }

  @media screen and (min-width: 1440px) {
    &:hover {
      ${StyledIconCustom} {
        transform: translate(-7rem, -50%);
      }
    }

    font-size: 3.2rem;
    height: 10rem;
    padding: 0 4rem;
  }
`

const ButtonWithArrow = ({ text, $fontSize, $gap, className, onClick, iconColor }: IBotao) => {

  const botao = useRef<HTMLButtonElement | null>(null);
  const circulo = useRef<HTMLSpanElement | null>(null);
  const [circleWidth, setCircleWidth] = useState(0);

  const revelPoint = () => {
    const parentOffset = botao.current?.getBoundingClientRect();
    const circuloAnimate = circulo.current

    if (parentOffset && circuloAnimate && circulo.current) {
      setCircleWidth(circulo.current?.clientWidth);
      const larguraElemtno = parentOffset.width * 2.2;

      circuloAnimate.style.width = `${larguraElemtno}px`;
      circuloAnimate.style.height = `${larguraElemtno}px`;
    }
  }

  const hiddenPoint = () => {
    const parentOffset = botao.current?.getBoundingClientRect();
    const circuloAnimate = circulo.current

    if (parentOffset && circuloAnimate) {
      circuloAnimate.style.width = `${circleWidth}px`;
      circuloAnimate.style.height = `${circleWidth}px`;
    }
  }

  return (
    <BotaoEstilizado
      ref={botao}
      onMouseEnter={() => revelPoint()}
      onMouseLeave={() => hiddenPoint()}
      $fontSize={$fontSize}
      className={className}
      onClick={onClick}
      iconColor={iconColor}
    >
      <BotaoConteudo
        $gap={$gap}
      >
        {text}
      </BotaoConteudo>
      <StyledIconCustom as={IconArrowRight} iconColor={iconColor} />
      <Circle ref={circulo} iconColor={iconColor} />
    </BotaoEstilizado>
  );
}

export default ButtonWithArrow;
