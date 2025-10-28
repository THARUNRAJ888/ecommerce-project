import React, { useMemo, useState } from 'react';
import '../styles/Carrer.css';

const openings = [
  { 
    id: 1, 
    title: 'Frontend Engineer', 
    team: 'Engineering', 
    location: 'Remote', 
    type: 'Full-time', 
    tags: ['React', 'TypeScript', 'CSS'] 
  },
  { 
    id: 2, 
    title: 'Backend Engineer', 
    team: 'Engineering', 
    location: 'Remote', 
    type: 'Full-time', 
    tags: ['Node.js', 'MongoDB', 'Express'] 
  },
  { 
    id: 3, 
    title: 'Product Designer', 
    team: 'Design', 
    location: 'Hybrid - Bengaluru', 
    type: 'Full-time', 
    tags: ['Figma', 'UX', 'UI'] 
  },
  { 
    id: 4, 
    title: 'Category Manager - Medicine', 
    team: 'Operations', 
    location: 'Hybrid - Hyderabad', 
    type: 'Full-time', 
    tags: ['Merchandising', 'Ops', 'Analytics'] 
  },
];

export default function CareersPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return openings;
    return openings.filter(o =>
      [o.title, o.team, o.location, o.type, ...(o.tags || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <div className="careers-page">
      <div className="careers-hero">
        <h1 className="careers-title">Careers at Get-roost</h1>
        <p className="careers-sub">Join a fast-growing marketplace improving everyday wellness and lifestyle.</p>

        <div className="careers-search">
          <input
            type="text"
            placeholder="Search roles, locations, or skills"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="careers-grid">
        {filtered.length === 0 && (
          <p className="careers-empty">No roles match the current filters.</p>
        )}
        {filtered.map(role => (
          <div className="career-card" key={role.id}>
            <div className="career-head">
              <h3>{role.title}</h3>
              <span className="badge">{role.type}</span>
            </div>
            <p className="career-meta">{role.team} • {role.location}</p>
            <div className="tags">
              {(role.tags || []).map((t, i) => <span key={i} className="tag">{t}</span>)}
            </div>
            
            <a className="apply-btn" href={`/careers/apply/${role.id}`}>Apply now</a>
          </div>
        ))}
      </div>
    </div>
  );
}
