import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/CategoriesPage.css';
import SizeGuideButton from './SizeGuideButton';

export default function CategoriesPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [priceSort, setPriceSort] = useState('none');
  const [ratingSort, setRatingSort] = useState('none');
  const [offerFilter, setOfferFilter] = useState('none');
  const [showAll, setShowAll] = useState(false);

  const [sizeMap, setSizeMap] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const category = query.get('category');
  const search = query.get('search');

  useEffect(() => {
    const base = '/api/v1/products';
    let url = base;
    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    } else if (search) {
      url += `?search=${encodeURIComponent(search)}`;
    }
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(Array.isArray(data) ? data : []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [category, search]);

  const normalizeCategory = (v) => (v || '').toLowerCase();

  const isFashionPage = category && normalizeCategory(category) === 'fashion';

  const applySorts = useCallback((list) => {
    let out = [...list];
    if (priceSort !== 'none') {
      out.sort((a, b) =>
        priceSort === 'asc'
          ? Number(a.price) - Number(b.price)
          : Number(b.price) - Number(a.price)
      );
    }
    if (ratingSort !== 'none') {
      out.sort((a, b) =>
        ratingSort === 'high'
          ? Number(b.rating ?? 0) - Number(a.rating ?? 0)
          : Number(a.rating ?? 0) - Number(b.rating ?? 0)
      );
    }
    return out;
  }, [priceSort, ratingSort]);

  const offerInRange = (offerValue, filter) => {
    const n = Number(offerValue ?? 0);
    switch (filter) {
      case '0-5':
        return n >= 0 && n < 5;
      case '5-10':
        return n >= 5 && n < 10;
      case '10-15':
        return n >= 10 && n < 15;
      case '15-25':
        return n >= 15 && n < 25;
      case '25+':
        return n >= 25;
      case 'none':
      default:
        return true;
    }
  };

  const filteredSorted = useMemo(() => {
    const base = products.filter(p => offerInRange(p.offer, offerFilter));
    return applySorts(base);
  }, [products, offerFilter, applySorts]);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const isFashion = normalizeCategory(product.category) === 'fashion';
    const chosenSize = isFashion ? (sizeMap[product._id] || 'M') : undefined;

    const productKey = product._id + (chosenSize ? `_${chosenSize}` : '');
    const found = cart.find(item => (item._id + (item.size ? `_${item.size}` : '')) === productKey);

    if (found) {
      found.quantity = (found.quantity || 1) + 1;
    } else {
      cart.push({ ...product, ...(isFashion ? { size: chosenSize } : {}), quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  const handleBuyNow = (product) => {
    const isFashion = normalizeCategory(product.category) === 'fashion';
    const chosenSize = isFashion ? (sizeMap[product._id] || 'M') : undefined;
    navigate('/checkout', { state: { product: { ...product, ...(isFashion ? { size: chosenSize } : {}) } } });
  };

  const headerTitle = category
    ? `Category: ${category}`
    : `Search Results for "${search}"`;

  const visibleList = showAll ? filteredSorted : filteredSorted.slice(0, 9);

  return (
    <div className="categories-page">
      <section className="filters-bar">
        <div className="filters-header">
          <span className="filters-icon" aria-hidden="true">⚙️</span>
          <h3 className="filters-title">Filters</h3>
        </div>

        <div className="filters-row">
          <div className="filter-group">
            <label className="filter-label">Price</label>
            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
            >
              <option value="none">None</option>
              <option value="asc">Minimum to Maximum</option>
              <option value="desc">Maximum to Minimum</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort by</label>
            <select
              value={ratingSort}
              onChange={(e) => setRatingSort(e.target.value)}
            >
              <option value="none">None</option>
              <option value="high">Rating High</option>
              <option value="low">Rating Low</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Offer</label>
            <select
              value={offerFilter}
              onChange={(e) => setOfferFilter(e.target.value)}
            >
              <option value="none">None</option>
              <option value="0-5">0-5</option>
              <option value="5-10">5-10</option>
              <option value="10-15">10-15</option>
              <option value="15-25">15-25</option>
              <option value="25+">25+</option>
            </select>
          </div>
        </div>
      </section>

      <div className="deals-head">
        <h2>{headerTitle}</h2>
        {filteredSorted.length > 9 && (
          <button className="view-all" onClick={() => setShowAll(v => !v)}>
            {showAll ? 'View less' : 'View all'}
          </button>
        )}
      </div>

      {loading && <p className="categories-empty">Loading...</p>}
      {!loading && filteredSorted.length === 0 && (
        <p className="categories-empty">No products found.</p>
      )}

      <div className="categories-grid">
        {visibleList.map((prod) => {
          const isFashion = normalizeCategory(prod.category) === 'fashion';
          const selectedSize = sizeMap[prod._id] || '';

          return (
            <div key={prod._id} className="category-card">

              {prod.imageUrl && <img src={prod.imageUrl} alt={prod.name} />}
              <center>
                <h3>{prod.name}</h3>
                <p className='desc-box'>{prod.description}</p>
                <div className="card-meta">
                  <p>Price: ₹{prod.price}</p>
                  <p>Offer: {prod.offer}% off</p>
                  <p>Rating: ⭐{prod.rating}</p>
                </div>
              </center>
              <center style={{ display: "flex", justifyContent: "space-evenly" }}>
                {isFashion && (
                  <div className="size-row">
                    <label
                      htmlFor={`size-${prod._id}`}
                      className="size-label"
                      style={{ color: "white", fontSize: "20px", fontWeight: "600" }}
                    >
                      Size:
                    </label>
                    <select
                      id={`size-${prod._id}`}
                      className="size-select"
                      value={selectedSize}
                      onChange={(e) =>
                        setSizeMap((m) => ({ ...m, [prod._id]: e.target.value }))
                      }
                    >
                      <option value="" disabled>Select size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="XXXL">XXXL</option>
                    </select>
                  </div>
                )}

                {(isFashionPage || isFashion) && (
                  <div className="size-row">
                    <label
                      htmlFor={`size-guide-${prod._id}`}
                      className="size-label"
                      style={{ color: "white", fontSize: "20px", fontWeight: "600" }}
                    >
                      Size:
                    </label>
                    <SizeGuideButton />
                  </div>
                )}
              </center>

              <div className="card-actions">
                <button
                  className="btn btn-cart"
                  onClick={() =>
                    handleAddToCart({
                      ...prod,
                      ...(isFashion ? { size: selectedSize || 'M' } : {}),
                    })
                  }
                >
                  Add to cart
                </button>
                <button
                  className="btn btn-buy"
                  onClick={() =>
                    handleBuyNow({
                      ...prod,
                      ...(isFashion ? { size: selectedSize || 'M' } : {}),
                    })
                  }
                >
                  Buy now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
