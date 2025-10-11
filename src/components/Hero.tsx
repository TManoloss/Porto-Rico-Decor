import Link from 'next/link';
import Image from "next/image";
import HeroImage from "../img/Img.png";

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              Agende um Horário
            </Link>
          </div>
          
          <div className="relative">
            {/* Retângulo bege atrás da imagem - canto superior direito */}
            <div className="absolute -top-6 -right-6 w-[110%] h-[110%] bg-[#C4A574] rounded-lg -z-10"></div>

            {/* Imagem principal */}
            <div className="relative z-10">
              <Image
                src={HeroImage}
                alt="Ambiente decorado Porto Rico"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}