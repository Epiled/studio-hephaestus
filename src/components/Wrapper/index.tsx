import styled from "styled-components"

const WrapperEstilizado = styled.div`
  width: calc(100vw - 4rem);
  height: auto;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: calc(100vw - 7.5rem);
  }

  @media screen and (min-width: 1440px) {
    width: calc(100vw - 10rem);
  }
`

const Wrapper = ({ children }: { children: React.ReactNode } ) => {
  return (
    <WrapperEstilizado>
      {children}
    </WrapperEstilizado>
  )
}

export default Wrapper