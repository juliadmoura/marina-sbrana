export function Title(props) {
  return (
    <div className="flex items-center justify-center flex-col font-bold gap-4 md:gap-6">
      <div className="text-3xl md:text-5xl text-rosa-escuro text-center">
        {props.text}
      </div>
      <div className="bg-rosa-escuro h-0.5 w-full max-w-[360px] md:w-90"></div>
    </div>
  );
}

export function Subtitle(props) {
  return (
    <div className="text-2xl md:text-4xl text-rosa-escuro font-semibold leading-tight">
      {props.text}
    </div>
  );
}

export function Body(props) {
  return (
    <div className="text-base md:text-xl text-preto leading-snug">
      {props.text}
    </div>
  );
}
