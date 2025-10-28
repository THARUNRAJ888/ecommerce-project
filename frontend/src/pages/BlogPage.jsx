import React, { useMemo, useState } from 'react';
import '../styles/Blog.css';

const posts = [
  { 
    id: 1, title: 'Top 7 Homeopathy Essentials', 
    excerpt: 'Starter remedies worth keeping at home.', 
    image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=800', 
    tag: 'Homeopathy', 
    date: '2025-08-22' 
  },
  { 
    id: 2, 
    title: 'How to Pick a Blood Pressure Monitor', 
    excerpt: 'Key features and accuracy tips.', 
    image: 'https://images.pexels.com/photos/57523/pexels-photo-57523.jpeg?auto=compress&cs=tinysrgb&w=800', 
    tag: 'Medicine', 
    date: '2025-07-10' 
  },
  { 
    id: 3, 
    title: 'Saree Care: Silk That Lasts', 
    excerpt: 'Storage and cleaning for longevity.', 
    image: 'https://images.pexels.com/photos/3865909/pexels-photo-3865909.jpeg?auto=compress&cs=tinysrgb&w=800', 
    tag: 'Sarees', 
    date: '2025-06-15' 
  },
  { 
    id: 4, 
    title: 'Phone Upgrade Checklist', 
    excerpt: 'What to look for this season.', 
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800', 
    tag: 'Electronics', 
    date: '2025-05-29' 
  },
];

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(p =>
      [p.title, p.excerpt, p.tag].join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1 className="blog-title">Get-roost Journal</h1>
        <p className="blog-sub">Insights, guides, and product picks from our team.</p>

        <div className="blog-search">
          <input
            type="text"
            placeholder="Search posts or tags"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="blog-grid">
        {filtered.length === 0 && (
          <p className="blog-empty">No posts match the current search.</p>
        )}
        {filtered.map(post => (
          <article className="blog-card" key={post.id}>
            <div className="blog-media">
              <img src={post.image} alt={post.title} />
              <span className="blog-tag">{post.tag}</span>
            </div>
            <div className="blog-body">
              <h3 className="blog-head">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <a href={`/blog/${post.id}`} className="read-more">Read more →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
