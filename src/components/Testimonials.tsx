import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Histórias Reais</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">O Que Nossos Pacientes Dizem</h3>
            <p className="text-lg text-slate-600">
              A satisfação dos nossos pacientes é a verdadeira métrica da nossa excelência.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-100 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-700 italic mb-8 flex-grow relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <p className="font-serif font-bold text-brand">{testimonial.name}</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Paciente</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
