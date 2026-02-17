import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const DashboardLayout = ({ children, role, menuItems }) => {
    const { user, logout } = useApp();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const roleLabel = role === 'admin' ? 'Administrator' : role === 'teacher' ? 'Instructor' : user.isPremium ? 'Premium Learner' : 'Standard Learner';

    return (
        <section className="dashboard-section">
            {/* Mobile Sidebar Toggle */}
            <button className="mobile-sidebar-toggle" onClick={toggleSidebar}>
                <i className={`fas fa-${isSidebarOpen ? 'times' : 'bars'}`}></i>
            </button>

            <div className={`dashboard-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                    <div className="user-profile">
                        <img src={user.avatar} alt="Avatar" className={`avatar-${role}`} />
                        <h4>{user.name}</h4>
                        {role === 'student' ? (
                            <p className="role-label">{roleLabel}</p>
                        ) : (
                            <span className={`role-badge badge-${role}`}>
                                {roleLabel}
                            </span>
                        )}
                    </div>

                    <nav className="sidebar-nav">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`nav-item ${item.active ? 'active' : ''} ${item.active ? `active-${role}` : ''}`}
                                    onClick={() => {
                                        if (item.onClick) item.onClick();
                                        setIsSidebarOpen(false); // Close on mobile after click
                                    }}
                                >
                                    <i className={item.icon}></i> {item.label}
                                </li>
                            ))}
                        </ul>

                        <div className="sidebar-footer">
                            <button onClick={handleLogout} className="btn-logout">
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </button>
                        </div>
                    </nav>
                </aside>

                <main className="dash-main">
                    {children}
                </main>
            </div>

            {/* Backdrop for mobile */}
            {isSidebarOpen && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}
        </section>
    );
};

export default DashboardLayout;
