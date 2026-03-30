import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = ({ addToCart, products }) => {
  const featuredProducts = products && products.length > 0 ? products.slice(0, 3) : [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=2000" 
          alt="Aurelian Grace Collection" 
          className="hero-bg" 
        />
        <div className="hero-content">
          <span className="hero-subtitle">The Inaugural Collection</span>
          <h1 className="h1 hero-title">Aurelian<br/><i>Grace.</i></h1>
          <p className="hero-desc">
            Discover a symphony of hand-carved gold and ethically sourced diamonds, curated for the modern collector of fine artifacts.
          </p>
          <div className="hero-actions">
            <Link to="/collections" className="btn btn-primary">Explore Collection</Link>
            <Link to="/journal" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>View Film</Link>
          </div>
        </div>
      </section>

      {/* New Artifacts Section */}
      <section className="section container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h2 className="h2" style={{ marginBottom: '1rem' }}>New Artifacts</h2>
            <p className="body-text">Each piece at L'Atelier is a dialogue between traditional craftsmanship and contemporary silhouette.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-outline" style={{ padding: '0.8rem', borderColor: 'var(--border-dark)' }}>
              <ArrowLeft size={18} />
            </button>
            <button className="btn-outline" style={{ padding: '0.8rem', borderColor: 'var(--border-dark)' }}>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="product-grid">
          {/* Hardcoded New Artifacts with local images */}
          <motion.div className="product-card" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <div className="product-image-wrap">
              <span className="product-badge">New Artifact</span>
              <img src="/images/ring1.jpg" alt="Aurelian Crystal Halo" className="product-image" loading="lazy" />
            </div>
            <div className="product-info">
              <div>
                <h3 className="product-title">Aurelian Crystal Halo</h3>
                <p className="product-material">Premium Artificial Alloy & Crystals</p>
              </div>
              <span className="product-price">Rs.2,500</span>
            </div>
          </motion.div>

          <motion.div className="product-card" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <div className="product-image-wrap">
              <span className="product-badge">Featured</span>
              <img src="/images/ring2.jpg" alt="Golden Signet Crest" className="product-image" loading="lazy" />
            </div>
            <div className="product-info">
              <div>
                <h3 className="product-title">Golden Signet Crest</h3>
                <p className="product-material">Gold Plated Polished Surface</p>
              </div>
              <span className="product-price">Rs.1,800</span>
            </div>
          </motion.div>

          <motion.div className="product-card" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <div className="product-image-wrap">
              <span className="product-badge">Elegant</span>
              <img src="/images/ring3.jpg" alt="Midnight Silver Band" className="product-image" loading="lazy" />
            </div>
            <div className="product-info">
              <div>
                <h3 className="product-title">Midnight Silver Band</h3>
                <p className="product-material">Silver Toned Artificial Alloy</p>
              </div>
              <span className="product-price">Rs.1,450</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="section" style={{ padding: 0 }}>
        <div className="heritage-split">
          <img 
            src="/images/craftsman.jpg" 
            alt="Master Jeweler at Work" 
            className="heritage-image" 
          />
          <div className="heritage-content">
            <span className="subtitle" style={{ marginBottom: '1.5rem', display: 'block' }}>Our Craft</span>
            <h2 className="h2" style={{ marginBottom: '2rem' }}>The Heritage <br/>of Precision.</h2>
            <p className="body-text" style={{ marginBottom: '3rem' }}>
              Every piece is forged by hand in our Lahore-based atelier, utilizing generations of craftsmanship combined with modern metallurgy. We believe jewelry is not an accessory, but a legacy.
            </p>
            <Link to="/heritage" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
              Discover the Atelier <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
