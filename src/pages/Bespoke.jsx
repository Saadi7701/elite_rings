import React from 'react';
import { motion } from 'framer-motion';

const Bespoke = () => {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '6rem 0', minHeight: '80vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <span className="subtitle">Custom Creations</span>
        <h1 className="h1" style={{ margin: '1.5rem 0 2rem' }}>Bespoke Service</h1>
        <p className="body-text" style={{ margin: '0 auto 3rem', lineHeight: '1.8' }}>
          Engage directly with our master jewelers to conceptualize, design, and forge a piece that is distinctly yours. 
          The Bespoke journey begins with a private consultation, material selection, and 3D architectural rendering before moving to our Parisian atelier where your legacy artifact is born.
        </p>
        <button className="btn btn-primary">Request Consultation</button>
      </div>
      <div style={{ marginTop: '6rem' }}>
        <img 
          src="https://images.unsplash.com/photo-1599643478524-fb965191542f?auto=format&fit=crop&q=80&w=1600" 
          alt="Bespoke Process" 
          style={{ width: '100%', height: '500px', objectFit: 'cover' }} 
        />
      </div>
    </motion.div>
  );
};

export default Bespoke;
