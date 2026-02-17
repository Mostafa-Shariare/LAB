import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const Assessment = () => {
    const navigate = useNavigate();

    const assessments = [
        {
            id: 1,
            title: "HTML & CSS Fundamentals Quiz",
            course: "Web Development Bootcamp",
            status: "Completed",
            score: "95/100",
            date: "2024-10-15",
            icon: "fab fa-html5",
            color: "#e34c26"
        },
        {
            id: 2,
            title: "JavaScript Logic Challenges",
            course: "JavaScript Mastery",
            status: "In Progress",
            score: "-",
            date: "2024-10-20",
            icon: "fab fa-js",
            color: "#f7df1e"
        },
        {
            id: 3,
            title: "React Hooks Deep Dive",
            course: "Advanced React Patterns",
            status: "Upcoming",
            score: "-",
            date: "2024-11-05",
            icon: "fab fa-react",
            color: "#61dafb"
        }
    ];

    const menuItems = [
        { label: 'Dashboard', icon: 'fas fa-home', active: false, onClick: () => navigate('/dashboard') },
        { label: 'My Learning', icon: 'fas fa-book', active: false, onClick: () => navigate('/courses') },
        { label: 'Assessments', icon: 'fas fa-clipboard-list', active: true, onClick: null },
        { label: 'AI Tutor', icon: 'fas fa-robot', active: false, onClick: () => navigate('/ai-assistant') },
        { label: 'Settings', icon: 'fas fa-cog', active: false, onClick: () => navigate('/settings') },
    ];

    return (
        <DashboardLayout role="student" menuItems={menuItems}>
            <div className="assessment-page">
                <header className="page-header" style={{ marginBottom: '2rem' }}>
                    <h2 className="dash-header">My Assessments</h2>
                    <p style={{ color: 'var(--gray)' }}>Track your progress and test your knowledge through periodic assessments.</p>
                </header>

                <div className="assessment-stats">
                    <div className="stat-card" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--gray)', fontWeight: '600' }}>TOTAL COMPLETED</span>
                        <h3 style={{ fontSize: '2rem', marginTop: '0.5rem', color: 'var(--primary)' }}>12</h3>
                    </div>
                    <div className="stat-card" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--gray)', fontWeight: '600' }}>AVERAGE SCORE</span>
                        <h3 style={{ fontSize: '2rem', marginTop: '0.5rem', color: '#10b981' }}>88%</h3>
                    </div>
                    <div className="stat-card" style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--gray)', fontWeight: '600' }}>PENDING TASKS</span>
                        <h3 style={{ fontSize: '2rem', marginTop: '0.5rem', color: '#f59e0b' }}>3</h3>
                    </div>
                </div>

                <div className="assessment-list-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                            <tr>
                                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--gray-dark)' }}>Assessment Title</th>
                                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--gray-dark)' }}>Course</th>
                                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--gray-dark)' }}>Status</th>
                                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--gray-dark)' }}>Score</th>
                                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--gray-dark)' }}>Date</th>
                                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--gray-dark)' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assessments.map((assessment) => (
                                <tr key={assessment.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }} className="table-row-hover">
                                    <td style={{ padding: '1.2rem 1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '8px',
                                                background: `${assessment.color}20`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: assessment.color,
                                                fontSize: '1.2rem'
                                            }}>
                                                <i className={assessment.icon}></i>
                                            </div>
                                            <span style={{ fontWeight: '500' }}>{assessment.title}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.2rem 1.5rem', color: 'var(--gray)' }}>{assessment.course}</td>
                                    <td style={{ padding: '1.2rem 1.5rem' }}>
                                        <span style={{
                                            padding: '0.3rem 0.6rem',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            background: assessment.status === 'Completed' ? '#dcfce7' : assessment.status === 'In Progress' ? '#fef3c7' : '#f1f5f9',
                                            color: assessment.status === 'Completed' ? '#166534' : assessment.status === 'In Progress' ? '#92400e' : '#475569'
                                        }}>
                                            {assessment.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.2rem 1.5rem', fontWeight: '600' }}>{assessment.score}</td>
                                    <td style={{ padding: '1.2rem 1.5rem', color: 'var(--gray)' }}>{assessment.date}</td>
                                    <td style={{ padding: '1.2rem 1.5rem' }}>
                                        <button className={`btn ${assessment.status === 'Completed' ? 'btn-outline' : 'btn-primary'}`} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                                            {assessment.status === 'Completed' ? 'Review' : assessment.status === 'In Progress' ? 'Continue' : 'Start'}
                                        </button>
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

export default Assessment;
