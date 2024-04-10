import styled from "styled-components"

const PontuacoesStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 5rem;
`

const PontosContainer = styled.div`
`

const PontosEsfera = styled.div<{cores?: string[]}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  aspect-ratio: 1 / 1;
  background: #beffc9;
  border: 1rem solid;
  border-color: ${(props) =>(props.cores && props.cores[1]) || "#fff"};
  border-radius: 50%;
  
  @media screen and (min-width: 1440px) {
    width: 20.8rem;
    height: 20.8rem;
  }
`

const Pontos = styled.span`
  font-size: 3.6rem;
  font-weight: 900;

  @media screen and (min-width: 1440px) {
    font-size: 6.4rem;
  }
`

const PontosTitulos = styled.h3`
  color: #494949;
  font-size: 2rem;
  margin-top: 3rem;
  text-align: center;
  flex-wrap: wrap;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
    margin-top: 6rem;
  }
`

interface IPontuacoesProps {
  grades: {
    performance: number;
    accessibility: number;
    bestPratics: number;
    seo: number;
  };
}

const setColors = (grade: number) => {
  switch(true) {
    case(grade <= 30): {
      return ["#c82b0b", "#c82b0b"];
    }
    case(grade <= 60): {
      return ["#ff6f00", "#ff6f00"];
    }
    case(grade <= 90): {
      return ["#00ff1a", "#00ff1a"];
    }
    default: {
      return ["#fff200", "#fff200"];
    }
  }
}

const Pontuacoes = ({ grades } : IPontuacoesProps) => {
  const gradesMapping: Record<keyof typeof grades, string> = {
    performance: "Desempenho",
    accessibility: "Acessibilidade",
    bestPratics: "Boas Práticas",
    seo: "SEO"
  };

  return (
    <PontuacoesStyled>
      {Object.keys(grades).map((key) => (
        <PontosContainer key={key}>
          <PontosEsfera cores={setColors(grades[key as keyof typeof grades])}>
            <Pontos>{grades[key as keyof typeof grades]}</Pontos>
          </PontosEsfera>
          <PontosTitulos>
            {gradesMapping[key as keyof typeof grades]}
          </PontosTitulos>
        </PontosContainer>
      ))}
    </PontuacoesStyled>
  );
}

export default Pontuacoes;
