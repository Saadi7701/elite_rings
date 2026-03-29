import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src="/latelier_logo.png" alt="L'Atelier Logo" style={{ height: '32px', display: 'block' }} />
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', letterSpacing: '0.05em' }}>L'Atelier</span>
      </Link>
      
      <div className="nav-links">
        <Link to="/collections" className={`nav-link ${location.pathname === '/collections' ? 'active' : ''}`}>Collection</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </div>

      <div className="nav-actions">
        <button className="nav-action-btn" aria-label="Search"><Search size={20} strokeWidth={1.5} /></button>
        <button className="nav-action-btn" aria-label="Account"><User size={20} strokeWidth={1.5} /></button>
        <Link to="/cart" className="nav-action-btn" aria-label="Cart" style={{ position: 'relative' }}>
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: '-5px', right: '-8px',
              background: 'var(--gold-primary)', color: 'white',
              fontSize: '10px', width: '16px', height: '16px',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontWeight: 'bold'
            }}>
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
