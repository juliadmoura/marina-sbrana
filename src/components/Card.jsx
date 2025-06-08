import { ButtonOutlined } from './Button';
import { Body, Subtitle } from './Texts';

function Card(props) {
  const bgClass = `bg-${props.procedureBackground}`;
  return (
    <div
      className={`${bgClass} bg-no-repeat bg-cover bg-center aspect-video w-full max-w-[627px]`}
    >
      <div className="p-8 w-9/12 gap-3 flex flex-col">
        <Subtitle text={props.procedureName} />
        <Body text={props.procedureDescription} />
        <ButtonOutlined text="Quero saber mais!" />
      </div>
    </div>
  );
}
export default Card;
