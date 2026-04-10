import React from 'react';
import { motion } from 'framer-motion';

const CategoryPage = ({ addToCart, products, category }) => {
  const filteredProducts = products.filter(p => p.category === category);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="subtitle">Curated Selection</span>
          <h1 className="h1" style={{ marginTop: '1rem' }}>{category} Collection</h1>
          <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--border-dark)', margin: '2rem auto' }}></div>
        </div>

        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p className="body-text">No products found in this category yet. Please add some from the Admin panel.</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product, idx) => (
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
        )}
      </div>
    </motion.div>
  );
};

export default CategoryPage;
