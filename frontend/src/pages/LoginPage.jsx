import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link,useLocation } from 'react-router-dom';
import './login.css';

export default function LoginPage() {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const redirectTo = location.state?.redirectTo;
  const payload    = location.state?.payload;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await login(email, password);

      if (redirectTo) {
        if (redirectTo === '/checkout' && payload?.product) {
          navigate('/checkout', { state: { product: payload.product, quantity: payload.quantity || 1 } });
        } else {
          navigate(redirectTo);
        }
      } else {
        navigate('/');
      }
    } catch (error) {
      alert(error?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to continue shopping</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
         
            <div className="input-wrap">
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                inputMode="email"
              />
            </div>
          </div>

          <div className="field">
          
            <div className="input-wrap">
              <input
                id="password"
                type={showPwd ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="show-pwd-btn"
                onClick={() => setShowPwd((prev) => !prev)}
                tabIndex={-1}
                aria-label={showPwd ? "Hide password" : "Show password"}
                style={{ marginLeft: '8px', cursor: 'pointer', background: 'none', border: 'none' }}
              >
                {showPwd ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button className="primary-btn" type="submit" disabled={loading}>
            <span className="btn-icon" aria-hidden="true">➜</span>
            {loading ? 'Signing In…' : 'Login'}
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account?{' '}
          <Link to="/signup" className="link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
