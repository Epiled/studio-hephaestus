import styled from "styled-components"

interface IPontuacoesProps {
  grades: {
    performance: number;
    accessibility: number;
    bestPratics: number;
    seo: number;
  };
}

const PontuacoesStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  row-gap: 6rem;
  margin-top: 5rem;
  font-family: "Inter", sans-serif;
`

const PontosContainer = styled.div`
`

const PontosEsfera = styled.div<{cores?: (string | number)[]}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  aspect-ratio: 1 / 1;
  background: ${(props) =>(props.cores && props.cores[3]) || "var(--lighter)"};
  border: 1rem solid;
  border-color: ${(props) =>(props.cores && props.cores[1]) || "var(--lighter)"};
  border-radius: 50%;
  
  @media screen and (min-width: 1440px) {
    width: 20.8rem;
    height: 20.8rem;
  }
`

const Pontos = styled.span<{cores?:(string | number)[]}>`
  color: ${(props) =>(props.cores && props.cores[2]) || "var(--darker)"};
  font-size: 3.6rem;
  font-weight: 900;
  font-family: "Inter", sans-serif;
  filter: drop-shadow(2px 2px 0px ${(props) =>(props.cores && props.cores[0]) || "var(--darker)"});

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
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
    margin-top: 6rem;
  }
`

const setColors = (grade: number) => {
  switch(true) {
    case(grade <= 30): {
      return ["#470000", "#BF0000", "#FF0000", "#FFD2D2", 300, 1];
    }
    case(grade <= 60): {
      return ["#461900", "#FF6006", "#FF7A00", "#FFDECC", 500, 2];
    }
    case(grade <= 90): {
      return ["#00331A", "#00B754", "#00CC66", "#C3FFE1", 700, 3];
    }
    default: {
      return ["#5E4F00", "#F1AF09", "#cd9812" , "#FFF9BF", 900, 3];
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
            <Pontos cores={setColors(grades[key as keyof typeof grades])}>
              {grades[key as keyof typeof grades]}
            </Pontos>
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
