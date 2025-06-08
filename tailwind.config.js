/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-botox',
    'bg-preenchimentoLabial',
    'bg-harmonizacaoFacial',
    'bg-lipoDePapada',
    'bg-lipoDePapada',
    'bg-auriculoterapia',
    'bg-bioestimuladores',
    'bg-bioestimuladoresFaciais',
    'bg-drenagem',
    'bg-dtm',
    'bg-enzimasEmagrecedoras',
    'bg-enzimasLocalizadas',
    'bg-kinesioTape',
    'bg-microagulhamento',
    'bg-microagulhamentoFacial',
    'bg-peim',
    'bg-ventosaterapia',
  ],
  theme: {
    screens: {
      xsm: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      dropShadow: {
        header: [
          '0 4px 3px rgb(214 91 110 / 0.03)',
          '0 2px 2px rgb(214 91 110 / 0.02)',
        ],
      },
      width: {
        206: '206px',
        90: '90px',
        627: '627px',
      },
      fontSize: {
        40: '2.5rem',
      },
      backgroundImage: {
        botox: "url('/src/assets/images/botox.png')",
        preenchimentoLabial:
          "url('/src/assets/images/preenchimentoLabial.png')",
        harmonizacaoFacial: "url('/src/assets/images/harmonizacaoFacial.png')",
        lipoDePapada: "url('/src/assets/images/lipoDePapada.png')",
        auriculoterapia: "url('/src/assets/images/auriculoterapia.png')",
        bioestimuladores: "url('/src/assets/images/bioestimuladores.png')",
        bioestimuladoresFaciais:
          "url('/src/assets/images/bioestimuladoresFaciais.png')",
        drenagem: "url('/src/assets/images/drenagem.png')",
        dtm: "url('/src/assets/images/dtm.png')",
        enzimasEmagrecedoras:
          "url('/src/assets/images/enzimasEmagrecedores.png')",
        enzimasLocalizadas: "url('/src/assets/images/enzimasLocalizadas.png')",
        kinesioTape: "url('/src/assets/images/kinesioTape.png')",
        microagulhamento: "url('/src/assets/images/microagulhamento.png')",
        microagulhamentoFacial:
          "url('/src/assets/images/microagulhamentoFacial.png')",
        peim: "url('/src/assets/images/peim.png')",
        ventosaterapia: "url('/src/assets/images/ventosaterapia.png')",
      },
    },
    colors: {
      'rosa-claro': '#FFE2E4',
      'rosa-medio': '#EC7684',
      'rosa-medio-70': '#EC7684B3',
      'rosa-escuro': '#D6586E',
      'rosa-escuro-20': '#D6586E33',
      preto: '#1A1A1A',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
