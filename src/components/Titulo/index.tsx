import styled from "styled-components";

interface ITitulo {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  text?: string;
}

const TituloEstilizado = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 3.2rem;
  margin-bottom: 3rem;
  font-weight: bold;
  font-family: 'Mada', sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 3.6rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 4.8rem;
  }
`;

const Titulo = ({ as: Tag = "h2", text, children, className }: ITitulo) => {
  return (
    <TituloEstilizado as={Tag} className={className}>
      {text || children}
    </TituloEstilizado>
  );
};

export default Titulo;
