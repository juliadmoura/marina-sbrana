export function Title(props) {
  return (
    <div className="flex items-center justify-center flex-col font-bold gap-6">
      <div className="text-5xl text-rosa-escuro">{props.text}</div>
      <div className="bg-rosa-escuro h-0.5 w-90"></div>
    </div>
  );
}

export function Subtitle(props) {
  return (
    <div className="text-40 text-rosa-escuro font-semibold">{props.text}</div>
  );
}

export function Body(props) {
  return <div className="text-xl text-preto">{props.text}</div>;
}
