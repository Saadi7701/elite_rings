import React, { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../supabase';
import { LayoutDashboard, Package, ShoppingCart, BarChart2, Plus, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const analysisData = [
  { name: 'May', revenue: 65000 },
  { name: 'Jun', revenue: 78000 },
  { name: 'Jul', revenue: 89000 },
  { name: 'Aug', revenue: 95000 },
  { name: 'Sep', revenue: 112000 },
  { name: 'Oct', revenue: 128450 },
];

const Admin = ({ onProductChange }) => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('latelier_admin_auth') === 'true'
  );
  const [passwordInput, setPasswordInput] = useState('');
  
  const [formData, setFormData] = useState({ id: null, title: '', material: '', price: 0, image: '', badge: '' });

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
      fetchOrders();
    }
  }, [isAuthenticated]);

  const fetchOrders = async () => {
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        setOrders(data || []);
      } catch (err) {
        fallbackOrderFetch();
      }
    } else {
      fallbackOrderFetch();
    }
  };

  const fallbackOrderFetch = () => {
    const local = localStorage.getItem('latelier_admin_orders');
    if (local) setOrders(JSON.parse(local));
  };

  const fetchProducts = async () => {
    setLoading(true);
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        console.error('Supabase error, falling back to local storage', err);
        fallbackLocalFetch();
      }
    } else {
      fallbackLocalFetch();
    }
    setLoading(false);
  };

  const fallbackLocalFetch = () => {
    const local = localStorage.getItem('latelier_admin_products');
    if (local) {
      setProducts(JSON.parse(local));
    } else {
      // default mock
      const mock = [
        { id: 1, title: 'The Celestial Halo', material: '18K Yellow Gold', price: 4200, image: 'https://images.unsplash.com/photo-1605100804763-247f6612d54e?auto=format&fit=crop&q=80', badge: 'Limited' }
      ];
      setProducts(mock);
      localStorage.setItem('latelier_admin_products', JSON.stringify(mock));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSupabaseConfigured) {
      if (isEditing) {
        await supabase.from('products').update({ ...formData }).eq('id', formData.id);
      } else {
        const { id, ...dataToInsert } = formData;
        await supabase.from('products').insert([dataToInsert]);
      }
      if (onProductChange) onProductChange();
      fetchProducts();
    } else {
      let updated;
      if (isEditing) {
        updated = products.map(p => p.id === formData.id ? formData : p);
      } else {
        updated = [...products, { ...formData, id: Date.now() }];
      }
      setProducts(updated);
      localStorage.setItem('latelier_admin_products', JSON.stringify(updated));
      if (onProductChange) onProductChange();
    }
    resetForm();
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      if (isSupabaseConfigured) {
        await supabase.from('products').delete().eq('id', id);
        if (onProductChange) onProductChange();
        fetchProducts();
      } else {
        const updated = products.filter(p => p.id !== id);
        setProducts(updated);
        localStorage.setItem('latelier_admin_products', JSON.stringify(updated));
        if (onProductChange) onProductChange();
      }
    }
  };

  const resetForm = () => {
    setFormData({ id: null, title: '', material: '', price: 0, image: '', badge: '' });
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result }); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'Lordsofrings047') {
      setIsAuthenticated(true);
      sessionStorage.setItem('latelier_admin_auth', 'true');
    } else {
      alert('Incorrect Password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ backgroundColor: 'white', padding: '4rem', borderRadius: '4px', textAlign: 'center', maxWidth: '400px', width: '90%' }}>
          <h1 className="h2" style={{ marginBottom: '2rem' }}>Admin Portal</h1>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Enter Password" 
              value={passwordInput} 
              onChange={(e) => setPasswordInput(e.target.value)} 
              required 
            />
            <button type="submit" className="btn btn-primary">Access Secure Area</button>
          </form>
          <Link to="/" style={{ display: 'block', marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>&larr; Return to Store</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="h2" style={{ color: 'white', marginBottom: '3rem', fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>L'Atelier Admin</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button className={`admin-sidebar-link ${activeTab === 'analysis' ? 'active' : ''}`} onClick={() => setActiveTab('analysis')} style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', textAlign: 'left' }}>
            <BarChart2 size={18} /> Analysis
          </button>
          <button className={`admin-sidebar-link ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')} style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', textAlign: 'left' }}>
            <Package size={18} /> Products
          </button>
          <button className={`admin-sidebar-link ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')} style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', textAlign: 'left' }}>
            <ShoppingCart size={18} /> Orders
          </button>
          <Link to="/" className="admin-sidebar-link" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
            <LayoutDashboard size={18} /> Back to Store
          </Link>
        </nav>
      </aside>

      <main className="admin-content">
        {activeTab === 'products' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h1 className="h2">Product Management</h1>
            </div>

            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', marginBottom: '3rem', borderRadius: '4px' }}>
              <h3 className="h3" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{isEditing ? 'Edit Product' : 'Add New Product'}</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" className="form-input" placeholder="Product Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                  <input type="text" className="form-input" placeholder="Material (e.g. 18K Gold)" value={formData.material} onChange={e => setFormData({...formData, material: e.target.value})} required />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                  <input type="number" className="form-input" placeholder="Price (€)" value={formData.price || ''} onChange={e => setFormData({...formData, price: Number(e.target.value)})} required />
                  <input type="text" className="form-input" placeholder="Badge (e.g. Limited)" value={formData.badge} onChange={e => setFormData({...formData, badge: e.target.value})} />
                  <div style={{ position: 'relative' }}>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} id="image-upload" />
                    <label htmlFor="image-upload" className="btn btn-outline" style={{ display: 'flex', width: '100%', justifyContent: 'center', height: '100%' }}>
                      {formData.image ? 'Image Selected (Click to change)' : 'Upload Local Image'}
                    </label>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button type="submit" className="btn btn-primary"><Plus size={16} style={{ marginRight: '0.5rem' }} /> {isEditing ? 'Update Product' : 'Save Product'}</button>
                  {isEditing && <button type="button" className="btn btn-outline" onClick={resetForm}>Cancel</button>}
                </div>
              </form>
            </div>

            <table className="data-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title / Material</th>
                  <th>Price</th>
                  <th>Badge</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="5">Loading...</td></tr>
                ) : (
                  products.map(product => (
                    <tr key={product.id}>
                      <td><img src={product.image} alt={product.title} style={{ width: '40px', height: '40px', objectFit: 'cover' }} /></td>
                      <td>
                        <div style={{ fontWeight: 500 }}>{product.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{product.material}</div>
                      </td>
                      <td>€{product.price}</td>
                      <td>{product.badge && <span className="product-badge" style={{ position: 'relative', top: 0, left: 0 }}>{product.badge}</span>}</td>
                      <td>
                        <button onClick={() => { setFormData(product); setIsEditing(true); }} style={{ marginRight: '1rem', color: 'var(--text-secondary)' }}><Edit2 size={16} /></button>
                        <button onClick={() => handleDelete(product.id)} style={{ color: 'var(--error)' }}><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'analysis' && (
          <div>
            <h1 className="h2" style={{ marginBottom: '2rem' }}>Analytics Dashboard</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--gold-primary)' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Total Revenue</span>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginTop: '0.5rem' }}>€128,450</div>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--gold-primary)' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Orders This Month</span>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginTop: '0.5rem' }}>42</div>
              </div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--gold-primary)' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Avg. Order Value</span>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginTop: '0.5rem' }}>€3,058</div>
              </div>
            </div>
            <div style={{ height: '400px', backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: '4px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analysisData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
                    tickFormatter={(value) => `€${value/1000}k`}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                    contentStyle={{ border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', borderRadius: '4px', fontSize: '13px' }}
                    formatter={(value) => [`€${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Bar dataKey="revenue" fill="var(--gold-primary)" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div>
            <h1 className="h2" style={{ marginBottom: '2rem' }}>Order Management</h1>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr><td colSpan="6">No orders found.</td></tr>
                ) : (
                  orders.map(order => (
                    <tr key={order.order_number}>
                      <td>
                        {order.items && order.items[0] && (
                          <img src={order.items[0].image} alt="product" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                        )}
                      </td>
                      <td><code style={{ fontSize: '0.8rem' }}>{order.order_number}</code></td>
                      <td>
                        <div style={{ fontWeight: 500 }}>{order.customer_name}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{order.address}</div>
                      </td>
                      <td>{new Date(order.created_at).toLocaleDateString()}</td>
                      <td>€{order.total_price.toLocaleString()}</td>
                      <td>
                        <span style={{ 
                          color: order.status === 'Processing' ? 'var(--gold-dark)' : 'var(--success)', 
                          fontSize: '0.7rem', 
                          fontWeight: 600,
                          textTransform: 'uppercase' 
                        }}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
