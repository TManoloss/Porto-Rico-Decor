import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '../img/Img.png';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seu conforto tem nome
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Há 35 anos transformando ambientes com cortinas sob medida e reforma de estofados,
              sempre com uma equipe de profissionais qualificados.
            </p>
            <Link
              href="#contato"
              className="inline-block bg-[#0A4D3C] text-white px-8 py-3 rounded hover:bg-[#083829] transition-colors"
            >
              Agendar um horário
            </Link>
          </div>

          {/* Imagem com fundo deslocado */}
          <div className="relative flex justify-center">
            {/* Retângulo de fundo bege */}
            <div className="absolute bottom-6 left-6 w-full h-full bg-[#C4A574] rounded-md"></div>

            {/* Imagem principal */}
            <div className="relative z-10">
              <Image
                src={HeroImage}
                alt="Ambiente decorado Porto Rico"
                className="rounded-md shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
