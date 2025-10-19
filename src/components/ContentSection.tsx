import { motion } from 'framer-motion';

interface ContentSectionProps {
  id: string;
  title: string;
  content: string;
}

export const ContentSection = ({ id, title, content }: ContentSectionProps) => {
  // Split the content into paragraphs
  const paragraphs = content.trim().split('\n').filter(p => p.trim() !== '');

  return (
    <section id={id} className="relative min-h-screen w-full bg-background flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-12">
          <span className="text-foreground">{title}</span>
        </h2>
        
        <div className="text-lg md:text-xl text-muted-foreground space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
