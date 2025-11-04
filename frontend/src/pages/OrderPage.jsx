import React, { useEffect, useState, useMemo } from 'react';
import '../styles/OrderPage.css';

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setOrders([]);
      setLoading(false);
      return;
    }

    fetch('/api/v1/orders', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load orders');
        return r.json();
      })
      .then((data) => setOrders(Array.isArray(data) ? data : []))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
  }, []);

 
  const sorted = useMemo(
    () =>
      orders.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    [orders]
  );

  return (
    <div className="order-page">
      <center>
        <h2 className="order-title">Your Orders</h2>
      </center>
      

      {loading && <p className="order-empty">Loading orders…</p>}
      {!loading && !sorted.length && <p className="order-empty">No orders yet.</p>}

      {!loading &&
        sorted.map((order) => (
          <section key={order._id} className="order-section">
            <div className="order-header">
              <div>
                <h3 className="order-id">Order no: #{order._id.slice(-6)}</h3>
                <p className="order-date">Date/Time:  
                   {order.createdAt ? new Date(order.createdAt).toLocaleString() : '—'}
                </p>
              </div>
              <div className="order-header-total">
                <span className="order-total-label">Total:</span>
                <span className="order-total-value">
                  ₹{Number(order.totalAmount || 0).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="order-wrap">
              {Array.isArray(order.products) &&
                order.products.map((line, idx) => {
                  const p = line.product || {};
                  const name = p.name || line.name || 'Product';
                  const imageUrl = p.imageUrl || line.imageUrl;
                  const price = p.price ?? line.price; 
                  return (
                    <div key={p._id || idx} className="order-item">
                      <img
                        src={imageUrl || 'https://via.placeholder.com/100'}
                        alt={name}
                        className="order-image"
                      />
                      <div className="order-info">
                        <p className="order-name">{name}</p>
                        <p className="order-meta">Quantity: {line.quantity}</p>
                        {price != null && (
                          <p className="order-meta">Price: ₹{Number(price).toFixed(2)}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
    </div>
  );
}
