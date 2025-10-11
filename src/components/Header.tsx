import Image from 'next/image';
import Link from 'next/link';
import Logo1 from "../img/Logotipo Principal Porto Rico 01.png"
import Logo2 from "../img/Porto Rico - Logotipo Secundário 01.png"

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            
            <Link href="/">
            <div className="flex items-center flex-row gap-4">
              <Image
                src={Logo1} 
                alt="Porto Rico Decorações" 
                className="h-12 w-auto"
              />
              <Image
                src={Logo2} 
                alt="Porto Rico Decorações" 
                className="h-12 w-auto"
              />
              </div>
            </Link>
            
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-[#D4AF37] transition-all">
              Início
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-[#D4AF37] transition-all">
              Sobre
            </Link>
            <Link href="#servicos" className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-[#D4AF37] transition-all">
              Serviços
            </Link>
            <Link href="#clientes" className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-[#D4AF37] transition-all">
              Clientes
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-[#D4AF37] transition-all">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}