import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import App from './App';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
