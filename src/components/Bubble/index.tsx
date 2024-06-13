import { useEffect, useRef } from "react";
import styled from "styled-components";

interface IBubbleType {
  x: number;
  y: number;
  radius: number;
  speed: number;
}

interface IBubble {
  reverse?: boolean;
  gradienteCustom?: { porcent: number, color: string }[];
  className?: string;
}

const BubbleContainer = styled.div<{ $reverse?: boolean }>`
  position: absolute;
  width: 100%;
  height: 20rem;
  z-index: 1;
  top: -12rem;

  ${({ $reverse }) => $reverse && `
    transform: scaleY(-1);
  `}
`;

const CanvasStyled = styled.canvas`
  width: 100%;
  height: 100%;
  filter: url("#blob");
`;

const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
`;

const Bubble = ({ reverse, gradienteCustom, className }: IBubble) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const sizeEffectLimiteRef = useRef<number>(0);
  const bubblesRef = useRef<IBubbleType[]>([]);
  const numBubblesRef = useRef<number>(window.innerWidth / 7); // Number of bubbles
  const animationFrameIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      ctxRef.current = canvas.getContext('2d');
      sizeEffectLimiteRef.current = canvas.height * 0.33;

      const createBubble = (canvas: HTMLCanvasElement): IBubbleType => {
        const r = 10 + Math.random() * 20;
        const xLimite = r + Math.random() * (canvas.width - r * 2); // Garantir que a bolha esteja totalmente dentro da largura do canvas
        const yLimite = canvas.height + r + Math.random() * canvas.height;
        return {
          x: xLimite,
          y: yLimite,
          radius: r,
          speed: 1 + Math.random() * 2,
        };
      };

      const initializeBubbles = () => {
        bubblesRef.current = [];
        for (let i = 0; i < numBubblesRef.current; i++) {
          bubblesRef.current.push(createBubble(canvas));
        }
      };

      const resizeCanvas = () => {
        cancelAnimationFrame(animationFrameIdRef.current); // Cancela a animação antes de redimensionar o canvas
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        sizeEffectLimiteRef.current = canvas.height * 0.33;
        bubblesRef.current.length = 0;
        calcNumBubbles();
        initializeBubbles();
        createGradient();
        updateBubbles(); // Reinicia a animação após redimensionar
      };

      const calcNumBubbles = () => {
        return numBubblesRef.current = (window.innerWidth / 7);
      }

      // Criação do gradiente horizontal
      const createGradient = () => {
        if (canvas && ctxRef.current) {
          const gradient = ctxRef.current.createLinearGradient(0, 0, canvas.width, 0);

          if (gradienteCustom) {
            gradienteCustom.forEach(stop => {
              gradient.addColorStop(stop.porcent, stop.color);
            });
          } else {
            gradient.addColorStop(0, '#ff6006');
            gradient.addColorStop(.8, '#ff7e06');
          }

          // Preenchimento do retângulo com o gradiente
          ctxRef.current.fillStyle = gradient;
          ctxRef.current.fillRect(0, 0, canvas.width, canvas.height);

          // Definição das máscaras em formato de círculo
          ctxRef.current.globalCompositeOperation = 'destination-in';
        }
      };

      const drawBubble = (bubble: IBubbleType) => {
        if (ctxRef.current) {
          ctxRef.current.beginPath();
          ctxRef.current.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
          ctxRef.current.fill();
        }
      };

      const updateBubbles = () => {
        if (ctxRef.current) {
          // Limpa o canvas antes de desenhar
          ctxRef.current.clearRect(0, 0, ctxRef.current.canvas.width, ctxRef.current.canvas.height);
          // Redefine o composite operation para evitar problemas no desenho das bolhas
          ctxRef.current.globalCompositeOperation = 'source-over';

          for (const bubble of bubblesRef.current) {
            bubble.y -= bubble.speed;

            if (bubble.y <= sizeEffectLimiteRef.current) {
              const distanceToDisappear = bubble.y;
              const step = bubble.radius / distanceToDisappear; // Passo de redução do raio
              bubble.radius -= step * bubble.speed;

              if (bubble.radius < 0) {
                bubble.radius = 0;
              }
            }

            if ((bubble.radius <= 0 || bubble.y < -bubble.radius) && canvas) {
              Object.assign(bubble, createBubble(canvas));
            }

            drawBubble(bubble);
          }

          animationFrameIdRef.current = requestAnimationFrame(updateBubbles);
        }
      };

      resizeCanvas(); // Configura o canvas inicialmente
      window.addEventListener('resize', resizeCanvas); // Redimensiona o canvas quando a janela é redimensionada

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameIdRef.current);
      };
    }
  }, [gradienteCustom, numBubblesRef]);

  return (
    <BubbleContainer $reverse={reverse} className={className}>
      <CanvasStyled ref={canvasRef} ></CanvasStyled>
      <SVG xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 40 -10"
              result="blob"
            />
          </filter>
        </defs>
      </SVG>
    </BubbleContainer>
  );
};

export default Bubble;
