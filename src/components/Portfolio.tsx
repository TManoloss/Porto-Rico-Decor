import Image from 'next/image';
import portfolioData from '../data/portfolio.json';

export default function Portfolio() {
    const featuredProjects = portfolioData.filter(project => [4, 32, 51].includes(project.id));

    return (
        <section className="py-20 bg-accent-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-primary">Nosso Portfólio</h2>
                        <p className="text-gray-600 mt-2">Veja alguns de nossos projetos recentes</p>
                    </div>
                    <a href="/portfolio" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-4 md:mt-0">
                        Ver galeria completa <span className="material-icons-outlined text-sm">arrow_forward</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                            <Image
                                src={`/portfolio/${project.image}`}
                                alt={`${project.service} em ${project.location}`}
                                fill
                                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-secondary text-sm font-bold uppercase">{project.location}</span>
                                <h4 className="text-white font-display text-xl">{project.service}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="/portfolio" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                        Ver galeria completa <span className="material-icons-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
