import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
        <span className="subtitle">Our Story</span>
        <h1 className="h1" style={{ margin: '1.5rem 0' }}>The Heritage of JI Jewels</h1>
        <p className="body-text" style={{ margin: '0 auto', lineHeight: '1.8' }}>
          JI Jewels has been the destination for those who seek more than just jewelry. 
          We believe in the power of artworks—curated artificial pieces that carry the weight of legacy and the precision of modern mastery in the Asian tradition.
        </p>
      </div>

    </motion.div>
  );
};

export default About;
