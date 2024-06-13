import styled from 'styled-components';

interface ICirculo {
  estado?: boolean;
  width?: string;
}

const SVGContainer = styled.svg<{ width?: string }>`
  width: ${(props) => (props.width ? `${props.width}px` : '0rem')};
  margin-right: 0rem;
  transition: width .5s, height .5s, margin-right .5s;
  aspect-ratio: 1 / 1;
  transform: rotate(270deg);

  &[data-action="true"] {
    width: .8rem;
    margin-right: .5rem;
  }

    @media screen and (min-width: 1440px) {
      &[data-action="true"] {
      width: 1rem;
    }
  }
`

const CirculoSVG = ({ estado = false, width }: ICirculo) => {

  return (
    <SVGContainer
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      data-action={String(estado)}
      width={width}
    >
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6006" />
          <stop offset="100%" stopColor="#FF7E06" />
        </linearGradient>
      </defs>
      <circle r="7.5" cx="7.5" cy="7.5" fill="url(#grad3)" />
    </SVGContainer>
  )
};

export default CirculoSVG;
