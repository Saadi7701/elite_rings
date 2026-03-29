import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
        <span className="subtitle">Our Story</span>
        <h1 className="h1" style={{ margin: '1.5rem 0' }}>The Heritage of L'Atelier</h1>
        <p className="body-text" style={{ margin: '0 auto', lineHeight: '1.8' }}>
          Founded in 1924, L'Atelier Élysée has been the destination for those who seek more than just jewelry. 
          We believe in the power of artifacts—pieces that carry the weight of legacy and the precision of modern mastery.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <img 
          src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80" 
          alt="Our Workshop" 
          style={{ width: '100%', height: '600px', objectFit: 'cover' }} 
        />
        <div>
          <h2 className="h2" style={{ marginBottom: '2rem' }}>Crafting with Purpose</h2>
          <p className="body-text" style={{ marginBottom: '2rem' }}>
            Every ring, pendant, and bracelet that leaves our atelier is a symphony of hand-carved gold and ethically sourced diamonds. 
            Our master jewelers spend hundreds of hours on a single piece, ensuring that every facet catches the light exactly as intended.
          </p>
          <p className="body-text">
            We are committed to sustainability and transparency, ensuring that every material we use is sourced with the deepest respect for the earth and the hands that harvest it.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
