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
      <button className="inline-block rounded font-bold bg-white border border-rosa-escuro w-262 px-8 py-3 text-lg text-rosa-escuro transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden ">
        {props.text}
      </button>
    </>
  );
}
