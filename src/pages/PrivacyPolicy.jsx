import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div 
      className="container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={{ padding: '8rem 5% 4rem' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="h1" style={{ marginBottom: '3rem', textAlign: 'center' }}>Privacy Policy</h1>
        
        <div className="body-text" style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            At Elite Rings, we are committed to protecting the privacy and security of our clients. This Privacy Policy outlines how we collect, use, and safeguard your personal information in accordance with the laws of the Islamic Republic of Pakistan.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Information Collection</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We collect information that you provide directly to us when you make a purchase, subscribe to our newsletter, or contact our curators for a consultation. This may include your name, contact information, shipping address, and payment details.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Use of Information</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Your information is used to process orders, provide client support, and enhance your experience with Elite Rings. We may also use your contact details to send updates about our latest collections and exclusive events, which you can opt out of at any time.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Data Security</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We implement rigorous security measures to protect your personal data from unauthorized access, disclosure, or alteration. All transactions are processed through secure gateways to ensure the highest level of protection for your financial information.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Third-Party Disclosure</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Elite Rings does not sell or trade your personal information to outside parties. We only share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, provided those parties agree to keep this information confidential.
          </p>

          <h2 className="h3" style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Your Rights</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            You have the right to access, correct, or request the deletion of your personal information held by Elite Rings. For any inquiries regarding your data, please contact our privacy officer at privacy@eliterings.pk.
          </p>

          <p style={{ marginTop: '4rem', fontSize: '0.8rem', fontStyle: 'italic' }}>
            Last updated: March 2026. Elite Rings, Lahore, Pakistan.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
