import Image from "next/image";
import Logo from "../../public/logos/Logotipo Principal Porto Rico 02.png";
export default function About() {
  return (
    <section id="sobre" className="bg-[#0A4D3C] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
           <Image
            src={Logo}
            alt="Logo Porto Rico"
            width={500}
            height={500}
            />
          </div>
          
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Sobre nós</h2>
            
            <p className="mb-4 text-gray-200">
              A Porto Rico Decorações é referência em cortinas sob medida e reforma de estofados 
              há mais de 35 anos. Nossa experiência e dedicação garantem qualidade e sofisticação 
              para seu ambiente.
            </p>
            
            <p className="mb-4 text-gray-200">
              Trabalhamos com tecidos nobres e uma equipe altamente qualificada, sempre buscando 
              a excelência em cada projeto. Do planejamento à instalação, cuidamos de cada detalhe 
              para transformar sua casa.
            </p>
            
            <p className="text-gray-200">
              Nossa missão é proporcionar conforto, elegância e funcionalidade através de soluções 
              personalizadas que refletem o estilo e as necessidades de cada cliente. Cada projeto 
              é único e recebe nossa atenção especial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}