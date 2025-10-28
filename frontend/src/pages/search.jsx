import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/search.css';

const categories = [
  { name: 'Home Accessories', slug: 'home-accessories' },
  { name: 'Sports', slug: 'sports' },
  { name: 'Bags', slug: 'bags' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Medicine', slug: 'medicine'},
  { name: 'Homeopathy', slug: 'homeopathy'}
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function BlankPage() {
  const query = useQuery();
  const searchTerm = query.get('search')?.toLowerCase() || '';
  const categoriesParam = query.get('categories');
  const allowedCategories = categoriesParam ? categoriesParam.split(',') : null;
  const navigate =useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      setProducts([]);
      return;
    }
    setLoading(true);
    setError(null);

  
    const base = '/api/v1/products';
    const url = categoriesParam
      ? `${base}?search=${encodeURIComponent(searchTerm)}&categories=${encodeURIComponent(categoriesParam)}`
      : `${base}?search=${encodeURIComponent(searchTerm)}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products from server');
        return res.json();
      })
      .then(data => {
        
        const filtered = Array.isArray(allowedCategories)
          ? data.filter(p => allowedCategories.includes(p.category))
          : data;
        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [searchTerm, categoriesParam, allowedCategories]);

  const grouped = categories
    .map(cat => ({
      category: cat,
      items: products.filter(p => p.category === cat.slug),
    }))
    .filter(group => group.items.length > 0);

     const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const found = cart.find(item => item._id === product._id);
    if (found) {
      found.quantity = (found.quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  const handleBuyNow = (product) => {
    navigate('/checkout', { state: { product } });
  };


  return (
    <div className="blank-page">
      {loading && <p>Loading products...</p>}
      {error && <p className="error-msg">{error}</p>}
      {!loading && !error && grouped.length === 0 && (
        <p className='empty-state'>No products found for "{searchTerm}" in selected categories.</p>
      )}
      {!loading && !error && grouped.map(({ category, items }) => (
        <section key={category.slug} className="category-section">
          <h2 style={{transform:"translateX(70px)"}}>{category.name}</h2>
          <div className="products-grid">
            {items.map(product => (
              <div key={product._id || product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <center>
                  <h3>{product.name}</h3>
                  <p className='desc-box'>{product.description}</p><br />
                  <p>Price: ₹{product.price} (Offer: {product.offer}%)</p>
                  <p>Rating: ⭐{product.rating} </p>
                  <p>Stock: {product.stock}</p>
                </center>
                
                <div className="btn-row">
                <button className="btn btn-cart" onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
                <button className="btn btn-buy" onClick={() => handleBuyNow(product)}>
                  Buy now
                </button>
              </div>
             </div>))}
          </div>
        </section>))}
    </div>);
}
