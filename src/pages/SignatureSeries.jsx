import React from 'react';
import { motion } from 'framer-motion';

const SignatureSeries = ({ addToCart, products }) => {
  const staticProducts = [
    { id: "s1", title: "Aurelian Halo", material: "Artificial Gold & Crystals", price: 2500, image: "https://images.unsplash.com/photo-1603561591411-0e7045c97e43?auto=format&fit=crop&w=800&q=80", badge: "Static" },
    { id: "s2", title: "Golden Signet", material: "Gold Plated Surface", price: 1800, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80", badge: "Static" },
    { id: "s3", title: "Silver Band", material: "Silver Toned Alloy", price: 1450, image: "https://images.unsplash.com/photo-1627280333470-394fcd61c6b5?auto=format&fit=crop&w=800&q=80", badge: "Static" }
  ];

  const collection = [...staticProducts, ...products];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="page-header">
          <span className="subtitle">Curation 2024</span>
          <h1 className="h1" style={{ marginTop: '1rem' }}>The Signature Series</h1>
          <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--border-dark)', margin: '2rem auto' }}></div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '4rem',
          alignItems: 'start'
        }}>
          {collection.map((item, idx) => (
            <motion.div 
              key={item.id} 
              className={`product-card ${item.featured ? 'featured' : ''}`}
              style={item.featured ? { gridColumn: '1 / -1', maxWidth: '800px', display: 'flex', gap: '3rem', margin: '2rem 0' } : {}}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="product-image-wrap" style={item.featured ? { width: '50%', aspectRatio: '16/9', marginBottom: 0 } : {}}>
                <img src={item.image} alt={item.title} className="product-image" loading="lazy" />
                <div className="product-actions-overlay">
                  <button className="add-to-bag-btn" onClick={() => addToCart(item)}>Add to Bag</button>
                </div>
              </div>
              
              <div className="product-info" style={item.featured ? { flexDirection: 'column', justifyContent: 'center', width: '50%' } : { marginTop: '1.5rem' }}>
                <div style={item.featured ? { marginBottom: '2rem' } : {}}>
                  <h3 className="product-title" style={item.featured ? { fontSize: '2rem', marginBottom: '1rem' } : {}}>{item.title}</h3>
                  <p className="product-material" style={item.featured ? { fontSize: '0.9rem', lineHeight: '1.6', textTransform: 'none', letterSpacing: 'normal' } : {}}>{item.material}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: item.featured ? 'auto' : '0' }}>
                  <span className="product-price" style={item.featured ? { fontSize: '1.25rem' } : {}}>Rs.{item.price.toLocaleString()}</span>
                  {item.featured && <button className="btn-outline" style={{ fontSize: '0.7rem', padding: '0.5rem 1rem' }} onClick={() => addToCart(item)}>Add to Bag</button>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '6rem 0', marginTop: '4rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Experience the Collection</h2>
          <p className="body-text" style={{ margin: '0 auto 2rem' }}>
            Our flagship atelier in the heart of the capital offers private viewings by appointment. Discover the weight and warmth of our signature gold in person.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-outline" onClick={() => alert('Redirecting to Concierge Booking system...')}>Book Private Viewing</button>
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Digital Lookbook</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignatureSeries;
