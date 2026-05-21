import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const points = [
    "Especialista em Implantes dentários pela ABO-GO",
    "Mais de 30 anos de história de excelência",
    "Equipe multiprofissional de cirurgiões",
    "Foco na qualidade de vida e segurança",
  ];

  return (
    <section id="sobre" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/imagem2.png" 
                alt="Dra. Romana Silva" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-serif text-brand font-bold mb-1">30+</p>
              <p className="text-sm text-slate-500 font-medium">Anos construindo<br/>sorrisos perfeitos</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Sobre Nós</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              A Dra. Romana Silva & Linea Odontologia
            </h3>
            
            <div className="space-y-4 text-slate-600 mb-8 leading-relaxed">
              <p>
                A empresa surgiu da união de colegas visionários sob o nome de Linea Odontologia, e hoje conta com mais de 30 anos de uma riquíssima história.
              </p>
              <p>
                Atualmente, a Dra. Romana Silva, especialista em Implantes dentários pela ABO-GO, lidera a clínica com o apoio dedicado de uma equipe multiprofissional de cirurgiões. Nosso grande diferencial é o atendimento com padrão de excelência focado integralmente no paciente.
              </p>
              <p>
                Nossa missão é devolver qualidade de vida às pessoas através da Implantodontia e próteses do tipo protocolo. Queremos restabelecer a mastigação com total segurança e proporcionar a alegria irresistível de ter um sorriso bonito, saudável e duradouro.
              </p>
            </div>

            <ul className="space-y-3 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-brand">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
