import { useState } from 'react';
import DesignCard from '../components/shared/DesignCard';

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const designs = [
    { title: 'Elegance', description: 'Sophisticated designs', category: 'formal' },
    { title: 'Street Style', description: 'Urban fashion', category: 'casual' },
    { title: 'Evening Wear', description: 'Glamorous pieces', category: 'formal' },
    { title: 'Casual Comfort', description: 'Everyday wear', category: 'casual' },
    { title: 'Party Ready', description: 'Celebration style', category: 'party' },
    { title: 'Work Chic', description: 'Professional fashion', category: 'formal' },
    { title: 'Sports Luxe', description: 'Active wear', category: 'casual' },
    { title: 'Gala Collection', description: 'Red carpet ready', category: 'party' },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'formal', name: 'Formal' },
    { id: 'casual', name: 'Casual' },
    { id: 'party', name: 'Party' }
  ];

  const filteredDesigns = selectedCategory === 'all' 
    ? designs 
    : designs.filter(d => d.category === selectedCategory);

  return (
    <div className="explore-page">
      <div className="explore-header">
        <div className="container">
          <h1>Explore Collections</h1>
          <p>Discover fashion that speaks to your soul</p>
        </div>
      </div>

      <div className="container explore-container">
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Designs Grid */}
        <div className="designs-grid">
          {filteredDesigns.map((design, index) => (
            <DesignCard key={index} {...design} />
          ))}
        </div>
      </div>
    </div>
  );
}
