import Image from 'next/image';

// Import all client logos
import Adeva from '../clientes/adeva.png';
import BdoB from '../clientes/b_do_b.png';
import BelasArtes from '../clientes/belas_artes.png';
import Bossa from '../clientes/bossa.png';
import Bradesco from '../clientes/bradesco.png';
import Caminhando from '../clientes/caminhando.png';
import Carlitos from '../clientes/carlitos.png';
import Ellus from '../clientes/ellus.png';
import FreiCaneca from '../clientes/freicaneca.png';
import Geledes from '../clientes/geledes.png';
import Inbrands from '../clientes/inbrands.png';
import LogoUSP from '../clientes/logo_usp.png';
import Mercantile from '../clientes/mercantile.png';
import Ofelia from '../clientes/ofelia.png';
import Richards from '../clientes/richards.png';
import Transvip from '../clientes/transvip.png';

const clients = [
    { name: 'Adeva', logo: Adeva },
    { name: 'B do B', logo: BdoB },
    { name: 'Belas Artes', logo: BelasArtes },
    { name: 'Bossa', logo: Bossa },
    { name: 'Bradesco', logo: Bradesco },
    { name: 'Caminhando', logo: Caminhando },
    { name: 'Carlitos', logo: Carlitos },
    { name: 'Ellus', logo: Ellus },
    { name: 'Frei Caneca', logo: FreiCaneca },
    { name: 'Geledes', logo: Geledes },
    { name: 'Inbrands', logo: Inbrands },
    { name: 'USP', logo: LogoUSP },
    { name: 'Mercantile', logo: Mercantile },
    { name: 'Ofelia', logo: Ofelia },
    { name: 'Richards', logo: Richards },
    { name: 'Transvip', logo: Transvip },
];

export default function Clients() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
                <h2 className="text-3xl font-display font-bold text-primary">Nossos Clientes</h2>
                <p className="text-gray-600 mt-2">Empresas que confiam na nossa qualidade</p>
            </div>

            <div className="relative w-full overflow-hidden pause-on-hover">
                <div className="flex animate-scroll w-[200%]">
                    {/* First set of logos */}
                    <div className="flex items-center justify-around w-1/2 gap-8 px-4">
                        {clients.map((client, index) => (
                            <div key={`client-1-${index}`} className="flex-shrink-0 transition-all duration-300">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-16 w-auto object-contain max-w-[150px]"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless scrolling */}
                    <div className="flex items-center justify-around w-1/2 gap-8 px-4">
                        {clients.map((client, index) => (
                            <div key={`client-2-${index}`} className="flex-shrink-0 transition-all duration-300">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-16 w-auto object-contain max-w-[150px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
