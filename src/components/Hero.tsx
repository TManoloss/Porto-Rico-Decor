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
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images with Dissolve Effect */}
      <div className="absolute inset-0 z-0">
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
              sizes="100vw"
              quality={90}
            />
          </div>
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-xl text-white mb-10 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
          Há {yearsInBusiness} anos transformando ambientes com cortinas sob medida, confecção e reforma de estofados, unindo tradição e sofisticação para o seu lar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contato" className="bg-primary text-white px-8 py-4 rounded-none font-semibold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2">
            Agendar um horário
            <span className="material-icons-outlined text-base">arrow_forward</span>
          </Link>
          <Link href="#servicos" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-none font-semibold text-lg hover:bg-white hover:text-primary transition-all flex items-center justify-center">
            Nossos serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
