import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CategoriesPage from './pages/CategoriesPage';
import Checkout from './pages/Checkout'
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import { AuthContext } from './context/AuthContext';
import Search from './pages/search';
import Footer from './components/Footer';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SitemapPage from './pages/SitemapPage';
import CareersPage from './pages/CarrersPage';
import BlogPage from './pages/BlogPage';
import ApplyRedirect from './pages/ApplyRedirect';
import HelpCenter from './pages/HelpCenter';
import SizeGuidePage from "./pages/SizeGuidePage";
import OfferPage from "./pages/OfferPage";
import Whatsappbtn from "./pages/Whatsappbtn";
import './App.css'
function App() {
  
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Navbar user={user} onLogout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blank" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers/apply/:id" element={<ApplyRedirect />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/offers" element={<OfferPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/whatsapp" element={<Whatsappbtn />} />
      </Routes>
    </>
  );
}

export default App;
