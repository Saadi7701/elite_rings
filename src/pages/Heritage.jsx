import React from 'react';
import { motion } from 'framer-motion';

const Heritage = () => {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '6rem 0' }}>
      <div className="heritage-split" style={{ marginBottom: '6rem' }}>
        <img 
          src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80" 
          alt="Master Jeweler at Work" 
          className="heritage-image" 
        />
        <div className="heritage-content" style={{ padding: '4rem' }}>
          <span className="subtitle" style={{ marginBottom: '1.5rem', display: 'block' }}>Since 1924</span>
          <h1 className="h1" style={{ marginBottom: '2rem' }}>A Century of Precision.</h1>
          <p className="body-text" style={{ marginBottom: '3rem' }}>
            Elite Rings was founded with a single focus: uncompromising excellence in Pakistani craftsmanship. 
            In our Lahore-based atelier, we blend generations of indigenous jewelry techniques with modern precision to create artifacts that last for lifetimes.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Heritage;
