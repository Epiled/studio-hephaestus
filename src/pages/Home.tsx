import Banner from "../components/Banner";
import Contato from "../components/Contato";
import Projetos from "../components/Projetos";
import Rodape from "../components/Rodape";
import Servicos from "../components/Servicos";

const Home = () => {
  return (
    <>
      <Banner />
      <Servicos />
      <Projetos />
      <Contato />
      <Rodape />
    </>
  );
}

export default Home;