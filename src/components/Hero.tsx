'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heroImages = [

  '/heroImages/IMG-20230418-WA0037_enhanced.jpg',
  '/heroImages/IMG_20220923_190610_983_enhanced.jpg',
  '/heroImages/Screenshot_20260122-125452.Instagram_enhanced.jpg',
  '/heroImages/Screenshot_20260122-130254.Instagram_enhanced.jpg',
  '/heroImages/Screenshot_20260122-130749.Instagram_enhanced.jpg',
  '/heroImages/Screenshot_20260122-133428.Instagram_enhanced.jpg',
  '/heroImages/Screenshot_20260122-133743.Instagram_enhanced.jpg',
];

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2002;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/10 border border-secondary/20">
              <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Desde 2002</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-6">
              Seu conforto <br /><span className="text-secondary italic">tem nome</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Há {yearsInBusiness} anos transformando ambientes com cortinas sob medida, confecção e reforma de estofados, unindo tradição e sofisticação para o seu lar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#contato" className="bg-primary text-white px-6 py-3 rounded-none font-semibold text-base hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2">
                Agendar um horário
                <span className="material-icons-outlined text-sm">arrow_forward</span>
              </Link>
              <Link href="#servicos" className="bg-white text-primary border border-primary px-6 py-3 rounded-none font-semibold text-base hover:bg-gray-50 transition-all flex items-center justify-center">
                Nossos serviços
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out h-[500px]">
              {heroImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <Image
                    src={src}
                    alt={`Ambiente decorado Porto Rico ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              ))}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border-l-4 border-primary z-10">
                <p className="font-display font-bold text-primary text-lg">Excelência</p>
                <p className="text-sm text-gray-600">Acabamentos perfeitos com materiais nobres para clientes exigentes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
