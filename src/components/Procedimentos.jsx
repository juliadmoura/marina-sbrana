import procedures from '../data/procedures';
import Card from './Card';
import { Title } from './Texts';

function Procedimentos() {
  return (
    <div className="bg-white py-20 lg:px-14 xsm:px-8 flex flex-col items-center gap-12">
      <Title text="Procedimentos" />
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
