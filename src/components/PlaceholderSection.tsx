import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PlaceholderSectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

export const PlaceholderSection = ({ id, title, subtitle, icon: Icon, comingSoon = true }: PlaceholderSectionProps) => {
  return (
    <section id={id} className="relative min-h-screen w-full bg-background flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-8 inline-block"
        >
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-full shadow-orange">
            <Icon className="w-20 h-20 text-primary-foreground" />
          </div>
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          <span className="text-foreground">{title}</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {comingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block bg-primary/20 text-primary px-6 py-3 rounded-full font-bold text-lg border-2 border-primary/40">
              Coming Soon
            </span>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
