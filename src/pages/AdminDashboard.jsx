import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const AdminDashboard = () => {
    const { user } = useApp();
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Dashboard', icon: 'fas fa-chart-line', active: true, onClick: null },
        { label: 'Users', icon: 'fas fa-users', active: false, onClick: () => navigate('/admin/users') },
        { label: 'Courses', icon: 'fas fa-book', active: false, onClick: () => navigate('/admin/courses') },
        { label: 'AI Analyst', icon: 'fas fa-robot', active: false, onClick: () => navigate('/admin/ai') },
        { label: 'Settings', icon: 'fas fa-cog', active: false, onClick: () => navigate('/admin/settings') },
    ];

    return (
        <DashboardLayout role="admin" menuItems={menuItems}>
            <h2 className="dash-header">System Overview</h2>

            {/* Admin Stats */}
            <div className="dash-stats">
                <div className="stat-card">
                    <div className="stat-icon icon-blue">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{user.stats.users.toLocaleString()}</h3>
                        <p>Total Users</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-green">
                        <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div className="stat-info">
                        <h3>${user.stats.revenue.toLocaleString()}</h3>
                        <p>Total Revenue</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-yellow">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{user.stats.active}</h3>
                        <p>Active Now</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-red">
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{user.stats.reports}</h3>
                        <p>Pending Reports</p>
                    </div>
                </div>
            </div>

            {/* Recent Registrations Table */}
            <div className="dash-widget" style={{ marginTop: '2rem' }}>
                <h3><i className="fas fa-user-plus"></i> Recent Registrations</h3>
                <div className="table-responsive">
                    <table className="dash-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Role</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3].map((item) => (
                                <tr key={item}>
                                    <td>
                                        <div className="user-cell">
                                            <div className="user-avatar-sm"></div>
                                            <span>User {item}</span>
                                        </div>
                                    </td>
                                    <td><span className="role-badge-sm">Student</span></td>
                                    <td style={{ color: 'var(--gray)' }}>Oct 1{item}, 2023</td>
                                    <td><span className="status-badge status-active">● Active</span></td>
                                    <td>
                                        <button style={{ border: 'none', background: 'transparent', color: 'var(--gray)', cursor: 'pointer' }}><i className="fas fa-ellipsis-v"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;
