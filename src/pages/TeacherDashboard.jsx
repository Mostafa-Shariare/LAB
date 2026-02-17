import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const TeacherDashboard = () => {
    const { user } = useApp();
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Dashboard', icon: 'fas fa-chalkboard-teacher', active: true, onClick: null },
        { label: 'My Courses', icon: 'fas fa-book-open', active: false, onClick: null },
        { label: 'Students', icon: 'fas fa-user-graduate', active: false, onClick: () => navigate('/teacher/students') },
        { label: 'AI Co-pilot', icon: 'fas fa-robot', active: false, onClick: () => navigate('/teacher/ai') },
        { label: 'Assignments', icon: 'fas fa-clipboard-check', active: false, onClick: () => navigate('/teacher/assignments') },
    ];

    return (
        <DashboardLayout role="teacher" menuItems={menuItems}>
            <h2 className="dash-header">Instructor Overview</h2>

            {/* Teacher Stats */}
            <div className="dash-stats">
                <div className="stat-card">
                    <div className="stat-icon icon-blue">
                        <i className="fas fa-user-graduate"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{user.stats.students.toLocaleString()}</h3>
                        <p>Enrolled Students</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-green">
                        <i className="fas fa-book-reader"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{user.stats.courses}</h3>
                        <p>Active Courses</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-yellow">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{user.stats.rating}</h3>
                        <p>Average Rating</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-purple">
                        <i className="fas fa-comment-alt"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{user.stats.reviews}</h3>
                        <p>Course Reviews</p>
                    </div>
                </div>
            </div>

            {/* My Courses */}
            <div className="dash-widget" style={{ marginTop: '2rem' }}>
                <div className="widget-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ margin: 0 }}><i className="fas fa-laptop-code"></i> My Courses</h3>
                    <button className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }} onClick={() => navigate('/teacher/create-course')}>
                        + Create New
                    </button>
                </div>
                <div className="course-grid">
                    <div className="course-card">
                        <div className="course-img" style={{ height: '160px' }}>
                            <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Python" />
                        </div>
                        <div className="course-info" style={{ padding: '1.2rem' }}>
                            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Python for Data Science</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--gray)', marginBottom: '1rem' }}>
                                <span><i className="fas fa-user"></i> 1,205</span>
                                <span><i className="fas fa-star" style={{ color: '#f59e0b' }}></i> 4.9</span>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', padding: '0.6rem' }}>Manage Course</button>
                        </div>
                    </div>
                    <div className="course-card">
                        <div className="course-img" style={{ height: '160px' }}>
                            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Web Dev" />
                        </div>
                        <div className="course-info" style={{ padding: '1.2rem' }}>
                            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Full Stack Web Dev</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--gray)', marginBottom: '1rem' }}>
                                <span><i className="fas fa-user"></i> 850</span>
                                <span><i className="fas fa-star" style={{ color: '#f59e0b' }}></i> 4.8</span>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', padding: '0.6rem' }}>Manage Course</button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TeacherDashboard;
