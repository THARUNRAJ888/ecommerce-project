import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import BannerSlider from '../components/BannerCarousel';
import Instagrambtn from './Instagrambtn';
import Whatsappbtn from "./Whatsappbtn";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [categoryFilters] = useState(['homeopathy', 'medicine', 'sarees']);
  const [priceSort, setPriceSort] = useState('none');
  const [ratingSort, setRatingSort] = useState('none');
  const [offerFilter, setOfferFilter] = useState('none');

  const [showAllHomeopathy, setShowAllHomeopathy] = useState(false);
  const [showAllMedicine, setShowAllMedicine] = useState(false);
  const [showAllSarees, setShowAllSarees] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const [resMH, resS] = await Promise.all([
          fetch('/api/v1/products?categories=medicine,homeopathy'),
          fetch('/api/v1/products?categories=sarees'),
        ]);
        const [dataMH, dataS] = await Promise.all([resMH.json(), resS.json()]);
        const all = [
          ...(Array.isArray(dataMH) ? dataMH : []),
          ...(Array.isArray(dataS) ? dataS : []),
        ];
        setProducts(all);
      } catch (e) {
        console.error('Error fetching products:', e);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const normalizeCategory = (v) => (v || '').toLowerCase();

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

  const filterByOffer = useCallback((product) => {
    if (offerFilter === 'none') return true;
    const offer = Number(product.offer || 0);
    switch (offerFilter) {
      case '0-5':
        return offer >= 0 && offer <= 5;
      case '5-10':
        return offer > 5 && offer <= 10;
      case '10-15':
        return offer > 10 && offer <= 15;
      case '15-20':
        return offer > 15 && offer <= 20;
      case 'above-20':
        return offer > 20;
      default:
        return true;
    }
  }, [offerFilter]);

  const listHomeopathy = useMemo(() => {
    const allowed = new Set(categoryFilters.map((c) => c.toLowerCase()));
    const base = products.filter(
      (p) =>
        normalizeCategory(p.category) === 'homeopathy' &&
        allowed.has('homeopathy') &&
        filterByOffer(p)
    );
    return applySorts(base);
  }, [products, categoryFilters, applySorts, filterByOffer]);

  const listMedicine = useMemo(() => {
    const allowed = new Set(categoryFilters.map((c) => c.toLowerCase()));
    const base = products.filter(
      (p) =>
        normalizeCategory(p.category) === 'medicine' &&
        allowed.has('medicine') &&
        filterByOffer(p)
    );
    return applySorts(base);
  }, [products, categoryFilters, applySorts, filterByOffer]);

  const listSarees = useMemo(() => {
    const allowed = new Set(categoryFilters.map((c) => c.toLowerCase()));
    const base = products.filter(
      (p) =>
        normalizeCategory(p.category) === 'sarees' &&
        allowed.has('sarees') &&
        filterByOffer(p)
    );
    return applySorts(base);
  }, [products, categoryFilters, applySorts, filterByOffer]);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const found = cart.find((item) => item._id === product._id);
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

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <BannerSlider />

      <section className="filters-bar">
        <div className="filters-header">
          <span className="filters-icon" aria-hidden="true">⚙️</span>
          <h3 className="filters-title">Filters</h3>
        </div>

        <div className="filters-row">
          <div className="filter-group">
            <label className="filter-label">Price</label>
            <select value={priceSort} onChange={(e) => setPriceSort(e.target.value)}>
              <option value="none">None</option>
              <option value="asc">Minimum to Maximum</option>
              <option value="desc">Maximum to Minimum</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort by</label>
            <select value={ratingSort} onChange={(e) => setRatingSort(e.target.value)}>
              <option value="none">None</option>
              <option value="high">Rating High</option>
              <option value="low">Rating Low</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Offer</label>
            <select value={offerFilter} onChange={(e) => setOfferFilter(e.target.value)}>
              <option value="none">None</option>
              <option value="0-5">0-5%</option>
              <option value="5-10">5-10%</option>
              <option value="10-15">10-15%</option>
              <option value="15-20">15-20%</option>
              <option value="above-20">Above 20%</option>
            </select>
          </div>
        </div>
      </section>

      <section className="deals-section">
        <div className="deals-head">
          <h2>Deals on Homeopathy</h2>
          <button className="view-all" onClick={() => setShowAllHomeopathy((v) => !v)}>
            {showAllHomeopathy ? 'View less' : 'View all'}
          </button>
        </div>

        {listHomeopathy.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>No products found.</p>
        )}

        <div className="deals-cards-container">
          {(showAllHomeopathy ? listHomeopathy : listHomeopathy.slice(0, 6)).map((item) => (
            <div key={item._id} className="deals-card">
              <img src={item.imageUrl} alt={item.name} />
              <center>
                <h3>{item.name}</h3>
                <p className="desc-box" style={{ fontWeight: "600" }}>{item.description}</p>
                <p>Price: ₹{item.price}</p>
                <p>Offer: {item.offer}% Off</p>
                <p>Rating: ⭐{item.rating}</p>
              </center>

              <div className="buttons-wrapper">
                <button className="cart-item" onClick={() => handleAddToCart(item)}>
                  Add to cart
                </button>
                <button className="buy-item" onClick={() => handleBuyNow(item)}>
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="deals-section">
        <div className="deals-head">
          <h2>Deals on Medicine</h2>
          <button className="view-all" onClick={() => setShowAllMedicine((v) => !v)}>
            {showAllMedicine ? 'View less' : 'View all'}
          </button>
        </div>

        {listMedicine.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>No products found.</p>
        )}

        <div className="deals-cards-container">
          {(showAllMedicine ? listMedicine : listMedicine.slice(0, 6)).map((item) => (
            <div key={item._id} className="deals-card">
              <img src={item.imageUrl} alt={item.name} />
              <center>
                <h3>{item.name}</h3>
                <p className="desc-box">{item.description}</p>
                <p>Price: ₹{item.price}</p>
                <p>Offer: {item.offer}% Off</p>
                <p>Rating: ⭐{item.rating}</p>
              </center>

              <div className="buttons-wrapper">
                <button className="cart-item" onClick={() => handleAddToCart(item)}>
                  Add to cart
                </button>
                <button className="buy-item" onClick={() => handleBuyNow(item)}>
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Whatsappbtn />

      <section className="deals-section">
        <div className="deals-head">
          <h2>Deals on Exclusive Sarees</h2>
          <button className="view-all" onClick={() => setShowAllSarees((v) => !v)}>
            {showAllSarees ? 'View less' : 'View all'}
          </button>
        </div>

        {listSarees.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>No sarees found.</p>
        )}

        <div className="deals-cards-container">
          {(showAllSarees ? listSarees : listSarees.slice(0, 6)).map((item) => (
            <div key={item._id} className="deals-card">
              <img src={item.imageUrl} alt={item.name} className="deal-image" />

              <center>
                <h3 className="deal-title">{item.name}</h3>
                <p className="desc-box">{item.description}</p>
                <p className="deal-price">Price: ₹{item.price}</p>
                <p className="deal-offer">Offer: {item.offer}% Off</p>
                <p className="deal-rating">Rating: ⭐{item.rating}</p>
                <p className="deal-blouse">Blouse: {item.blouse}</p>
                <p className="deal-material">Material: {item.material}</p>
                <p className="deal-fabric">Fabric: {item.fabric}</p>
                <label className="attr">
                  <span className="attr-label">Size:</span>
                  <select
                    className="attr-input"
                    defaultValue="6.0"
                    onChange={(e) => {
                      item.selectedSize = e.target.value;
                    }}
                  >
                    {Array.from({ length: 15 }, (_, i) => 5.3 + i * 0.1).map((v) => (
                      <option key={v.toFixed(1)} value={v.toFixed(1)}>
                        {v.toFixed(1)} metres
                      </option>
                    ))}
                  </select>
                </label>
              </center>

              <div className="buttons-wrapper">
                <button
                  className="cart-item"
                  onClick={() => handleAddToCart({ ...item, size: item.selectedSize || "6.0" })}
                >
                  Add to cart
                </button>
                <button
                  className="buy-item"
                  onClick={() => handleBuyNow({ ...item, size: item.selectedSize || "6.0" })}
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Instagrambtn />
    </div>
  );
}
