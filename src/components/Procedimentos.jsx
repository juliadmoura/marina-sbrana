import { useState } from 'react';
import body from '../assets/icons/body.svg';
import face from '../assets/icons/face.svg';
import injection from '../assets/icons/injection.svg';
import meditation from '../assets/icons/meditation.svg';
import plus from '../assets/icons/plus.svg';

import procedures from '../data/procedures';
import { ButtonProcedure } from './Button';
import Card from './Card';
import { Title } from './Texts';

function Procedimentos() {
  const esteticaFacial = procedures.filter(
    (procedure) => procedure.type === 'esteticaFacial',
  );
  const esteticaCorporal = procedures.filter(
    (procedure) => procedure.type === 'esteticaCorporal',
  );

  const terapiasIntegrativas = procedures.filter(
    (procedure) => procedure.type === 'terapiasIntegrativas',
  );
  const terapiasCorporais = procedures.filter(
    (procedure) => procedure.type === 'terapiasCorporais',
  );

  const [activeButtonId, setActiveButtonId] = useState(1);
  const [cardsExibition, setCardsExibition] = useState(esteticaFacial);
  const handleButtonClick = (id) => {
    setActiveButtonId(id);
    switch (id) {
      case 1:
        setCardsExibition(esteticaFacial);
        break;
      case 2:
        setCardsExibition(esteticaCorporal);
        break;
      case 3:
        setCardsExibition(terapiasIntegrativas);
        break;
      case 4:
        setCardsExibition(terapiasCorporais);
        break;
      case 5:
        setCardsExibition(procedures);
        break;
      default:
        setCardsExibition(procedures);
    }
  };

  return (
    <div className="bg-white py-20 lg:px-14 xsm:px-8 flex flex-col items-center gap-12">
      <Title text="Procedimentos" />
      <div className="flex flex-wrap gap-8 lg:gap-16 justify-center items-center w-full">
        <ButtonProcedure
          svg={face}
          text="Estética facial"
          id={1}
          isActive={activeButtonId === 1}
          onClick={handleButtonClick}
        />
        <ButtonProcedure
          svg={body}
          text="Estética corporal"
          id={2}
          isActive={activeButtonId === 2}
          onClick={handleButtonClick}
        />
        <ButtonProcedure
          svg={injection}
          text="Terapias integrativas"
          id={3}
          isActive={activeButtonId === 3}
          onClick={handleButtonClick}
        />
        <ButtonProcedure
          svg={meditation}
          text="Terapias corporais"
          id={4}
          isActive={activeButtonId === 4}
          onClick={handleButtonClick}
        />
        <ButtonProcedure
          svg={plus}
          text="Todos"
          id={5}
          isActive={activeButtonId === 5}
          onClick={handleButtonClick}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {cardsExibition.map((procedure) => (
          <Card
            key={procedure.id}
            procedureName={procedure.name}
            procedureBackground={procedure.background}
            procedureDescription={procedure.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Procedimentos;
