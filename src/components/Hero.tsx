import { motion } from 'motion/react';
import { COMPANY_DATA } from '../data';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagem1.png" 
          alt="Clínica Odontológica Linea" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand/80 sm:bg-brand/60 lg:bg-gradient-to-r lg:from-brand/90 lg:to-brand/30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Star className="w-4 h-4 text-accent" fill="currentColor" />
              <span className="text-white text-xs font-semibold tracking-wider uppercase">Excelência em Odontologia</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
              Transforme Seu Sorriso com <span className="text-accent">Segurança e Excelência</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl font-light">
              Mais de 30 anos de história devolvendo qualidade de vida e a alegria de sorrir. Especialistas em Implantes Dentários e Prótese Protocolo em Goiânia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Dra.%20Romana.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-light text-brand font-bold rounded-full transition-colors group"
              >
                Agendar Avaliação
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-sm transition-colors border border-white/20"
              >
                Conhecer a Clínica
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
