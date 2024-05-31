import Banner from "../components/Banner";
import Contato from "../components/Contato";
import Projetos from "../components/Projetos";
import Rodape from "../components/Rodape";
import Servicos from "../components/Servicos";
import Lottie from "lottie-react";
import walk from '../db/walk.json';
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
      <Lottie animationData={walk} />
    </>
  );
}

export default Home;