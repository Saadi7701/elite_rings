import React from 'react';
import { motion } from 'framer-motion';

const CategoryPage = ({ addToCart, products, category }) => {
  const staticProducts = [
    // Rings
    { id: "sr1", category: "Rings", title: "Lotus Band", material: "Premium Gold Plated & Ruby Glass", price: 2500, image: "/images/ring_1.jpg", badge: "Signature" },
    { id: "sr2", category: "Rings", title: "Midnight Solitaire", material: "Black Zirconia & Silver Polish", price: 1800, image: "/images/ring_2.jpg" },
    { id: "sr3", category: "Rings", title: "Unity Knot", material: "Rose Gold Tone Alloy", price: 1500, image: "/images/ring_3.jpg" },
    { id: "sr4", category: "Rings", title: "Crimson Halo", material: "Red Zircon & Gold Polish", price: 2200, image: "/images/ring_4.jpg" },
    
    // Necklaces
    { id: "sn1", category: "Necklaces", title: "Celestial Droplet", material: "Blue Crystal & Rhodium Polish", price: 3500, image: "/images/necklace_1.webp", badge: "Best Seller" },
    { id: "sn2", category: "Necklaces", title: "Imperial Silk", material: "Emerald Toned Zircon & Gold Polish", price: 4200, image: "/images/necklace_2.jpg" },
    { id: "sn3", category: "Necklaces", title: "Pearl of the Orient", material: "Synthetic South Sea Pearls", price: 2800, image: "/images/necklace_3.jpg" },
    { id: "sn4", category: "Necklaces", title: "Golden Weaver", material: "Artistic Gold Toned Mesh", price: 1200, image: "/images/necklace_4.jpg" }
  ];

  const allCategoryProducts = [
    ...staticProducts.filter(p => p.category === category),
    ...products.filter(p => p.category === category)
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="subtitle">Curated Selection</span>
          <h1 className="h1" style={{ marginTop: '1rem' }}>{category} Collection</h1>
          <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--border-dark)', margin: '2rem auto' }}></div>
        </div>

        <div className="product-grid">
          {allCategoryProducts.map((product, idx) => (
              <motion.div 
                key={product.id} 
                className="product-card"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="product-image-wrap">
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
                  <div className="product-actions-overlay">
                    <button className="add-to-bag-btn" onClick={() => addToCart(product)}>Add to Bag</button>
                  </div>
                </div>
                
                <div className="product-info">
                  <div>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-material">{product.material}</p>
                  </div>
                  <span className="product-price">Rs.{product.price.toLocaleString()}</span>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryPage;
