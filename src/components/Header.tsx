import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_DATA } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Tratamentos', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Logo Linea Odontologia" 
              className="h-14 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className={`font-serif text-2xl font-bold leading-none ${isScrolled ? 'text-brand' : 'text-white'}`}>
                Linea
              </span>
              <span className={`text-[0.65rem] tracking-widest uppercase mt-1 ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
                Odontologia
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                isScrolled 
                  ? 'bg-brand text-white hover:bg-brand-light' 
                  : 'bg-white text-brand hover:bg-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Agendar Avaliação</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-brand' : 'text-brand'}`} /> // Color handles by mobile menu, but wait, if it's not scrolled it's white?
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-brand' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`
        fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <button 
            className="absolute top-5 right-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8 text-brand" />
          </button>
          
          <nav className="flex flex-col gap-6 text-center mt-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-brand"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto">
            <a 
              href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-brand text-white py-4 rounded-xl text-lg font-medium"
            >
              <Phone className="w-5 h-5" />
              Agendar Avaliação
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
