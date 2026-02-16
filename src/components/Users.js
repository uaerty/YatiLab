import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Users.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<section id="users" className="user-section section-padding">
   <div id = "users" className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-title">Total Users</h2>
            <p className="section-subtitle">
              Who trusted us and used our services
            </p>
          </div>

      {/* Search Bar */}
      <div className="input-group mb-3 shadow-sm">
        <span className="input-group-text bg-dark text-white">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, username, or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="alert alert-danger text-center">
          Error: {error}
        </div>
      )}

      {/* Users Table */}
      {!loading && !error && (
        <div className="table-responsive shadow-lg">
          <table className="table table-striped table-hover align-middle users-table">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
                        {user.website}
                      </a>
                    </td>
                    <td>{user.company?.name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
     </div>
    </section>
  );
}

export default Users;
