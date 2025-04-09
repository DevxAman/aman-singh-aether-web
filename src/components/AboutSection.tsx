
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Python', 'Machine Learning', 'React', 'SQL', 'NLP', 
  'Data Visualization', 'Statistical Analysis', 'Deep Learning'
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="section-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              I am an aspiring Data Scientist and AI enthusiast with a passion for developing 
              intelligent solutions that solve real-world problems. My journey in tech began 
              with a fascination for how data can be transformed into meaningful insights 
              and predictive models.
            </p>
            
            <p className="text-gray-300 mb-8 text-lg">
              Currently focusing on machine learning applications and natural language processing, 
              I aim to contribute to the evolving field of artificial intelligence while continuously 
              expanding my skill set and knowledge base.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  className="bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-card p-1 transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-neon-purple/40 via-neon-cyan/20 to-neon-orange/40 w-full h-full rounded-2xl flex items-center justify-center">
                <span className="text-xl font-orbitron text-white/70">Your Photo</span>
                {/* Replace with actual image: <img src="/your-photo.jpg" alt="Amandeep Singh" className="w-full h-full object-cover" /> */}
              </div>
            </div>
            
            <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl border-2 border-neon-purple/30"></div>
            <div className="absolute -z-20 top-16 right-16 w-full h-full rounded-2xl border-2 border-neon-cyan/20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
