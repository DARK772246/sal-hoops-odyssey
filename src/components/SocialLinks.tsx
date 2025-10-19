import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#', color: '#E4405F' },
  { name: 'Twitter', icon: Twitter, href: '#', color: '#1DA1F2' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: '#0A66C2' },
  { name: 'Email', icon: Mail, href: 'mailto:salman@example.com', color: '#FF6B35' },
];

export const SocialLinks = () => {
  return (
    <section id="contact" className="relative min-h-screen w-full bg-gradient-card flex items-center justify-center py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-foreground">LET'S</span>{' '}
            <span className="text-primary">CONNECT</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Follow my journey and get in touch
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                >
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: link.color }}
                  />
                  <div className="relative bg-card border-2 border-primary/20 rounded-full p-6 hover:border-primary transition-all duration-300">
                    <Icon className="w-10 h-10 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-muted-foreground"
          >
            <p className="text-lg mb-2">Built with passion for basketball and technology</p>
            <p className="text-sm">© 2024 Salman Khan. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
