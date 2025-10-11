

// components/Services.tsx
import { ServiceCard } from './ServiceCard';
import CortinaIcon from '../img/icon-curtain 1.png';
import EstofadosIcon from '../img/couch-sofa-icon 1.png';
import ManutencaoIcon from '../img/repairing-icon 1.png';

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serviços
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Com mais de 20 anos no mercado, a <span className="font-semibold">Porto Rico Decorações</span> já conquistou clientes em toda Grande São Paulo com seus serviços especializados e de alta qualidade
          </p>
        </div>
        
        {/* Grid de serviços */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard
            image={CortinaIcon}
            title="Cortinas"
            description="Terapia completa para ossos, cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos."
          />

          <ServiceCard
            image={EstofadosIcon}
            title="Estofados"
            description="A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos."
          />

          <ServiceCard
            image={ManutencaoIcon}
            title="Manutenção"
            description="O Desembaraço conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo."
          />
        </div>
      </div>
    </section>
  );
}