import { useState } from 'react';

const UserManagement = () => {
    // Mock Data
    const [users, setUsers] = useState([
        { id: 1, name: 'Alex Student', email: 'student@mooc.com', role: 'Student', status: 'Active', joined: 'Oct 12, 2023' },
        { id: 2, name: 'Sarah Smith', email: 'teacher@mooc.com', role: 'Teacher', status: 'Active', joined: 'Sep 24, 2023' },
        { id: 3, name: 'System Admin', email: 'admin@mooc.com', role: 'Admin', status: 'Active', joined: 'Jan 15, 2023' },
        { id: 4, name: 'John Doe', email: 'john@example.com', role: 'Student', status: 'Active', joined: 'Nov 05, 2023' },
        { id: 5, name: 'Emily Blunt', email: 'emily@school.com', role: 'Teacher', status: 'Pending', joined: 'Nov 08, 2023' },
    ]);

    const handleBlock = (id) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, status: user.status === 'Active' ? 'Banned' : 'Active' } : user
        ));
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers(users.filter(user => user.id !== id));
        }
    };

    return (
        <section className="content-section active" style={{ paddingTop: '2rem', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--dark)' }}>User Management</h2>

            <div className="dash-widget">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '2px solid #f1f5f9', color: 'var(--gray)' }}>
                                <th style={{ padding: '1rem' }}>User</th>
                                <th style={{ padding: '1rem' }}>Role</th>
                                <th style={{ padding: '1rem' }}>Joined</th>
                                <th style={{ padding: '1rem' }}>Status</th>
                                <th style={{ padding: '1rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: '600', color: 'var(--dark)' }}>{user.name}</div>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: '500',
                                            background: user.role === 'Admin' ? '#fee2e2' : user.role === 'Teacher' ? '#dcfce7' : '#e0f2fe',
                                            color: user.role === 'Admin' ? '#ef4444' : user.role === 'Teacher' ? '#16a34a' : '#0284c7'
                                        }}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', color: 'var(--gray)' }}>{user.joined}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            color: user.status === 'Active' ? '#10b981' : user.status === 'Banned' ? '#ef4444' : '#f59e0b',
                                            fontWeight: '600'
                                        }}>
                                            {user.status === 'Active' ? '● Active' : user.status === 'Banned' ? '● Banned' : '● Pending'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <button
                                            onClick={() => handleBlock(user.id)}
                                            style={{
                                                marginRight: '0.5rem',
                                                padding: '0.4rem 0.8rem',
                                                border: '1px solid #cbd5e1',
                                                borderRadius: '6px',
                                                background: '#fff',
                                                cursor: 'pointer',
                                                color: user.status === 'Banned' ? '#10b981' : '#f59e0b'
                                            }}
                                            title={user.status === 'Banned' ? "Unblock User" : "Block User"}
                                        >
                                            <i className={user.status === 'Banned' ? "fas fa-check" : "fas fa-ban"}></i>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            style={{
                                                padding: '0.4rem 0.8rem',
                                                border: '1px solid #fecaca',
                                                borderRadius: '6px',
                                                background: '#fef2f2',
                                                color: '#ef4444',
                                                cursor: 'pointer'
                                            }}
                                            title="Delete User"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default UserManagement;
