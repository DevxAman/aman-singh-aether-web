
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-xl font-orbitron font-bold gradient-text">Amandeep Singh</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-gray-300 hover:text-neon-purple transition-colors duration-300 font-medium text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex space-x-3">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-neon-purple/20">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-neon-purple/20">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-neon-purple/20">
                  <FileText className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost" 
              size="icon"
              className="text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-md p-4">
          <div className="flex flex-col space-y-4 pt-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-neon-purple block px-3 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 mt-4 px-3">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
