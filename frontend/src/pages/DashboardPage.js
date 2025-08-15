import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (!userInfo) {
      navigate('/auth');
      return;
    }

    const fetchOrders = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data } = await axios.get('/api/orders/myorders', config);
        setOrders(data);
      } catch (error) {
        console.error('Could not fetch orders', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate, userInfo]);

  return (
    <div className="container">
        <h1 style={{ textAlign: 'center', color: 'var(--primary-red)', marginBottom: '2rem' }}>My Dashboard</h1>
        <div className="dashboard-card">
            <h2>My Profile</h2>
            <p><strong>Email:</strong> {userInfo?.email}</p>
        </div>
        <div className="dashboard-card">
            <h2>My Order History</h2>
            {loading ? (
            <p>Loading orders...</p>
            ) : orders.length === 0 ? (
            <p>You have no past orders.</p>
            ) : (
            <div className="order-list">
                {orders.map(order => (
                <div key={order._id} className="order-item" style={{ border: '1px solid var(--border-color)', padding: '1rem', borderRadius: '5px', marginBottom: '1rem' }}>
                    <p><strong>Order ID:</strong> {order._id}</p>
                    <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                    <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                </div>
                ))}
            </div>
            )}
        </div>
    </div>
  );
};

export default DashboardPage;