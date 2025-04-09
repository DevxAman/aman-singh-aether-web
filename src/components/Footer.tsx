
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-orbitron font-bold gradient-text mb-6">Amandeep Singh</h2>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-neon-orange transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-orange mb-8"></div>
          
          <div className="text-gray-400 text-sm text-center">
            <p>&copy; {year} Amandeep Singh. All rights reserved.</p>
            <p className="mt-2">Built with React, Three.js and a lot of ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
