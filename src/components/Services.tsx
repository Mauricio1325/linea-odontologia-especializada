import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { Sparkles, HeartPulse, Activity } from 'lucide-react';

const iconsData: Record<string, React.ElementType> = {
  implant: HeartPulse, // Represents deep structural health/implants
  prosthesis: Activity,
  veneer: Sparkles,
  whitening: Sparkles,
  general: HeartPulse,
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Nossos Elementos de Excelência</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Tratamentos de Alto Padrão</h3>
            <p className="text-lg text-slate-600">
              Oferecemos uma gama completa de soluções odontológicas para garantir a melhor versão do seu sorriso, com tecnologia, conforto e previsibilidade de resultados.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconsData[service.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-surface border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all group"
              >
                <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-serif font-bold text-brand mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-brand-light rounded-3xl p-8 md:p-12 text-center"
        >
          <h4 className="text-white text-xl font-bold mb-2">Convênios Atendidos</h4>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Para sua maior comodidade, aceitamos planos de saúde.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Saúde Caixa', 'Geap', 'CONAB'].map(convenio => (
               <span key={convenio} className="px-5 py-2 rounded-full bg-white/10 text-white font-medium border border-white/20">
                 {convenio}
               </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
