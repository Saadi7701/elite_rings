import React from 'react';
import { motion } from 'framer-motion';

const CategoryPage = ({ addToCart, products, category }) => {
  const staticProducts = [
    // Rings
    { id: "sr1", category: "Rings", title: "Lotus Band", material: "18K Gold & Rubies", price: 85000, image: "https://images.unsplash.com/photo-1605100804763-247f6612d54e?auto=format&fit=crop&q=80&w=800", badge: "Signature" },
    { id: "sr2", category: "Rings", title: "Midnight Solitaire", material: "Black Diamond & Platinum", price: 120000, image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800" },
    { id: "sr3", category: "Rings", title: "Unity Knot", material: "Rose Gold Weaver", price: 45000, image: "https://images.unsplash.com/photo-1620656798359-fd361c8d30d9?auto=format&fit=crop&q=80&w=800" },
    
    // Necklaces
    { id: "sn1", category: "Necklaces", title: "Celestial Droplet", material: "Sapphire & White Gold", price: 155000, image: "https://images.unsplash.com/photo-1599643478524-fb965191542f?auto=format&fit=crop&q=80&w=800", badge: "Heirloom" },
    { id: "sn2", category: "Necklaces", title: "Imperial Silk", material: "Emerald & Gold Choker", price: 210000, image: "https://images.unsplash.com/photo-1611085507273-03aa044957e8?auto=format&fit=crop&q=80&w=800" },
    { id: "sn3", category: "Necklaces", title: "Pearl of the Orient", material: "South Sea Pearls", price: 95000, image: "https://images.unsplash.com/photo-1599643477341-2b638c41460a?auto=format&fit=crop&q=80&w=800" },
    { id: "sn4", category: "Necklaces", title: "Golden Weaver", material: "24K Foil Detail", price: 35000, image: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?auto=format&fit=crop&q=80&w=800" }
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
