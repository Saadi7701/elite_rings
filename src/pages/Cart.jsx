import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="page-header" style={{ padding: '4rem 0 2rem' }}>
        <h1 className="h1">Your Selection</h1>
        <span className="subtitle" style={{ display: 'block', marginTop: '1rem' }}>
          {totalItems} {totalItems === 1 ? 'Item' : 'Items'} in your curated bag
        </span>
      </div>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '6rem 0' }}>
          <p className="body-text" style={{ margin: '0 auto 2rem' }}>Your selection is currently empty.</p>
          <Link to="/collections" className="btn btn-outline">Discover the Collection</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div>
            {cart.map((item, index) => (
              <motion.div 
                key={index} 
                className="cart-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={item.image} alt={item.title} className="cart-item-img" />
                
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 className="h3" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p className="body-text" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>{item.material}</p>
                  <span className="subtitle" style={{ fontSize: '0.65rem' }}>Size: 52 (EU)</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', padding: '1rem 0' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Rs.{(item.price * (item.quantity || 1)).toLocaleString()}</span>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.5rem' }}>
                      <button onClick={() => updateQuantity(index, (item.quantity || 1) - 1)} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>-</button>
                      <span style={{ fontSize: '0.9rem' }}>{item.quantity || 1}</span>
                      <button onClick={() => updateQuantity(index, (item.quantity || 1) + 1)} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>+</button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(index)}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <div className="cart-summary">
              <h2 className="h2" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Order Summary</h2>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>€{subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span style={{ color: 'var(--gold-dark)' }}>Complimentary</span>
              </div>
              <div className="summary-row">
                <span>Insurance</span>
                <span style={{ color: 'var(--gold-dark)' }}>Complimentary</span>
              </div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>€{subtotal.toLocaleString()}</span>
              </div>
              
              <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
                Proceed to Checkout
              </Link>

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid var(--gold-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}>✓</div>
                  Secure Encrypted Payment
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid var(--gold-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}>✓</div>
                  White-Glove Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
