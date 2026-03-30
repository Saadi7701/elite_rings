import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <motion.div 
      className="container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={{ padding: '8rem 5% 4rem' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="h1" style={{ marginBottom: '3rem', textAlign: 'center' }}>Refund Policy</h1>
        
        <div className="body-text" style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            At Elite Rings, we strive for excellence in every piece we create. Each artifact is carefully inspected by our master jewelers for quality and craftsmanship.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Returns and Exchanges</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            If you are not completely satisfied with your purchase, you may initiate a return or exchange within 7 days of receiving your item. All returns must be in their original condition and packaging, without any signs of wear or alteration.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Refund Process</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Once we receive and inspect your returned piece, we will notify you of the status of your refund. Approved refunds will be processed through your original payment method or as store credit, depending on your preference. Please allow 10-15 business days for the refund to reflect in your account.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Non-Refundable Items</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Custom-made (Bespoke) jewelry and engraved pieces are final sale and are not eligible for returns or refunds. We encourage our clients to review the design and details thoroughly during the consultation phase before final production.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Shipping and Insurance</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            The cost of return shipping is the responsibility of the client. We recommend using a secure, insured courier service, as Elite Rings is not responsible for items lost or damaged during return transit.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Contact for Returns</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            To initiate a return or exchange, please contact our concierge at threads1172@gmail.com or visit our atelier in Gulberg, Lahore, with your original receipt.
          </p>

          <p style={{ marginTop: '4rem', fontSize: '0.8rem', fontStyle: 'italic' }}>
            Last updated: March 2026. Elite Rings, Lahore, Pakistan.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RefundPolicy;
