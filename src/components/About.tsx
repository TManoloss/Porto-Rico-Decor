'use client';

import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/logos/Logotipo Principal Porto Rico 02.png";
import AboutImage from "../PORTO RICO Visual/Porto Rico 03.jpg";
import Image01 from "../PORTO RICO Visual/Porto Rico 01.jpg";
import Image02 from "../PORTO RICO Visual/Porto Rico 02.jpg";

export default function About() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2002;
  const [activeTab, setActiveTab] = useState<'empresa' | 'historia' | 'objetivo'>('empresa');

  return (
    <section id="sobre" className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C4A474 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative sticky top-24">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <Image
                  src={AboutImage}
                  alt="Detalhe de cortina"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
                <Image
                  src={Image01}
                  alt="Ambiente decorado"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4">
                <Image
                  src={Logo}
                  alt="Logo Porto Rico"
                  className="rounded-xl shadow-lg w-full h-auto object-contain bg-white p-4"
                />
                <Image
                  src={Image02}
                  alt="Ambiente decorado"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <span className="font-display text-9xl font-bold text-white">PR</span>
            </div>
          </div>

          <div>
            <h2 className="text-secondary font-display font-italic text-2xl mb-2">Sobre nós</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">Tradição em criar <br />ambientes únicos</h3>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-4 mb-8 border-b border-white/10 pb-4">
              <button
                onClick={() => setActiveTab('empresa')}
                className={`text-lg font-bold transition-all duration-300 pb-2 border-b-2 ${activeTab === 'empresa' ? 'text-secondary border-secondary' : 'text-gray-400 border-transparent hover:text-white'}`}
              >
                A Empresa
              </button>
              <button
                onClick={() => setActiveTab('historia')}
                className={`text-lg font-bold transition-all duration-300 pb-2 border-b-2 ${activeTab === 'historia' ? 'text-secondary border-secondary' : 'text-gray-400 border-transparent hover:text-white'}`}
              >
                História
              </button>
              <button
                onClick={() => setActiveTab('objetivo')}
                className={`text-lg font-bold transition-all duration-300 pb-2 border-b-2 ${activeTab === 'objetivo' ? 'text-secondary border-secondary' : 'text-gray-400 border-transparent hover:text-white'}`}
              >
                Objetivo
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'empresa' && (
                <div className="space-y-6 text-gray-200 text-lg leading-relaxed animate-fadeIn text-justify">
                  <p>
                    A Porto Rico Decorações tem preocupação efetiva em aprimorar seus conhecimentos, está sempre atenta às novas tendências de mercado e ao surgimento constante de modernas tecnologias, tanto para produtos quanto para serviços, através da participação em cursos e seminários com os fabricantes.
                  </p>
                  <p>
                    Estamos prontos para lhe atender. Precisando decorar seu ambiente, controlar a luminosidade para o conforto do seu sono e proteger seus móveis dos raios UV? Conte conosco. Esperamos sua ligação, teremos um imenso prazer em atendê-lo! Levamos nossa loja até você!
                  </p>
                </div>
              )}

              {activeTab === 'historia' && (
                <div className="space-y-6 text-gray-200 text-lg leading-relaxed animate-fadeIn text-justify">
                  <p>
                    Seu fundador, Manoel Carvalho, atua no ramo desde 1998, começando como auxiliar de projetos e ao longo do tempo foi galgando degraus de sucesso, chegando a gerenciar e dirigir grandes lojas do setor.
                  </p>
                  <p>
                    Mas seu espírito empreendedor queria alçar voos mais altos, foi assim que em 2002, junto com um sócio fundou a PORTO RICO DECORAÇÕES, logo após 06 meses adquiriu 100% da empresa, fruto de muito de trabalho e dedicação.
                  </p>
                </div>
              )}

              {activeTab === 'objetivo' && (
                <div className="space-y-6 text-gray-200 text-lg leading-relaxed animate-fadeIn text-justify">
                  <p>
                    Apresentar soluções em design e conforto que garante a qualidade, eficiência, durabilidade, segurança e preços compatíveis sempre respaldadas em profissionalismo, competência e trabalho com as qualificações exigidas pelos clientes, decoradores e arquitetos.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
              <div>
                <span className="block text-3xl font-display font-bold text-secondary">{yearsInBusiness}+</span>
                <span className="text-sm text-gray-300">Anos de Mercado</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-bold text-secondary">2k+</span>
                <span className="text-sm text-gray-300">Projetos Entregues</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-bold text-secondary">100%</span>
                <span className="text-sm text-gray-300">Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}