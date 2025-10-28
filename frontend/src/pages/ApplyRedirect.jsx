import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const portalMap = {
  1: 'https://www.linkedin.com/jobs/',
  2: 'https://www.naukri.com/',
  3: 'https://in.indeed.com/',
  4: 'https://www.glassdoor.co.in/Job/',
};

export default function ApplyRedirect() {
  const { id } = useParams();

  useEffect(() => {
    const url = portalMap[id] || 'https://www.linkedin.com/jobs/';
   
    window.location.replace(url);
  }, [id]);

  return (
    <div style={{ maxWidth: 720, margin: '40px auto', textAlign: 'center', padding: '0 16px' }}>
      <h2>Redirecting to job portal…</h2>
      <p>Please wait while the job page opens. If nothing happens, <a href={portalMap[id] || 'https://www.linkedin.com/jobs/'}>click here</a>.</p>
    </div>
  );
}
