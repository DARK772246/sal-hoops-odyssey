
import { motion } from 'framer-motion';

export const MasteryGallery = () => {
  return (
    <section id="mastery" className="relative w-full bg-background flex items-center justify-center py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-foreground">MASTER THE</span>{' '}
            <span className="text-primary">GAME</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            A collection of my achievements in mastering the game.
          </p>

          {/* Certificate Gallery */}
          {/* Replace the image paths with your actual certificate images. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Advanced Dribbling Certificate", img: "/certificates2/cert1.jpg" },
              { title: "Shooting Accuracy Award", img: "/certificates2/cert2.jpg" },
              { title: "Defensive Skills Trophy", img: "/certificates2/cert3.jpg" },
              // Add more certificates here
            ].map((certificate, index) => (
              <motion.div
                key={index}
                className="bg-card p-4 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              >
                <img 
                  src={certificate.img} 
                  alt={certificate.title} 
                  className="rounded-md mb-4 w-full h-64 object-cover" 
                />
                <h3 className="text-xl font-bold text-foreground">{certificate.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
