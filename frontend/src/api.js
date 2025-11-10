const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api/v1";

async function request(path, opts = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include', 
    ...opts,
    headers: {
      ...(opts.headers || {}),
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} ${text}`);
  }
  return res.json();
}

export const apiGet = (path) => request(path);
export const apiPost = (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) });
export const apiPut = (path, body) => request(path, { method: 'PUT', body: JSON.stringify(body) });
export const apiDelete = (path) => request(path, { method: 'DELETE' });
