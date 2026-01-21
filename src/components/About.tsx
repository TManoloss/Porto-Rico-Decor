import Image from "next/image";
import Logo from "../../public/logos/Logotipo Principal Porto Rico 02.png";
import AboutImage from "../img/Img.png";

export default function About() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2002;

  return (
    <section id="sobre" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C4A474 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="mt-8">
                <Image
                  src={AboutImage}
                  alt="Detalhe de cortina"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div>
                <Image
                  src={Logo}
                  alt="Logo Porto Rico"
                  className="rounded-xl shadow-lg w-full h-auto object-contain bg-white p-4"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <span className="font-display text-9xl font-bold text-white">PR</span>
            </div>
          </div>
          <div>
            <h2 className="text-secondary font-display font-italic text-2xl mb-2">Sobre nós</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">Tradição em criar <br />ambientes únicos</h3>
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                A Porto Rico Decorações é referência em cortinas sob medida e reforma de estofados há mais de {yearsInBusiness} anos. Nossa experiência e dedicação garantem qualidade e sofisticação para seu ambiente.
              </p>
              <p>
                Trabalhamos com tecidos nobres e uma equipe altamente qualificada, sempre buscando a excelência em cada projeto. Do planejamento à instalação, cuidamos de cada detalhe para transformar sua casa.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
              <div>
                <span className="block text-3xl font-display font-bold text-secondary">{yearsInBusiness}+</span>
                <span className="text-sm text-gray-300">Anos de Mercado</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-bold text-secondary">2k+</span>
                <span className="text-sm text-gray-300">Projetos Entregues</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-bold text-secondary">100%</span>
                <span className="text-sm text-gray-300">Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}