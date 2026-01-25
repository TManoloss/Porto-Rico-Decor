import Image from 'next/image';
import Link from 'next/link';
import Logo2 from "@/PORTO RICO Visual/Porto Rico - Logotipo Secundário 01.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2002;

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={Logo2}
                alt="Porto Rico Decorações"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Há {yearsInBusiness} anos transformando ambientes  com qualidade, dedicação e o toque de sofisticação que seu ambiente merece.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-secondary">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#inicio" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre</Link></li>
              <li><Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="#clientes" className="hover:text-white transition-colors">Clientes</Link></li>
              <li><Link href="#contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-secondary">Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">Cortinas sob medida</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Reforma de estofados</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Persianas</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Manutenção</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-secondary">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/portoricodecoracoes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://w.app/eiv9ta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Porto Rico Decorações. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Site seguro
          </div>
        </div>
      </div>
    </footer>
  );
}