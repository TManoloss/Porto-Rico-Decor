import Image from 'next/image';
import ProjectImage from '../img/Img.png';

export default function Portfolio() {
    return (
        <section id="clientes" className="py-20 bg-accent-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-primary">Nosso Portfólio</h2>
                        <p className="text-gray-600 mt-2">Veja alguns de nossos projetos recentes</p>
                    </div>
                    <a href="#" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-4 md:mt-0">
                        Ver galeria completa <span className="material-icons-outlined text-sm">arrow_forward</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project 1 */}
                    <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                        <Image
                            src={ProjectImage}
                            alt="Sala moderna com cortinas"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-secondary text-sm font-bold uppercase">Apartamento Jardins</span>
                            <h4 className="text-white font-display text-xl">Cortinas de Linho</h4>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                        <Image
                            src={ProjectImage}
                            alt="Sofá verde veludo"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-secondary text-sm font-bold uppercase">Residência Morumbi</span>
                            <h4 className="text-white font-display text-xl">Reforma Sofá Chesterfield</h4>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                        <Image
                            src={ProjectImage}
                            alt="Poltrona clássica"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-secondary text-sm font-bold uppercase">Consultório Médico</span>
                            <h4 className="text-white font-display text-xl">Restauração Poltronas</h4>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                        Ver galeria completa <span className="material-icons-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
