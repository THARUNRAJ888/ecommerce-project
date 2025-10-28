import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const categories = [
  { name: 'Home Accessories', slug: 'home-accessories' },
  { name: 'Sports', slug: 'sports' },
  { name: 'Bags', slug: 'bags' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Fashion', slug: 'fashion' }
];

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const catsRef = useRef(null);

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/blank?search=${encodeURIComponent(trimmed)}`);
      setSearchTerm('');
      setMobileOpen(false);
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (catsRef.current && !catsRef.current.contains(e.target)) {
        setCatsOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const onCatsKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setCatsOpen((v) => !v);
    }
    if (e.key === 'Escape') setCatsOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <div className="navbar-left">
        <Link to="/" className="logo">Get-Roost</Link>
      </div>

      <div className="mobile-search-bar">
        <input
          type="text"
          className="mobile-search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          aria-label="Search products"
        />
        <button className="mobile-search-btn" onClick={handleSearch}>Search</button>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          aria-label="Search products"
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <div className="navbar-right">
        <div className="nav-list" role="menubar">
          <button className="nav-link btn-link" onClick={() => navigate('/')} role="menuitem">
            Home
          </button>
          <button className="nav-link btn-link" onClick={() => navigate('/about')} role="menuitem">
            About
          </button>
          <button className="nav-link btn-link" onClick={() => navigate('/contact')} role="menuitem">
            Contact
          </button>
          <div
            className="dropdown"
            ref={catsRef}
            onMouseEnter={() => setCatsOpen(true)}
            onMouseLeave={() => setCatsOpen(false)}
          >
            <button
              className="nav-link dropbtn"
              aria-haspopup="true"
              aria-expanded={catsOpen}
              onKeyDown={onCatsKeyDown}
              onFocus={() => setCatsOpen(true)}
            >
              Categories
            </button>

            <div className={`dropdown-content ${catsOpen ? 'show' : ''}`} role="menu">
              {categories.map(cat => (
                <div key={cat.slug} className="dropdown-item">
                  <button
                    className="dropdown-button"
                    onClick={() => navigate(`/categories?category=${encodeURIComponent(cat.slug)}`)}
                    role="menuitem"
                  >
                    {cat.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dots-menu-wrapper">
          <button className="dots-menu" aria-label="More options">⋮</button>
          <div className="dots-menu-content">
            {isLoggedIn ? (
              <>
                <Link to="/cart">Cart</Link>
                <Link to="/orders">Order</Link>
                <button
                  onClick={handleLogout}
                  onMouseEnter={(e) => (e.target.style.color = 'orange')}
                  onMouseLeave={(e) => (e.target.style.color = 'white')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '22px',
                    width: '100%',
                    fontWeight: 'bold',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>

        <button
          className="hamburger"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-links">
          <button className="mobile-link" onClick={() => { navigate('/'); setMobileOpen(false); }}>Home</button>
          <button className="mobile-link" onClick={() => { navigate('/about'); setMobileOpen(false); }}>About</button>
          <button className="mobile-link" onClick={() => { navigate('/contact'); setMobileOpen(false); }}>Contact</button>

          <button
            className="mobile-link mobile-accordion"
            aria-expanded={mobileCatsOpen}
            onClick={() => setMobileCatsOpen(v => !v)}
          >
            Categories
            <span className={`chev ${mobileCatsOpen ? 'up' : ''}`}>▾</span>
          </button>
          <div className={`mobile-accordion-panel ${mobileCatsOpen ? 'open' : ''}`}>
            {categories.map(cat => (
              <button
                key={cat.slug}
                className="mobile-sub-link"
                onClick={() => {
                  navigate(`/categories?category=${encodeURIComponent(cat.slug)}`);
                  setMobileOpen(false);
                  setMobileCatsOpen(false);
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mobile-auth">
          {isLoggedIn ? (
            <>
              <button className="mobile-link" onClick={() => { navigate('/cart'); setMobileOpen(false); }}>Cart</button>
              <button className="mobile-link" onClick={() => { navigate('/orders'); setMobileOpen(false); }}>Order</button>
              <button className="mobile-link" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="mobile-link" onClick={() => { navigate('/signup'); setMobileOpen(false); }}>Signup</button>
              <button className="mobile-link" onClick={() => { navigate('/login'); setMobileOpen(false); }}>Login</button>
            </>
          )}
        </div>
      </aside>

      <button
        className={`backdrop ${mobileOpen ? 'show' : ''}`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      />
    </nav>
  );
}
