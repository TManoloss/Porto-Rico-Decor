'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Fale Conosco</span>
            <h2 className="text-4xl font-display font-bold text-primary mt-2 mb-6">Entre em Contato</h2>
            <p className="text-gray-600 text-lg mb-10">
              Agende uma visita e conheça nossas soluções personalizadas para o seu espaço.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <span className="material-icons-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">Endereço</h4>
                  <p className="text-gray-600">Rua Sebastião Pereira 165 - CEP 01225-020<br />Santa Cecília, São Paulo - SP </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <span className="material-icons-outlined text-2xl">phone</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">Telefone</h4>
                  <p className="text-gray-600">(11) 99752-5052</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <span className="material-icons-outlined text-2xl">email</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">Email</h4>
                  <p className="text-gray-600">contato@portoricodecor.com</p>
                  <p className="text-gray-600">portoricodecor@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background-light p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-none shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
