import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 5% 2rem', marginTop: '6rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        <div>
          <h3 className="h2" style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.2em' }}>JI JEWELS</h3>
          <p className="body-text" style={{ fontSize: '0.8rem', maxWidth: '250px', lineHeight: '1.6' }}>
            Artisan jewelry crafted in the deep tradition of Asian heritage and timeless grace. Since 1924.
          </p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Explore</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.875rem' }}>
            <li><Link to="/collections">Collection</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Assistance</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.875rem' }}>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/care">Care Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Legal</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.875rem' }}>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.7rem', borderTop: '1px solid var(--border-dark)', paddingTop: '2rem' }}>
        &copy; {new Date().getFullYear()} ELITE RINGS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
