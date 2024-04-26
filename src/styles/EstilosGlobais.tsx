import Animacoes from "./Animacoes";
import ResetCSS from "./ResetCSS";
import Variaveis from "./Variaveis";

const EstilosGlobais: React.FC = () => {
  return <>
    <ResetCSS />
    <Variaveis />
    <Animacoes />
  </>;
}

export default EstilosGlobais;