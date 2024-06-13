import Banner from "../components/Banner";
import Contato from "../components/Contato";
import Projetos from "../components/Projetos";
import Rodape from "../components/Rodape";
import Servicos from "../components/Servicos";
import Processo from "../components/Processo";
const Home = () => {

  return (
    <>
      <Banner />
      <Servicos />
      <Projetos />
      <Processo />
      <Contato />
      <Rodape />
    </>
  );
}

export default Home;