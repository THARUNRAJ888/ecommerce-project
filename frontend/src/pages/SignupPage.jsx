import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './signup.css';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm]   = useState('');
  const [loading, setLoading]   = useState(false);

  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

 
  const redirectTo = location.state?.redirectTo;
  const payload    = location.state?.payload;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await signup(username, email, password);

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
      alert(error?.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };


  return (
    <center>
      <div className="page white-bg">
      <div className="card">
        <h1 className="title">Create Account</h1>
        <p className="subtitle">Join us today!</p>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <input
              required
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="field">
            
            <input
              required
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              inputMode="email"
            />
          </div>

          <div className="field">
            <input
              required
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <div className="field">
            <input
              required
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="cta" disabled={loading}>
            <span className="btn-icon" aria-hidden="true">➜</span>
            {loading ? 'Creating...' : 'Signup'}
          </button>
        </form>

        <p className="footer">
          Already have an account? <Link to="/login" className="link">Login</Link>
        </p>
      </div>
    </div>

    </center>
      );
}
