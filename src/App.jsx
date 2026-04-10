import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import SignatureSeries from './pages/SignatureSeries';
import CategoryPage from './pages/CategoryPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Bespoke from './pages/Bespoke';
import Heritage from './pages/Heritage';
import Journal from './pages/Journal';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';

import { supabase, isSupabaseConfigured } from './supabase';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        fallbackLocalFetch();
      }
    } else {
      fallbackLocalFetch();
    }
  };

  const fallbackLocalFetch = () => {
    const local = localStorage.getItem('latelier_admin_products');
    if (local) {
      setProducts(JSON.parse(local));
    } else {
      // dynamic mock fallback if empty
      const mock = [
        { id: "h1", title: "Aurelian Halo", material: "Artificial Gold & Crystals", price: 2500, image: "/images/aurelian_halo.jpg", badge: "Static" },
        { id: "h2", title: "Golden Signet", material: "Gold Plated Surface", price: 1800, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80", badge: "Static" },
        { id: "h3", title: "Silver Band", material: "Silver Toned Alloy", price: 1450, image: "/images/silver_band.jpg", badge: "Static" },
      ];
      setProducts(mock);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Load local cart if any
    const localCart = localStorage.getItem('latelier_cart');
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  const addToCart = (product) => {
    let updatedCart;
    const existingIdx = cart.findIndex(p => p.id === product.id);
    if (existingIdx !== -1) {
      updatedCart = [...cart];
      updatedCart[existingIdx].quantity += 1;
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem('latelier_cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, idx) => idx !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('latelier_cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (indexToUpdate, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(indexToUpdate);
      return;
    }
    const updatedCart = [...cart];
    updatedCart[indexToUpdate].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem('latelier_cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('latelier_cart');
  };

  return (
    <div className="app-container">
      {!location.pathname.startsWith('/admin') && <Navbar cartCount={cart.reduce((sum, item) => sum + (item.quantity || 1), 0)} />}
      
      {!isSupabaseConfigured && location.pathname === '/admin' && (
        <div style={{ padding: '10px', background: 'var(--error)', color: 'white', textAlign: 'center', fontSize: '12px' }}>
          Notice: Supabase is not fully configured yet. Running with mocked local state/memory fallback. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env to use real database.
        </div>
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} products={products} />} />
          <Route path="/collections" element={<SignatureSeries addToCart={addToCart} products={products} />} />
          <Route path="/rings" element={<CategoryPage addToCart={addToCart} products={products} category="Rings" />} />
          <Route path="/necklaces" element={<CategoryPage addToCart={addToCart} products={products} category="Necklaces" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bespoke" element={<Bespoke />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/journal" element={<Journal />} />
          
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
          <Route path="/admin/*" element={<Admin onProductChange={fetchProducts} />} />
        </Routes>
      </main>

      {!location.pathname.startsWith('/admin') && <Footer />}
    </div>
  );
}

export default App;
