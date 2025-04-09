
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Titanic Classification",
    description: "Predicting survival rates on the Titanic using machine learning algorithms with feature engineering and model optimization.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    github: "https://github.com",
    image: "/placeholder.svg"
  },
  {
    title: "SMS Classifier",
    description: "NLP-based classifier that categorizes SMS messages as spam or legitimate using text preprocessing and machine learning techniques.",
    techStack: ["Python", "NLTK", "Scikit-learn", "NLP"],
    github: "https://github.com",
    image: "/placeholder.svg"
  },
  {
    title: "Fraud Detection",
    description: "Real-time fraud detection system using anomaly detection algorithms on financial transaction data.",
    techStack: ["Python", "TensorFlow", "Pandas", "SQL"],
    github: "https://github.com",
    image: "/placeholder.svg"
  },
  {
    title: "AI Job Recommender",
    description: "Personalized job recommendation system using collaborative filtering and content-based algorithms.",
    techStack: ["Python", "Flask", "React", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg"
  },
  {
    title: "Voice Recognition",
    description: "Voice recognition system that can detect emotions and sentiment from audio inputs using deep learning.",
    techStack: ["Python", "PyTorch", "Librosa", "Tensorflow"],
    github: "https://github.com",
    image: "/placeholder.svg"
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  return (
    <section id="projects" className="relative py-20 md:py-32 bg-black/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-16">
            My <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full glass-card border-white/5 hover:border-neon-purple/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/10 group">
                  <CardHeader>
                    <div className="h-48 rounded-md overflow-hidden mb-4 bg-gradient-to-br from-neon-purple/20 via-neon-cyan/10 to-neon-orange/20">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardTitle className="font-orbitron tracking-wide group-hover:text-neon-purple transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-white/5 text-gray-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="ghost" 
                      className="text-neon-purple hover:text-white hover:bg-neon-purple/20"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    
                    {project.demo && (
                      <Button 
                        variant="ghost" 
                        className="text-neon-cyan hover:text-white hover:bg-neon-cyan/20"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
