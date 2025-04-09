
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Instagram, Github, Code } from 'lucide-react';

interface GalleryItem {
  title: string;
  image: string;
  link: string;
  type: 'instagram' | 'github';
}

const galleryItems: GalleryItem[] = [
  {
    title: "100 Days of Code Challenge",
    image: "/placeholder.svg",
    link: "https://instagram.com",
    type: "instagram"
  },
  {
    title: "ML Project Showcase",
    image: "/placeholder.svg",
    link: "https://github.com",
    type: "github"
  },
  {
    title: "Data Visualization Reels",
    image: "/placeholder.svg",
    link: "https://instagram.com",
    type: "instagram"
  },
  {
    title: "Coding Tips",
    image: "/placeholder.svg",
    link: "https://instagram.com",
    type: "instagram"
  },
  {
    title: "Open Source Contributions",
    image: "/placeholder.svg",
    link: "https://github.com",
    type: "github"
  },
  {
    title: "AI Research Notes",
    image: "/placeholder.svg",
    link: "https://github.com",
    type: "github"
  }
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  return (
    <section id="gallery" className="relative py-20 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-16">
            Coding <span className="gradient-text">Gallery</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden glass-card border-white/5 transition-all duration-300 hover:border-neon-purple/30 hover:shadow-lg hover:shadow-neon-purple/10">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                      <div className="flex items-center justify-between w-full">
                        <h3 className="text-white font-medium text-lg">{item.title}</h3>
                        {item.type === "instagram" ? (
                          <Instagram className="h-5 w-5 text-neon-purple" />
                        ) : (
                          <Github className="h-5 w-5 text-neon-cyan" />
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 glass-card rounded-full hover:bg-neon-purple/20 transition-colors duration-300 group"
              >
                <Code className="h-5 w-5 mr-2 text-neon-purple group-hover:text-white transition-colors" />
                <span className="text-white">View more on GitHub</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
