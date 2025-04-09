
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const programmingSkills: Skill[] = [
  { name: 'Python', level: 90, color: 'neon-purple' },
  { name: 'C++', level: 75, color: 'neon-cyan' },
  { name: 'SQL', level: 85, color: 'neon-orange' },
  { name: 'React', level: 70, color: 'neon-purple' },
  { name: 'JavaScript', level: 65, color: 'neon-cyan' },
  { name: 'R', level: 60, color: 'neon-orange' },
];

const dataSkills: Skill[] = [
  { name: 'Machine Learning', level: 85, color: 'neon-purple' },
  { name: 'Data Visualization', level: 80, color: 'neon-cyan' },
  { name: 'Statistical Analysis', level: 75, color: 'neon-orange' },
  { name: 'NLP', level: 70, color: 'neon-purple' },
  { name: 'Deep Learning', level: 65, color: 'neon-cyan' },
  { name: 'Tableau', level: 60, color: 'neon-orange' },
];

const toolSkills: Skill[] = [
  { name: 'GitHub', level: 85, color: 'neon-purple' },
  { name: 'Jupyter Notebook', level: 90, color: 'neon-cyan' },
  { name: 'VS Code', level: 80, color: 'neon-orange' },
  { name: 'Docker', level: 60, color: 'neon-purple' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl md:text-2xl font-orbitron mb-6 text-white">
                Programming Languages
              </h3>
              
              <div className="space-y-6">
                {programmingSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sm text-neon-purple">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className={`h-2 bg-white/10`} 
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="glass-card rounded-xl p-6 mb-8">
                <h3 className="text-xl md:text-2xl font-orbitron mb-6 text-white">
                  Data Science & AI
                </h3>
                
                <div className="space-y-6">
                  {dataSkills.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-sm text-neon-cyan">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className={`h-2 bg-white/10`} 
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl md:text-2xl font-orbitron mb-6 text-white">
                  Tools & Technologies
                </h3>
                
                <div className="space-y-6">
                  {toolSkills.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-sm text-neon-orange">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className={`h-2 bg-white/10`} 
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
