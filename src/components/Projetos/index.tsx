import styled from "styled-components"
import Wrapper from "../Wrapper"
import projectsDatas from "../../db/projetos";
import { useEffect, useRef, useState } from "react";
import Topo from "./Topo";
import Pontuacoes from "./Pontuacoes";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CirculoSVG from "../CirculoSVG";
import Bubble from "../Bubble";
import wave from "../../assets/wave.svg";

const ProjetosEstilizados = styled.section`
  position: relative;
`

const ContainerBottom = styled.div`
  margin-top: 6rem;
`

const SubTitulo = styled.span`
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }
`

const TituloProjeto = styled.h2`
  color: var(--lighter);
  max-width: 66rem;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--darker);
  margin-bottom: 3rem;

  @media screen and (min-width: 1440px) {
    font-size: 4.8rem;
  }
`

const SubProjeto = styled(SubTitulo)`
  font-size: 2rem;
  font-weight: 400;
  background-image: linear-gradient(90deg, var(--color-main) 0%, var(--color-complement) 80% 100%);
  background-clip: text;
  color: transparent;
  margin-bottom: 0;
  
  @media screen and (min-width: 1440px) {
    font-size: 2.4rem;
  }
`

const Texto = styled.p`
  color: #2E2E2E;
  font-size: 2rem;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }
`

const ContainerProject = styled.div`
  max-width: 32rem;
  flex-shrink: 0;
`

const ProjectMoldura = styled.div`
  box-shadow: 0 0 .5rem .3rem #00000038;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--lighter);
`

const ProjectImage = styled.img`
  width: 100%;
  height: 43.6rem;
  border-radius: 1rem;
`

const ProjectLabels = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 0 1rem;
  margin-top: 1rem;
`

const CategoryName = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`

const NameType = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  position: relative;
`

const SwiperCustom = styled(Swiper)`
  overflow: visible;
  position: relative;
  background-image: linear-gradient(90deg, var(--color-main) 0%, var(--color-complement) 80% 100%);
  background-size: 100% 50%;
  background-repeat: no-repeat;

  &::before {
    content: '';
    top: 0%;
    left: 0;
    position: absolute;
    background-image: url(${wave});
    background-position: bottom;
    background-repeat: repeat-x;
    height: 6.8rem;
    width: 100%;
    height: 50%;
    animation: scrollWave 5s infinite linear forwards reverse;
    animation-delay: 1000ms;
  }
`

const SwiperSlideCustom = styled(SwiperSlide)`
  width: auto;

  @media screen and (min-width: 1440px) {
    width: 42rem;
  }
`

const CirculoSVGStyled = styled(CirculoSVG)`
  margin-right: .5rem;
`

const Projetos = () => {
  const [idActive, setIdActive] = useState("");

  const [projectActive, setProjectActive] = useState({
    category: "",
    name: "",
    shortName: "",
    grades: {
      performance: 0,
      accessibility: 0,
      bestPratics: 0,
      seo: 0
    }
  });

  const handleSelected = (projectId: string) => {
    const project = projectsDatas.find(project => project.id === projectId);

    if (project) {
      setProjectActive({
        category: project.category,
        name: project.name,
        shortName: project.shortName,
        grades: {
          performance: project.grades.performance,
          accessibility: project.grades.accessibility,
          bestPratics: project.grades.bestPratics,
          seo: project.grades.seo
        }
      });
      setIdActive(projectId);
    }
  }

  useEffect(() => {
    handleSelected("3");
  }, []);

  const swiperRef = useRef<SwiperRef | null>(null);
  const [active, setActive] = useState(false);

  return (
    <ProjetosEstilizados>
      <Bubble />
      <Topo
        onPrevClick={() => swiperRef.current?.swiper?.slidePrev()}
        onNextClick={() => swiperRef.current?.swiper?.slideNext()}
      />

      <SwiperCustom
        ref={swiperRef}
        spaceBetween={30}
        initialSlide={3}
        slidesPerView={'auto'}
        loop={true}
        breakpoints={{
          768: {
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
        }}
      >
        {projectsDatas.map(project => {
          return (
            <SwiperSlideCustom key={project.id}>
              <ContainerProject>
                <ProjectMoldura onClick={() => {
                  setActive(true)
                  handleSelected(project.id)
                }}>
                  <ProjectImage src={project.image} />
                </ProjectMoldura>
                <ProjectLabels>
                  <CategoryName>{project.category} - {project.name}</CategoryName>
                  <NameType>
                    {/* {idActive === project.id && <CirculoSVGStyled estado={active} />} */}
                    <CirculoSVGStyled estado={idActive === project.id && active} />
                    {project.shortName} - {project.category}
                  </NameType>
                </ProjectLabels>
              </ContainerProject>
            </SwiperSlideCustom>
          )
        })}
      </SwiperCustom>

      <ContainerBottom>
        <Wrapper>
          <TituloProjeto>
            <SubProjeto>Resultados do: </SubProjeto>
            {projectActive.shortName} - {projectActive.category}
          </TituloProjeto>
          <Texto>
            Nossos clientes veem resultados tangíveis, desde tempos de carregamento rápidos até classificações elevadas nos motores de busca.
          </Texto>

          <Pontuacoes grades={projectActive.grades} />

        </Wrapper>
      </ContainerBottom>


    </ProjetosEstilizados>
  )
}

export default Projetos