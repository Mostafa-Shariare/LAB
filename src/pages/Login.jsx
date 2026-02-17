import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useApp();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            login(email, password);
            navigate('/');
        } else {
            setError('Please provide valid credentials');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Welcome Back</h2>
                <p>Login to continue your learning journey</p>
                {error && <div className="error-message">{error}</div>}

                <div className="quick-login" style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                    <button type="button" onClick={() => { login('admin@mooc.com', 'pass'); navigate('/admin'); }} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', background: '#e0f2fe', color: '#0369a1', border: '1px solid #7dd3fc', borderRadius: '20px', cursor: 'pointer' }}>
                        Admin
                    </button>
                    <button type="button" onClick={() => { login('teacher@mooc.com', 'pass'); navigate('/teacher'); }} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', background: '#dcfce7', color: '#15803d', border: '1px solid #86efac', borderRadius: '20px', cursor: 'pointer' }}>
                        Teacher
                    </button>
                    <button type="button" onClick={() => { login('student@mooc.com', 'pass'); navigate('/dashboard'); }} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', background: '#f3e8ff', color: '#7e22ce', border: '1px solid #d8b4fe', borderRadius: '20px', cursor: 'pointer' }}>
                        Student
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
                <div className="auth-footer">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
