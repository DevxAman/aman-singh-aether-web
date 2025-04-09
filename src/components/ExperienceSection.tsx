
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarDays, Award, GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'internship' | 'training' | 'certification';
}

const timelineItems: TimelineItem[] = [
  {
    title: "Data Science Intern",
    organization: "Bharat Intern",
    period: "June 2023 - August 2023",
    description: "Worked on machine learning models for stock price prediction and sentiment analysis of Twitter data.",
    type: "internship"
  },
  {
    title: "Web Development Intern",
    organization: "Code Alpha",
    period: "Feb 2023 - May 2023",
    description: "Developed responsive web applications using React, Node.js, and MongoDB.",
    type: "internship"
  },
  {
    title: "AI/ML Training",
    organization: "Infosys",
    period: "Dec 2022 - Jan 2023",
    description: "Comprehensive training on AI fundamentals, machine learning algorithms, and practical applications.",
    type: "training"
  },
  {
    title: "Full Stack Development",
    organization: "Ansh Infotech",
    period: "Sep 2022 - Nov 2022",
    description: "Hands-on training in full stack development with focus on React and Express.js.",
    type: "training"
  },
  {
    title: "Machine Learning Certification",
    organization: "Coursera",
    period: "August 2022",
    description: "Completed comprehensive course on machine learning algorithms and their implementation.",
    type: "certification"
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="h-6 w-6" />;
      case 'internship':
        return <Briefcase className="h-6 w-6" />;
      case 'training':
        return <Award className="h-6 w-6" />;
      case 'certification':
        return <Award className="h-6 w-6" />;
      default:
        return <CalendarDays className="h-6 w-6" />;
    }
  };
  
  const getColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'text-neon-purple border-neon-purple';
      case 'internship':
        return 'text-neon-cyan border-neon-cyan';
      case 'training':
        return 'text-neon-orange border-neon-orange';
      case 'certification':
        return 'text-neon-purple border-neon-purple';
      default:
        return 'text-white border-white';
    }
  };

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-black/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-16">
            Experience & <span className="gradient-text">Certifications</span>
          </h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-orange transform -translate-x-1/2" />
            
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } mb-12`}
              >
                <div className="md:w-1/2" />
                
                <div className={`absolute left-0 md:left-1/2 w-10 h-10 rounded-full glass-card border-2 ${
                  getColor(item.type)
                } flex items-center justify-center transform -translate-x-1/2`}
                >
                  {getIcon(item.type)}
                </div>
                
                <div className={`glass-card rounded-lg p-6 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                } md:w-5/12`}
                >
                  <h3 className="text-lg font-orbitron font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className={`text-sm ${
                    item.type === 'internship' ? 'text-neon-cyan' :
                    item.type === 'training' ? 'text-neon-orange' : 'text-neon-purple'
                  } mb-2`}
                  >
                    {item.organization}
                  </p>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>{item.period}</span>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
