import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = ({ addToCart, products }) => {
  const staticProducts = [
    { id: "s1", title: "Aurelian Halo", material: "Artificial Gold & Crystals", price: 2500, image: "/images/aurelian_halo.jpg", badge: "Static" },
    { id: "s2", title: "Golden Signet", material: "Gold Plated Surface", price: 1800, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80", badge: "Static" },
    { id: "s3", title: "Silver Band", material: "Silver Toned Alloy", price: 1450, image: "/images/silver_band.jpg", badge: "Static" }
  ];

  const allProducts = [...staticProducts, ...products];
  const featuredProducts = allProducts.length > 0 ? allProducts.slice(0, 6) : [];

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
          <span className="hero-subtitle">The Eastern Heritage Collection</span>
          <h1 className="h1 hero-title">Eastern<br/><i>Grace.</i></h1>
          <p className="hero-desc">
            Discover a symphony of hand-forged gold and precious stones, curated with the deep soul and artisan mastery of Asian heritage.
          </p>
          <div className="hero-actions">
            <Link to="/collections" className="btn btn-primary">Explore Collection</Link>
          </div>
        </div>

        {/* Italian style Powered By credits */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          right: '5%',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '0.8rem',
          letterSpacing: '0.05em',
          zIndex: 2,
          pointerEvents: 'none'
        }}>
          Powered By BlueMoon
        </div>
      </section>

      {/* Category Selection Section */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Shop by Category</h2>
          <p className="body-text">Select a category to explore our curated pieces.</p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '4rem', 
          flexWrap: 'wrap'
        }}>
          {/* Rings Category */}
          <Link to="/rings" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                width: 'min(300px, 80vw)',
                aspectRatio: '1/1',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-dark)'
              }}
            >
              <img 
                src="/images/aurelian_halo.jpg" 
                alt="Rings Collection" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 10px'
              }}>
                <h3 style={{ 
                  color: 'white', 
                  letterSpacing: '0.15em', 
                  fontSize: 'clamp(1rem, 5vw, 1.5rem)', 
                  fontFamily: 'var(--font-serif)',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>RINGS</h3>
              </div>
            </motion.div>
          </Link>

          {/* Necklaces Category */}
          <Link to="/necklaces" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                width: 'min(300px, 80vw)',
                aspectRatio: '1/1',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-dark)'
              }}
            >
              <img 
                src="/images/necklace_1.webp" 
                alt="Necklaces Collection" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 10px'
              }}>
                <h3 style={{ 
                  color: 'white', 
                  letterSpacing: '0.15em', 
                  fontSize: 'clamp(1rem, 5vw, 1.5rem)', 
                  fontFamily: 'var(--font-serif)',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>NECKLACES</h3>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;
