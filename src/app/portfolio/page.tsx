import PortfolioGallery from '../../components/PortfolioGallery';

export const metadata = {
    title: 'Portfólio | Porto Rico Decorações',
    description: 'Conheça nossos projetos de cortinas sob medida, persianas e reforma de estofados.',
};

export default function PortfolioPage() {
    return (
        <main className="pt-4 pb-20 bg-background-light min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mt-2 mb-6">Galeria de Projetos</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore nossa coleção de trabalhos realizados, onde cada detalhe é pensado para transformar ambientes com sofisticação e conforto.
                    </p>
                </div>

                <PortfolioGallery />
            </div>
        </main>
    );
}
