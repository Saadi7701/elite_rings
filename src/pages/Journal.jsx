import React from 'react';
import { motion } from 'framer-motion';

const Journal = () => {
  const articles = [
    { id: 1, title: 'The Anatomy of a Perfect Diamond Cut', date: 'October 14, 2024', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80' },
    { id: 2, title: 'Inside Our Parisian Foundry', date: 'September 28, 2024', image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80' },
    { id: 3, title: 'The Future of Sustainable Gold Sourcing', date: 'August 12, 2024', image: 'https://images.unsplash.com/photo-1620656798359-fd361c8d30d9?auto=format&fit=crop&q=80' }
  ];

  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '6rem 0' }}>
      <div className="page-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="h1">The Journal</h1>
        <p className="body-text" style={{ margin: '1rem auto' }}>Insights, stories, and the craftsmanship ethos behind L'Atelier.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
        {articles.map(article => (
          <div key={article.id} style={{ cursor: 'pointer' }}>
            <img src={article.image} alt={article.title} style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '1.5rem' }} />
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>{article.date}</span>
            <h3 className="h3" style={{ fontSize: '1.25rem', marginTop: '0.5rem', fontFamily: 'var(--font-serif)' }}>{article.title}</h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Journal;
