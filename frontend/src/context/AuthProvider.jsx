// src/context/AuthProvider.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) 
      {
        setUser({ loggedIn: true });
      }}, []);

  const login = async (email, password) => {
    const { data } = await axios.post('/api/v1/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  const signup = async (username, email, password) => {
    const { data } = await axios.post('/api/v1/auth/signup', { username, email, password });
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
