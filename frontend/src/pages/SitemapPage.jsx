import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SiteMap.css';

export default function SitemapPage() {
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/categories?category=medicine', label: 'Medicine' },
    { path: '/categories?category=homeopathy', label: 'Homeopathy' },
    { path: '/categories?category=sarees', label: 'Sarees' },
    { path: '/categories?category=electronics', label: 'Electronics' },
    { path: '/categories?category=fashion', label: 'Fashion' },
    { path: '/cart', label: 'Cart' },
    { path: '/orders', label: 'Orders' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
  ];

  return (
    <div className="sitemap-page">
      <div className="sitemap-hero">
        <h1 className="sitemap-title">Sitemap</h1>
      </div>

      <div className="sitemap-grid">
        {routes.map((r) => (
          <Link key={r.path} to={r.path} className="sitemap-card">
            <div className="sitemap-icon">↗</div>
            <div className="sitemap-label">{r.label}</div>
          </Link>
        ))}
      </div>

      <div className="sitemap-xml">
        <h3>XML preview</h3>
        <pre className="sitemap-pre">
        {`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes.map(r => `  <url><loc>${window.location.origin}${r.path}</loc></url>`).join('\n')}
        </urlset>`}
        </pre>
      </div>
    </div>
  );
}
