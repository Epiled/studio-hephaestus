import Banner from "../components/Banner";
import Projetos from "../components/Projetos";
import Rodape from "../components/Rodape";
import Servicos from "../components/Servicos";

const Home = () => {
  return (
    <>
      <Banner />
      <Servicos />
      <Projetos />
      <Rodape />
    </>
  );
}

export default Home;