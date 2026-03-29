import React from 'react';
import { motion } from 'framer-motion';

const Heritage = () => {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '6rem 0' }}>
      <div className="heritage-split" style={{ marginBottom: '6rem' }}>
        <img 
          src="https://images.unsplash.com/photo-1579562725510-9b439818820c?auto=format&fit=crop&q=80" 
          alt="Craftsmanship" 
          className="heritage-image" 
        />
        <div className="heritage-content" style={{ padding: '4rem' }}>
          <span className="subtitle" style={{ marginBottom: '1.5rem', display: 'block' }}>Since 1924</span>
          <h1 className="h1" style={{ marginBottom: '2rem' }}>A Century of Precision.</h1>
          <p className="body-text" style={{ marginBottom: '3rem' }}>
            L'Atelier was founded by the Aurelius family with a single focus: uncompromising excellence. 
            From our very first forge to today's state-of-the-art metallurgical lab, we blend ancient hammering techiques with aerospace-grade precision milling.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Heritage;
