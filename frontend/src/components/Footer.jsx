import React from 'react';
import './Footer.css';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="footer-grid">
        <div className="footer-block">
          <h3 className="footer-heading">About Get-roost</h3>
          <div className="footer-brand-row">
            <div className="brand-mark">GR</div>
            <div>
              <p className="brand-desc">
                Trusted marketplace for medicines, homeopathy, and lifestyle picks.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-block">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="/categories?category=medicine">Medicine</a></li>
            <li><a href="/categories?category=homeopathy">Homeopathy</a></li>
            <li><a href="/categories?category=sarees">Sarees</a></li>
            <li><a href="/categories?category=electronics">Electronics</a></li>
            <li><a href="/categories?category=fashion">Fashion</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-block">
          <h3 className="footer-heading">Categories</h3>
          <ul className="footer-list">
            <li><a href="/categories?category=medicine">Medicine</a></li>
            <li><a href="/categories?category=homeopathy">Homeopathy</a></li>
            <li><a href="/categories?category=sarees">Sarees</a></li>
            <li><a href="/categories?category=electronics">Electronics</a></li>
            <li><a href="/categories?category=fashion">Fashion</a></li>
          </ul>
        </div>
        <div className="footer-block">
          <h3 className="footer-heading">Join Our Newsletter</h3>
          <p className="newsletter-tag">Subscribe for exclusive deals and curated picks.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for subscribing!');
            }}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter-hint">No spam. Unsubscribe any time.</p>
        </div>
      </div>

      <div className="footer-bottom-grid">
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy</a>
          <span>•</span>
          <a href="/terms">Terms</a>
          <span>•</span>
          <a href="/sitemap">Sitemap</a>
          <span>•</span>
          <a href="/help">Help Center</a>
        </div>
        <div className="footer-copyright">
          © {year} Get-roost. All rights reserved.
        </div>
        <div className="footer-social-row">
          <a
            href="https://www.instagram.com/santhi_tex_?igsh=MWZ2ejB1Z2ttaHA0Ng=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="social-btn ig"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://chat.whatsapp.com/JdPuKLCS3oZ37l2lTzwsNg"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="social-btn wa"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path fill="currentColor" d="M19.11 16.64c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.14-.62.14-.19.28-.71.91-.87 1.09-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.19 0-.49.07-.74.35-.25.28-.97.95-.97 2.31 0 1.36.99 2.68 1.13 2.86.14.19 1.95 2.98 4.73 4.16.66.29 1.18.46 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.31.23-.65.23-1.21.16-1.33-.07-.12-.25-.19-.53-.33z" />
              <path fill="currentColor" d="M16.02 3.2C9.51 3.2 4.2 8.49 4.2 14.98c0 2.55.81 4.91 2.2 6.84L5.2 28.8l7.19-1.89c1.86 1.02 3.98 1.6 6.23 1.6 6.51 0 11.82-5.29 11.82-11.78 0-6.49-5.31-11.78-11.82-11.78zm6.99 18.77c-.3.85-1.73 1.63-2.41 1.74-.61.1-1.4.14-2.26-.14-.52-.17-1.19-.39-2.05-.76-3.61-1.56-5.95-5.2-6.13-5.44-.18-.23-1.47-1.96-1.47-3.75 0-1.79.9-2.67 1.22-3.04.32-.37.71-.46.94-.46.23 0 .47 0 .68.01.22.01.52-.08.81.62.3.72 1.03 2.52 1.12 2.7.09.19.15.41.03.66-.12.25-.18.41-.36.63-.19.22-.38.49-.54.67-.18.19-.37.4-.16.77.21.37.95 1.57 2.05 2.54 1.41 1.23 2.6 1.62 2.98 1.8.38.19.6.16.82-.09.21-.25.95-1.11 1.2-1.49.25-.37.51-.31.84-.18.34.13 2.17 1.02 2.54 1.21.37.18.62.28.71.44.09.16.09.93-.21 1.78z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
