import React, { useState, useEffect } from 'react';

const Blank = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState('all');

  // Fetch all products on load
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data);
        setDisplayedProducts(data); // Initially show all
      });

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  // Filter products by category
  const filterByCategory = (category) => {
    setSelected(category);
    if (category === 'all') {
      setDisplayedProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.category === category);
      setDisplayedProducts(filtered);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 All Products + Category Filter</h2>

      {/* Category Buttons */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={() => filterByCategory('all')}
          style={{
            padding: '10px',
            backgroundColor: selected === 'all' ? '#28a745' : '#888',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => filterByCategory(cat)}
            style={{
              padding: '10px',
              backgroundColor: selected === cat ? '#28a745' : '#888',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              width: '200px',
              padding: '10px',
              textAlign: 'center'
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '150px', objectFit: 'contain' }}
            />
            <h4 style={{ fontSize: '14px' }}>{product.title}</h4>
            <p><strong>₹ {product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blank;
