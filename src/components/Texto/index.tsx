import styled from "styled-components";

interface ITexto {
  as?: React.ElementType;
  className?: string;
  text?: string;
}

const TextoEstilizado = styled.p<ITexto>`
  font-size: 2rem;
  font-family: 'Inter', sans-serif;
  color: var(--darker);

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }
`

const Texto = ({ as: Tag = "p", className, text }: ITexto) => {
  return (
    <TextoEstilizado
      as={Tag}
      className={className}
    >
      {text}
    </TextoEstilizado>
  )
}

export default Texto