import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '8rem 0', minHeight: '60vh' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <span className="subtitle">Get in Touch</span>
        <h1 className="h1" style={{ margin: '2rem 0' }}>Contact JI Jewels</h1>
        
        <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-dark)', margin: '2rem auto' }}></div>
        
        <p className="body-text" style={{ lineHeight: '2', marginBottom: '3rem' }}>
          Whether you have a question about our collections or need assistance with an order, 
          our team is here to help you find the perfect piece of Asian heritage.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
          <div>
            <h3 className="h3" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--gold-primary)' }}>Email</h3>
            <p className="h2" style={{ fontSize: '1.2rem' }}>threads1172@gmail.com</p>
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <h3 className="h3" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--gold-primary)' }}>WhatsApp / Call</h3>
            <p className="h2" style={{ fontSize: '1.5rem' }}>+92 331 8825206</p>
          </div>
        </div>

        <p className="body-text" style={{ marginTop: '4rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
          Our curators will respond to your inquiry within 24 hours.
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
