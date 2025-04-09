
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", values);
    toast.success("Message sent successfully! I'll get back to you soon.");
    form.reset();
    setIsSubmitting(false);
  };

  const socialLinks = [
    { name: 'Email', icon: <Mail className="h-5 w-5" />, link: 'mailto:your.email@example.com', color: 'neon-purple' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, link: 'https://linkedin.com', color: 'neon-cyan' },
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, link: 'https://github.com', color: 'neon-orange' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, link: 'https://instagram.com', color: 'neon-purple' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-black/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-16">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-orbitron mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Have a project in mind or just want to chat about data science and AI? 
                Feel free to reach out through the form or connect with me directly on social media.
              </p>
              
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex items-center p-4 glass-card rounded-lg hover:bg-${link.color}/10 transition-all duration-300 group`}
                  >
                    <div className={`mr-4 h-10 w-10 rounded-full flex items-center justify-center bg-${link.color}/20 text-${link.color} group-hover:text-white group-hover:bg-${link.color}/50 transition-colors`}>
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{link.name}</h4>
                      <p className="text-sm text-gray-400">{link.link.replace('mailto:', '')}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-lg p-6"
            >
              <h3 className="text-2xl font-orbitron mb-6 text-white">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-white/5 border-white/10 text-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            className="bg-white/5 border-white/10 text-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="bg-white/5 border-white/10 text-white resize-none min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400 text-sm">
                          Share your thoughts, project ideas, or just say hello!
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
