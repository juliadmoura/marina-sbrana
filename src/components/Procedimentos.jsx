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
  return (
    <div className="bg-white py-20 lg:px-14 xsm:px-8 flex flex-col items-center gap-12">
      <Title text="Procedimentos" />
      <div className="flex gap-16">
        <ButtonProcedure svg={face} text="Estética facial" />
        <ButtonProcedure svg={body} text="Estética corporal" />
        <ButtonProcedure svg={injection} text="Estética corporal" />
        <ButtonProcedure svg={meditation} text="Terapias corporais" />
        <ButtonProcedure svg={plus} text="Todos" />
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {procedures.map((procedure) => (
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
