import { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
    const { enrolledCourses, user, logout } = useApp();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll listener
    useState(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeAll = () => {
        setIsOpen(false);
        setIsUserMenuOpen(false);
    };

    const dashboardPath = user?.role === 'admin' ? '/admin' : user?.role === 'teacher' ? '/teacher' : '/dashboard';

    // Role-specific quick links
    const getRoleLinks = () => {
        if (!user) return null;
        if (user.role === 'admin') {
            return (
                <>
                    <li><NavLink to="/admin/users" onClick={closeAll}><i className="fas fa-users"></i> Users</NavLink></li>
                    <li><NavLink to="/admin/courses" onClick={closeAll}><i className="fas fa-layer-group"></i> Courses</NavLink></li>
                    <li><NavLink to="/admin/ai" onClick={closeAll}><i className="fas fa-microchip"></i> Admin AI</NavLink></li>
                </>
            );
        }
        if (user.role === 'teacher') {
            return (
                <>
                    <li><NavLink to="/teacher/students" onClick={closeAll}><i className="fas fa-user-graduate"></i> Students</NavLink></li>
                    <li><NavLink to="/teacher/create-course" onClick={closeAll}><i className="fas fa-plus-circle"></i> Create</NavLink></li>
                    <li><NavLink to="/teacher/ai" onClick={closeAll}><i className="fas fa-chalkboard-teacher"></i> Instructor AI</NavLink></li>
                </>
            );
        }
        return (
            <>
                <li><NavLink to="/courses" onClick={closeAll}><i className="fas fa-compass"></i> Explore</NavLink></li>
                <li><NavLink to="/assessment" onClick={closeAll}><i className="fas fa-clipboard-check"></i> Tests</NavLink></li>
                <li><NavLink to="/advisor" onClick={closeAll}><i className="fas fa-brain"></i> Career Guide</NavLink></li>
            </>
        );
    };

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <nav className="navbar">
                <div className="logo" onClick={() => navigate('/')}>
                    <i className="fas fa-brain"></i> AI-MOOC
                </div>
                <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
                    <li><NavLink to="/" onClick={closeAll}><i className="fas fa-home"></i> Home</NavLink></li>

                    {user ? (
                        <>
                            {getRoleLinks()}
                            <li>
                                <NavLink to={dashboardPath} onClick={closeAll}>
                                    <i className="fas fa-th-large"></i> Dashboard {user.role === 'student' && enrolledCourses.length > 0 && <span className="nav-badge">{enrolledCourses.length}</span>}
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li><NavLink to="/courses" onClick={closeAll}><i className="fas fa-book"></i> Courses</NavLink></li>
                            <li><NavLink to="/features" onClick={closeAll}><i className="fas fa-wand-magic-sparkles"></i> Features</NavLink></li>
                        </>
                    )}

                    {!user ? (
                        <div className="auth-btns" style={{ display: 'flex', gap: '1rem' }}>
                            <li><button className="btn-auth" onClick={() => { closeAll(); navigate('/login'); }}>Login</button></li>
                            <li><button className="btn-auth btn-primary" onClick={() => { closeAll(); navigate('/signup'); }}>Join Free</button></li>
                        </div>
                    ) : (
                        <li className="user-menu-container">
                            <div className="user-menu" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                                <img src={user.avatar} alt="User" className="user-avatar-sm" />
                                <span className="user-name">{user.name.split(' ')[0]}</span>
                                <i className={`fas fa-chevron-${isUserMenuOpen ? 'up' : 'down'}`} style={{ fontSize: '0.7rem', color: 'var(--gray)' }}></i>
                            </div>

                            <div className={`user-dropdown ${isUserMenuOpen ? 'active' : ''}`}>
                                <div className="dropdown-item" onClick={() => { closeAll(); navigate(dashboardPath); }}>
                                    <i className="fas fa-th-large"></i> Overview
                                </div>
                                <div className="dropdown-item" onClick={() => { closeAll(); navigate('/settings'); }}>
                                    <i className="fas fa-user-edit"></i> Profile Settings
                                </div>
                                <div className="dropdown-divider"></div>
                                <div className="dropdown-item logout-item" onClick={() => { closeAll(); logout(); navigate('/'); }}>
                                    <i className="fas fa-sign-out-alt"></i> Sign Out
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
