import Banner from "../components/Banner";
import Contato from "../components/Contato";
import Projetos from "../components/Projetos";
import Rodape from "../components/Rodape";
import Servicos from "../components/Servicos";
import Lottie from "lottie-react";
import walk from '../db/walk.json';
const Home = () => {

  return (
    <>
      <Banner />
      <Servicos />
      <Projetos />
      <Contato />
      <Rodape />
      <Lottie animationData={walk} />
    </>
  );
}

export default Home;