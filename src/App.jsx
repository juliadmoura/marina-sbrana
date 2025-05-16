import whatsapp from './assets/icons/whatsapp.svg';
import { ButtonIcon, ButtonOutlined } from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <ButtonIcon
        svg={whatsapp}
        text="Agende sua consulta"
        alt="logotipo do whatsapp"
      />
      <ButtonOutlined text="Quero saber mais!" />
    </>
  );
}

export default App;
