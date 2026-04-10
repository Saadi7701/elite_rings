import React from 'react';
import { motion } from 'framer-motion';

const SignatureSeries = ({ addToCart, products }) => {
  const staticProducts = [
    // Rings
    { id: "sr1", title: "Lotus Band", material: "Premium Gold Plated & Ruby Glass", price: 2500, image: "/images/ring_1.jpg", badge: "Signature" },
    { id: "sr2", title: "Midnight Solitaire", material: "Black Zirconia & Silver Polish", price: 1800, image: "/images/ring_2.jpg" },
    { id: "sr3", title: "Unity Knot", material: "Rose Gold Tone Alloy", price: 1500, image: "/images/ring_3.jpg" },
    { id: "sr4", title: "Crimson Halo", material: "Red Zircon & Gold Polish", price: 2200, image: "/images/ring_4.jpg" },
    
    // Necklaces
    { id: "sn1", title: "Celestial Droplet", material: "Blue Crystal & Rhodium Polish", price: 3500, image: "/images/necklace_1.webp", badge: "Best Seller" },
    { id: "sn2", title: "Imperial Silk", material: "Emerald Toned Zircon & Gold Polish", price: 4200, image: "/images/necklace_2.jpg" },
    { id: "sn3", title: "Pearl of the Orient", material: "Synthetic South Sea Pearls", price: 2800, image: "/images/necklace_3.jpg" },
    { id: "sn4", title: "Golden Weaver", material: "Artistic Gold Toned Mesh", price: 1200, image: "/images/necklace_4.jpg" }
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

      </div>
    </motion.div>
  );
};

export default SignatureSeries;
