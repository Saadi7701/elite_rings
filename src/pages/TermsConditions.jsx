import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <motion.div 
      className="container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={{ padding: '8rem 5% 4rem' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="h1" style={{ marginBottom: '3rem', textAlign: 'center' }}>Terms & Conditions</h1>
        
        <div className="body-text" style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to Elite Rings. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions, which govern Elite Rings' relationship with you.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Terms of Use</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            All content on this website, including designs, images, and text, is the intellectual property of Elite Rings and may not be reproduced without our explicit written consent. We reserve the right to modify or terminate any part of our service for any reason, without notice.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Product Information</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We make every effort to display the colors and details of our jewelry as accurately as possible. However, as the actual colors you see depend on your monitor, we cannot guarantee that your monitor's display will reflect the true colors of our artifacts. Price and availability are subject to change without notice.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Authenticity and Quality</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Elite Rings guarantees the authenticity of all our materials, including gold purity and diamond quality as specified in the product descriptions. Each piece comes with a certificate of authenticity from our atelier in Lahore.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Order Acceptance</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We reserve the right to refuse or cancel any order for any reason, including limitations on stock, inaccuracies in product pricing, or suspicion of fraudulent activity. If an order is canceled after your payment has been processed, we will issue a full refund.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Governing Law</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Your use of this website and any dispute arising out of such use is subject to the laws of Pakistan. All legal proceedings will be held in the courts of Lahore, Punjab.
          </p>

          <p style={{ marginTop: '4rem', fontSize: '0.8rem', fontStyle: 'italic' }}>
            Last updated: March 2026. Elite Rings, Lahore, Pakistan.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsConditions;
