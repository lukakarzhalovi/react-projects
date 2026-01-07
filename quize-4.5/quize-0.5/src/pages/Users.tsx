import { useEffect, useState } from 'react';
import './Users.css';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('მონაცემების ჩატვირთვა ვერ მოხერხდა');
        }
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'უცნობი შეცდომა');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="users">
        <div className="users-container">
          <div className="loading">იტვირთება...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="users">
        <div className="users-container">
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="users">
      <div className="users-container">
        <h1 className="users-title">მომხმარებლები</h1>
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-card-header">
                <div className="user-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="user-info">
                  <h2 className="user-name">{user.name}</h2>
                  <p className="user-username">@{user.username}</p>
                </div>
              </div>
              <div className="user-card-body">
                <div className="user-detail">
                  <span className="user-detail-label">Email:</span>
                  <span className="user-detail-value">{user.email}</span>
                </div>
                <div className="user-detail">
                  <span className="user-detail-label">ქალაქი:</span>
                  <span className="user-detail-value">{user.address.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;

