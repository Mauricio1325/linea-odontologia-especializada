import { motion } from 'motion/react';
import { COMPANY_DATA } from '../data';
import { MapPin, Phone, Instagram, ArrowRight, Clock } from 'lucide-react';

export default function ContactAndFooter() {
  return (
    <footer id="contato" className="bg-brand text-white pt-24 relative overflow-hidden">
      
      {/* CTA Final */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-accent rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand mb-6">
            Pronto para Transformar seu Sorriso?
          </h2>
          <p className="text-brand/80 text-lg mb-8 max-w-2xl mx-auto">
            Dê o primeiro passo para recuperar sua confiança e qualidade de vida. Agende sua avaliação com a Dra. Romana Silva e nossa equipe de especialistas.
          </p>
          <a 
            href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand hover:bg-brand-light text-white font-bold rounded-full transition-colors group"
          >
            Falar pelo WhatsApp
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-bold leading-none text-white">Linea</span>
              <span className="text-[0.70rem] tracking-widest uppercase mt-1 text-white/50">Odontologia</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Excelência, segurança e qualidade de vida através da odontologia especializada. Mais de 30 anos de história em Goiânia.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_DATA.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-brand transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href={`https://wa.me/${COMPANY_DATA.whatsapp}`} className="flex items-start gap-3 hover:text-accent transition-colors text-white/70">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_DATA.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_DATA.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-lg">Localização</h4>
            <div className="flex items-start gap-3 text-white/70 mb-6">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>{COMPANY_DATA.locationName} - {COMPANY_DATA.address}</span>
            </div>
            {/* Simple Map Embed Placeholder - if we had a precise Google Map link, we'd use iframe. I'll include a simple style container. */}
            <div className="w-full h-48 bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.57917757975!2d-49.261!3d-16.691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef16eeb0bf8af%3A0xeab4945e8f498c17!2sGoi%C3%A2nia%2C%20State%20of%20Goi%C3%A1s!5e0!3m2!1sen!2sbr!4v1714578100118!5m2!1sen!2sbr" 
                  className="absolute inset-0 w-full h-full border-0 grayscale opacity-80" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Clínica"
                 ></iframe>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Linea Odontologia. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Responsável Técnico: Dra Romana Silva
          </p>
        </div>
      </div>
    </footer>
  );
}
