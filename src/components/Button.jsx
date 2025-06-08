import { useState } from 'react';

export function ButtonIcon(props) {
  return (
    <>
      <button className="inline-block rounded bg-rosa-medio font-bold border-b-4 border-rosa-escuro w-auto px-8 py-3 text-lg text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden ">
        <div className="flex items-center gap-2">
          <img src={props.svg} alt={props.alt} />
          {props.text}
        </div>
      </button>
    </>
  );
}

export function ButtonOutlined(props) {
  return (
    <>
      <button className="inline-block rounded font-bold bg-white border border-rosa-escuro w-206 px-4 py-3 text-lg text-rosa-escuro transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden">
        {props.text}
      </button>
    </>
  );
}

export function ButtonProcedure(props) {
  const [showText, setShowText] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setShowText((prev) => !prev);
    setIsActive((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`inline-block rounded-full ${
          isActive ? 'bg-rosa-medio' : 'bg-rosa-medio-70'
        } font-bold border-b-4 ${
          isActive ? ' border-rosa-escuro' : 'border-rosa-escuro-20'
        } w-auto px-6 py-3 text-lg text-white ease-in-out transition-all duration-500`}
      >
        <div className="flex items-center gap-2">
          <img src={props.svg} alt={props.alt} />
          {showText && (
            <span
              className={`transition-all duration-500 ease-in-out text-2xl ${
                showText
                  ? 'opacity-100 scale-100 ml-2 max-w-xs'
                  : 'opacity-0 scale-90 ml-0 max-w-0'
              }
              whitespace-nowrap overflow-hidden`}
            >
              {props.text}
            </span>
          )}
        </div>
      </button>
    </>
  );
}
