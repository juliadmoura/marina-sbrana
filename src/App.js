import { ButtonIcon, ButtonOutlined } from './components/Button';
import Header from './components/Header';
import whatsapp from './icons/whatsapp.svg';

function App() {
  return (
    <>
      <Header />
      <ButtonIcon svg={whatsapp} text="Agende sua consulta" />
      <ButtonOutlined text="Quero saber mais!" />
    </>
  );
}

export default App;
