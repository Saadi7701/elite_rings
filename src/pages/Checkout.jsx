import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, isSupabaseConfigured } from '../supabase';
import { CheckCircle } from 'lucide-react';

const Checkout = ({ cart, clearCart }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', city: '', postal: '', country: 'Pakistan'
  });
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderNum, setOrderNum] = useState('');
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const taxes = 0; // Simplified
  const shipping = 0; // Complimentary COD
  const total = subtotal;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    const newOrderNum = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const orderData = {
      order_number: newOrderNum,
      customer_name: `${formData.firstName} ${formData.lastName}`,
      customer_email: 'pending@example.com', // simplified
      address: `${formData.address}, ${formData.city}, ${formData.postal}, ${formData.country}`,
      items: cart,
      total_price: total,
      status: 'Processing',
      created_at: new Date().toISOString()
    };

    if (isSupabaseConfigured) {
      try {
        await supabase.from('orders').insert([orderData]);
      } catch (err) {
        console.error('Supabase order error', err);
        fallbackOrderSave(orderData);
      }
    } else {
      fallbackOrderSave(orderData);
    }

    setOrderNum(newOrderNum);
    setIsOrdered(true);
    clearCart();
  };

  const fallbackOrderSave = (data) => {
    const local = localStorage.getItem('latelier_admin_orders');
    const existing = local ? JSON.parse(local) : [];
    localStorage.setItem('latelier_admin_orders', JSON.stringify([data, ...existing]));
  };

  if (isOrdered) {
    return (
      <motion.div 
        className="container" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        style={{ padding: '8rem 0', textAlign: 'center' }}
      >
        <CheckCircle size={80} color="var(--success)" style={{ marginBottom: '2rem' }} />
        <h1 className="h1">Order Placed Successfully</h1>
        <p className="body-text" style={{ margin: '1.5rem auto 3rem' }}>
          Your curation is being prepared. Order <strong>{orderNum}</strong> has been received and 
          confirmed via your digital concierge.
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/collections')}>Return to Collection</button>
      </motion.div>
    );
  }

  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '4rem 0' }}>
      <div className="page-header" style={{ marginBottom: '3rem', textAlign: 'left' }}>
        <h1 className="h1" style={{ fontSize: '3rem' }}>Checkout</h1>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          <span style={{ color: 'var(--gold-dark)', borderBottom: '1px solid var(--gold-dark)', paddingBottom: '0.5rem' }}>01 Shipping</span>
          <span style={{ color: 'var(--text-light)' }}>02 Delivery</span>
          <span style={{ color: 'var(--text-light)' }}>03 Payment</span>
        </div>
      </div>

      <div className="cart-layout" style={{ gap: '6rem' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input type="text" className="form-input" placeholder="Ahmed" required onChange={e => setFormData({...formData, firstName: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-input" placeholder="Khan" required onChange={e => setFormData({...formData, lastName: e.target.value})} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Address Line 1</label>
            <input type="text" className="form-input" placeholder="Hali Road" required onChange={e => setFormData({...formData, address: e.target.value})} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">City</label>
              <input type="text" className="form-input" placeholder="Lahore" required onChange={e => setFormData({...formData, city: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Postal Code</label>
              <input type="text" className="form-input" placeholder="54000" required onChange={e => setFormData({...formData, postal: e.target.value})} />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '4rem' }}>
            <label className="form-label">Full Address / Location</label>
            <input type="text" className="form-input" placeholder="e.g. 45-C Hali Road, Gulberg III, Lahore" required onChange={e => setFormData({...formData, address: e.target.value})} />
          </div>

          <h3 className="h3" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Payment & Delivery</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', border: '1px solid var(--gold-dark)', backgroundColor: 'var(--bg-secondary)', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <input type="radio" name="payment" defaultChecked style={{ accentColor: 'var(--gold-dark)' }} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Cash on Delivery</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pay upon receipt of your curation</span>
                </div>
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Complimentary</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '1.5rem 3rem', width: '100%', fontSize: '0.9rem' }} disabled={cart.length === 0}>
            Place Order (Rs.{total.toLocaleString()})
          </button>
        </form>

        <div>
          <div className="cart-summary">
            <h2 className="h2" style={{ fontSize: '1.25rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Order Summary</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              {cart.slice(0, 3).map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>QTY: {item.quantity || 1}</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Rs.{(item.price * (item.quantity || 1)).toLocaleString()}</p>
                  </div>
                </div>
              ))}
              {cart.length > 3 && <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>+ {cart.length - 3} more items</p>}
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>Rs.{subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span style={{ color: 'var(--text-secondary)' }}>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="summary-row total">
              <span style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total</span>
              <span>Rs.{total.toLocaleString()}</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', marginTop: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Concierge Service</h3>
              <p className="body-text" style={{ fontSize: '0.8rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                Each Atelier piece is shipped with our signature velvet box and a certificate of authenticity from our master curators.
              </p>
              <span style={{ fontSize: '0.7rem', color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', borderBottom: '1px solid var(--gold-dark)' }} onClick={() => alert('Opening Concierge Chat...')}>Contact Curator</span>
            </div>
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" alt="Curator" style={{ width: '100px', height: '120px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
