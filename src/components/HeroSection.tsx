
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, FileText, ChevronDown } from 'lucide-react';
import { init, animate } from '../utils/heroAnimation';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (canvasRef.current && containerRef.current) {
      init(canvasRef.current, containerRef.current);
      animate();
    }

    return () => {
      // Cleanup function for the animation if needed
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
    >
      <div 
        ref={containerRef} 
        className="absolute inset-0 z-0"
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      </div>

      <div className="z-10 text-center max-w-4xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-4">
          <span className="block">Amandeep Singh</span>
          <span className="gradient-text">Data Scientist & AI Enthusiast</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mt-6 mb-8 max-w-2xl mx-auto">
          Aspiring Data Scientist | AI Enthusiast | Future Innovator
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white shadow-lg shadow-neon-purple/20">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>
          
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-white shadow-lg shadow-neon-cyan/20">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </a>
          
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button className="bg-neon-orange hover:bg-neon-orange/80 text-white shadow-lg shadow-neon-orange/20">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center animate-float">
        <a href="#about" className="text-white hover:text-neon-purple transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
