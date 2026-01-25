

import Image from 'next/image';
import CortinaIcon from '../img/icon-curtain 1.png';
import EstofadosIcon from '../img/couch-sofa-icon 1.png';
import ManutencaoIcon from '../img/repairing-icon 1.png';

export default function Services() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2002;

  return (
    <section id="servicos" className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">O que fazemos</span>
          <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-6">Nossos Serviços Especializados</h2>
          <p className="text-gray-600 text-lg">
            Com mais de {yearsInBusiness} anos no mercado, a Porto Rico Decorações já conquistou clientes em toda Grande São Paulo com serviços de alta qualidade.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cortinas */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 group border border-gray-100">
            <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Image src={CortinaIcon} alt="Cortinas" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Cortinas</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cortinas sob medida que transformam o ambiente — acabamento impecável, tecidos de qualidade e instalação profissional.
            </p>
            <div className="w-16 h-1 bg-secondary rounded-full"></div>
          </div>

          {/* Estofados */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 group border border-gray-100 relative transform md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-t-2xl"></div>
            <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Image src={EstofadosIcon} alt="Estofados" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Estofados</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Estofados sob medida que unem conforto, durabilidade e design. Sofás, poltronas e cadeiras com acabamento profissional, tecidos de qualidade e atenção a cada detalhe.
            </p>
            <div className="w-16 h-1 bg-secondary rounded-full"></div>
          </div>

          {/* Manutenção */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 group border border-gray-100">
            <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Image src={ManutencaoIcon} alt="Manutenção" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Manutenção</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Manutenção especializada: reparos, ajustes e revitalização para prolongar a vida útil e manter o visual dos seus ambientes.
            </p>
            <div className="w-16 h-1 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}