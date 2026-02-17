import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { getAIResponse } from '../data/aiEngine';
import DashboardLayout from '../components/DashboardLayout';

const Dashboard = () => {
    const { enrolledCourses, user } = useApp();
    const navigate = useNavigate();
    const [dashAIInput, setDashAIInput] = useState('');
    const [dashAIResponse, setDashAIResponse] = useState(null);
    const [isDashAITyping, setIsDashAITyping] = useState(false);

    const handleDashAI = () => {
        if (!dashAIInput.trim() || isDashAITyping) return;

        setIsDashAITyping(true);
        setDashAIResponse(''); // Clear previous response

        // Stimulate AI thinking time
        setTimeout(() => {
            const response = getAIResponse(dashAIInput, 'student', 'general'); // General context for dashboard

            // Typewriter effect
            let i = 0;
            const intervalId = setInterval(() => {
                setDashAIResponse(response.substring(0, i + 1));
                i++;
                if (i === response.length) {
                    clearInterval(intervalId);
                    setIsDashAITyping(false);
                }
            }, 20); // Typing speed
        }, 600);
        setDashAIInput(''); // Clear input
    };

    const handleContinueCourse = (courseId, courseTitle) => {
        // Navigate to the course player
        navigate(`/course/${encodeURIComponent(courseTitle)}/learn`);
    };

    const menuItems = [
        { label: 'Dashboard', icon: 'fas fa-home', active: true, onClick: null },
        { label: 'My Learning', icon: 'fas fa-book', active: false, onClick: null },
        { label: 'Assessments', icon: 'fas fa-clipboard-list', active: false, onClick: () => navigate('/assessment') },
        { label: 'AI Tutor', icon: 'fas fa-robot', active: false, onClick: () => navigate('/ai-assistant') },
        { label: 'Settings', icon: 'fas fa-cog', active: false, onClick: () => navigate('/settings') },
    ];

    return (
        <DashboardLayout role="student" menuItems={menuItems}>
            <h2 className="dash-header">Welcome back, {user.name.split(' ')[0]}! 👋</h2>

            {/* Quick Stats Row */}
            <div className="dash-stats">
                <div className="stat-card">
                    <div className="stat-icon icon-blue">
                        <i className="fas fa-book-open"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{enrolledCourses.length}</h3>
                        <p>Courses in Progress</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-green">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="stat-info">
                        <h3>12</h3>
                        <p>Completed Lessons</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-yellow">
                        <i className="fas fa-fire"></i>
                    </div>
                    <div className="stat-info">
                        <h3>3</h3>
                        <p>Day Streak</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-purple">
                        <i className="fas fa-award"></i>
                    </div>
                    <div className="stat-info">
                        <h3>150</h3>
                        <p>XP Points</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Main Column: Enrolled Courses */}
                <div className="dash-main-col">
                    <h3 style={{ marginBottom: '1rem', color: 'var(--gray-dark)' }}>Continue Learning</h3>

                    {enrolledCourses.length > 0 ? (
                        <div className="enrolled-courses-list">
                            {enrolledCourses.map(course => (
                                <div key={course.id} className="course-progress-card">
                                    <img src={course.image} alt={course.title} />
                                    <div className="course-progress-info">
                                        <h4>{course.title}</h4>
                                        <div className="progress-bar-container">
                                            <div className="progress-bar" style={{ width: `${course.progress}%` }}></div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                            <span style={{ color: 'var(--gray)' }}>{course.progress}% Complete</span>
                                            <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{Math.round((course.progress / 100) * course.lessons)}/{course.lessons} Lessons</span>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            style={{ marginTop: '1rem', width: '100%', padding: '0.6rem' }}
                                            onClick={() => handleContinueCourse(course.id, course.title)}
                                        >
                                            Continue Learning
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '3rem', background: '#fff', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                            <i className="fas fa-book" style={{ fontSize: '3rem', color: '#cbd5e1', marginBottom: '1rem' }}></i>
                            <p style={{ color: 'var(--gray)' }}>You haven't enrolled in any courses yet.</p>
                            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => navigate('/courses')}>Browse Courses</button>
                        </div>
                    )}

                    {/* AI Spotlight Widget */}
                    <div className="ai-spotlight-widget" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', padding: '1.5rem', borderRadius: '16px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fas fa-sparkles" style={{ color: '#fbbf24' }}></i> Quick AI Assist
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1rem' }}>Stuck on a concept? Ask me anything right here.</p>

                            <div className="ai-input-group" style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    type="text"
                                    placeholder="e.g., Explain Recursion..."
                                    style={{
                                        flex: 1,
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        border: '1px solid #334155',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: '#fff',
                                        outline: 'none'
                                    }}
                                    value={dashAIInput}
                                    onChange={(e) => setDashAIInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleDashAI()}
                                />
                                <button
                                    className="btn btn-primary"
                                    style={{ background: '#3b82f6', border: 'none' }}
                                    onClick={handleDashAI}
                                    disabled={isDashAITyping}
                                >
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>

                            {dashAIResponse && (
                                <div style={{
                                    marginTop: '1rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    borderLeft: '3px solid #3b82f6'
                                }}>
                                    <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{dashAIResponse}</p>
                                </div>
                            )}
                        </div>
                        {/* Decorative background circle */}
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>
                    </div>
                </div>

                {/* Side Column: Recommended / Deadlines */}
                <div className="dash-side-col">
                    <div className="dash-widget">
                        <h3><i className="fas fa-clock"></i> Up Next</h3>
                        <ul className="todo-list" style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                                <div style={{ minWidth: '40px', textAlign: 'center' }}>
                                    <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold' }}>24</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>OCT</span>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>Complete Logic Gates Quiz</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>Computer Science 101</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ minWidth: '40px', textAlign: 'center' }}>
                                    <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold' }}>26</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>OCT</span>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>Final Project Submission</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>Web Development Bootcamp</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="dash-widget" style={{ marginTop: '1.5rem' }}>
                        <h3><i className="fas fa-star"></i> Recommended</h3>
                        <div className="rec-course" style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginTop: '1rem' }}>
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Cybersecurity" style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                            <div>
                                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>Cybersecurity Basics</h4>
                                <span style={{ fontSize: '0.75rem', background: '#e0f2fe', color: '#0369a1', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Beginner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
