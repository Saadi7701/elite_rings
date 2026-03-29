import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
        <span className="subtitle">Let's Connect</span>
        <h1 className="h1" style={{ margin: '1.5rem 0' }}>Consult with a Curator</h1>
        <p className="body-text" style={{ margin: '0 auto', lineHeight: '1.8' }}>
          Our curators are available for private consultations at our Parisian atelier, worldwide via video call, 
          or in person for select clients. Reach out to start your L'Atelier journey.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
        <div>
          <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Send an Inquiry</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="email@example.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" style={{ height: '150px' }} placeholder="How can we assist you today?" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
          </form>
        </div>
        <div>
          <div style={{ marginBottom: '4rem' }}>
            <h3 className="h3" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Boutique Address</h3>
            <p className="body-text" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              128 Place Vendôme <br />
              75001 Paris, <br />
              France
            </p>
          </div>
          <div style={{ marginBottom: '4rem' }}>
            <h3 className="h3" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Concierge Hours</h3>
            <p className="body-text">
              Monday – Friday <br />
              10:00 — 18:00 CET <br />
              <br />
              Saturday <br />
              11:00 — 16:00 CET
            </p>
          </div>
          <div>
            <h3 className="h3" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Contact Channels</h3>
            <p className="body-text">
              E: concierge@latelierelysee.com <br />
              T: +33 (0) 1 42 42 42 42
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
