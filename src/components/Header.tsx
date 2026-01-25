'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo1 from "../img/Logotipo Principal Porto Rico 01.png"
import Logo2 from "@/PORTO RICO Visual/Porto Rico - Logotipo Secundário 01.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkHref = (sectionId: string) => {
    return pathname === '/' ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={Logo1}
                alt="Porto Rico Logo Principal"
                className="h-16 w-auto object-contain"
              />
              <Image
                src={Logo2}
                alt="Porto Rico Decorações"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href={getLinkHref('inicio')} className="text-text-light hover:text-primary font-medium transition-colors">Início</Link>
            <Link href={getLinkHref('sobre')} className="text-text-light hover:text-primary font-medium transition-colors">Sobre</Link>
            <Link href={getLinkHref('servicos')} className="text-text-light hover:text-primary font-medium transition-colors">Serviços</Link>
            <Link href="/portfolio" className="text-text-light hover:text-primary font-medium transition-colors">Portfólio</Link>
            <Link href={getLinkHref('clientes')} className="text-text-light hover:text-primary font-medium transition-colors">Clientes</Link>
            <Link href={getLinkHref('contato')} className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-none font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Contato
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-light hover:text-primary focus:outline-none"
            >
              <span className="material-icons-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-light border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href={getLinkHref('inicio')} className="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:text-primary hover:bg-gray-50">Início</Link>
            <Link href={getLinkHref('sobre')} className="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:text-primary hover:bg-gray-50">Sobre</Link>
            <Link href={getLinkHref('servicos')} className="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:text-primary hover:bg-gray-50">Serviços</Link>
            <Link href="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:text-primary hover:bg-gray-50">Portfólio</Link>
            <Link href={getLinkHref('clientes')} className="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:text-primary hover:bg-gray-50">Clientes</Link>
            <Link href={getLinkHref('contato')} className="block px-3 py-2 rounded-md text-base font-medium text-primary font-bold">Contato</Link>
          </div>
        </div>
      )}
    </nav>
  );
}