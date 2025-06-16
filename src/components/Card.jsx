import { ButtonOutlined } from './Button';
import { Body, Subtitle } from './Texts';

function Card(props) {
  const bgClass = `bg-${props.procedureBackground}`;
  return (
    <div
      className={`${bgClass} bg-no-repeat bg-cover bg-center aspect-video w-full max-w-[627px] rounded-lg overflow-hidden`}
    >
      <div className="p-4 md:p-8 w-8/12 md:w-9/12 gap-2 md:gap-3 flex flex-col h-full justify-center bg-gradient-to-r from-white/80 to-transparent">
        <Subtitle text={props.procedureName} />
        <Body text={props.procedureDescription} />
        <ButtonOutlined
          text="Quero saber mais!"
          className="mt-2 md:mt-0 self-start"
        />
      </div>
    </div>
  );
}
export default Card;
