import whatsapp from '../assets/icons/whatsapp.svg';
import imgBanner from '../assets/images/img-banner.jpeg';
import { ButtonIcon } from './Button';
import { Body, Subtitle, Title } from './Texts';

function Banner() {
  return (
    <>
      <div className="bg-rosa-claro py-20 lg:px-40 xsm:px-8 flex flex-col gap-12">
        <Title text="Quem Sou" />

        <div className="flex gap-10 xsm:flex-col md:flex-row xsm:justify-center xsm:items-center">
          <div className="flex items-start flex-col w-3/4 gap-6">
            <Subtitle text="Dra. Marina Lidia Sbrana" />
            <p>
              <Body text="A doutora Marina Lidia Sbrana é especialista em estética avançada e fisioterapeuta pós Graduada em Fisioterapia Dermato Funcional. Com mais de [número de anos] anos de experiência, desenvolveu uma trajetória sólida e respeitada na área da estética, sempre priorizando o bem-estar e a satisfação de seus pacientes. Sua atuação é pautada pela excelência técnica, atualização constante em novos protocolos e procedimentos, e um olhar atento para as particularidades de cada pessoa. " />
            </p>
            <p>
              <Body text=" Reconhecida pela dedicação, ética e carinho no atendimento, a doutora Marina oferece uma experiência completa, que vai além dos procedimentos estéticos, promovendo também a valorização da autoestima e o cuidado integral com a beleza e a saúde da pele. Atualmente, dedica-se a transformar vidas através da estética, sempre com foco em resultados naturais, técnicas seguras e atendimento humanizado, em um ambiente acolhedor e profissional." />
            </p>
            <div className="xsm:hidden md:block">
              <ButtonIcon svg={whatsapp} text="Agende sua consulta" />
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/4 xsm:w-3/4">
            <img src={imgBanner} alt="marina"></img>
          </div>
          <div className="md:hidden">
            <ButtonIcon svg={whatsapp} text="Agende sua consulta" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
