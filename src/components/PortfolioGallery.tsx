'use client';

import { useState } from 'react';
import Image from 'next/image';
import portfolioData from '../data/portfolio.json';

const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'tapeçaria', label: 'Tapeçaria' },
    { id: 'cortinas e persianas', label: 'Cortinas e Persianas' },
    { id: 'cabeceiras de cama', label: 'Cabeceiras de Cama' },
];

export default function PortfolioGallery() {
    const [activeCategory, setActiveCategory] = useState('todos');

    const filteredProjects = activeCategory === 'todos'
        ? portfolioData
        : portfolioData.filter(project => project.category === activeCategory);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-6 py-2 rounded-none text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === category.id
                            ? 'bg-primary text-white shadow-lg transform scale-105'
                            : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-primary border border-gray-200'
                            }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 animate-fadeIn">
                        <Image
                            src={`/portfolio/${project.image}`}
                            alt={`${project.service} em ${project.location}`}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.location}</span>
                            <h3 className="text-white font-display text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.service}</h3>
                            <span className="text-gray-300 text-xs uppercase tracking-widest mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 opacity-0 group-hover:opacity-100">{project.category}</span>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">Nenhum projeto encontrado nesta categoria.</p>
                </div>
            )}
        </div>
    );
}
