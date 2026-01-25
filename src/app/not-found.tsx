import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background-light text-center px-4">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">Página não encontrada</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Desculpe, a página que você está procurando não existe ou foi movida.
            </p>
            <Link
                href="/"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-none font-semibold transition-all shadow-lg hover:shadow-xl"
            >
                Voltar para o Início
            </Link>
        </div>
    );
}
