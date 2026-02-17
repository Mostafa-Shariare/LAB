const AboutSection = () => {
    return (
        <section id="about" className="content-section active">
            <div className="about-container">
                <h2><i className="fas fa-info-circle"></i> About AI-MOOC Platform</h2>
                <p className="lead">A comprehensive AI-powered Massive Open Online Course (MOOC) platform that combines
                    traditional online learning with cutting-edge artificial intelligence to deliver personalized,
                    adaptive, and engaging educational experiences.</p>

                {/* Platform Overview */}
                <div className="about-section">
                    <h3><i className="fas fa-rocket"></i> Platform Overview</h3>
                    <p>AI-MOOC is a next-generation online learning platform designed to revolutionize how students
                        learn and progress through courses. Our platform integrates artificial intelligence at every
                        level to provide personalized learning experiences, real-time feedback, and intelligent career
                        guidance. With over <strong>86 comprehensive courses</strong> spanning multiple technology
                        domains, AI-MOOC serves as a complete learning ecosystem for students, professionals, and career
                        changers.</p>
                </div>

                {/* Core Features */}
                <div className="about-section">
                    <h3><i className="fas fa-star"></i> Core Features & Functionality</h3>

                    <div className="feature-detail">
                        <h4><i className="fas fa-book"></i> 1. Comprehensive Course Catalog</h4>
                        <ul>
                            <li><i className="fas fa-check list-icon"></i><strong>86+ Courses:</strong> Our platform offers
                                an extensive library of courses covering all major technology domains</li>
                            <li><i className="fas fa-check list-icon"></i><strong>Course Categories:</strong>
                                <ul>
                                    <li><span className="sub-list-icon">•</span><strong>Programming:</strong> Software
                                        development, web development, mobile development, game development, cloud computing, DevOps, cybersecurity, and more
                                    </li>
                                    <li><span className="sub-list-icon">•</span><strong>Data Science:</strong> Data
                                        analysis, statistics, visualization, business intelligence, and big data fundamentals</li>
                                    <li><span className="sub-list-icon">•</span><strong>AI & ML:</strong> Machine
                                        learning, deep learning, neural networks, natural language processing, computer vision, and AI ethics</li>
                                    <li><span className="sub-list-icon">•</span><strong>Soft Skills:</strong> UI/UX
                                        design, project management, communication, and leadership</li>
                                </ul>
                            </li>
                            <li><i className="fas fa-check list-icon"></i><strong>Course Filtering System:</strong> Advanced
                                filtering by category (All, Programming, Data Science, AI & ML, Soft Skills) with visually attractive filter buttons
                            </li>
                        </ul>
                    </div>

                    <div className="feature-detail">
                        <h4><i className="fas fa-tachometer-alt"></i> 2. Student Dashboard</h4>
                        <ul>
                            <li><i className="fas fa-check list-icon"></i><strong>User Profile Section:</strong> Displays
                                student avatar, name, and membership status (Premium Learner)</li>
                            <li><i className="fas fa-check list-icon"></i><strong>Enrolled Courses List:</strong> Shows all
                                courses with progress greater than 0%</li>
                            <li><i className="fas fa-check list-icon"></i><strong>Quick AI Assistant:</strong> Integrated AI
                                chat interface for instant help with course-related questions</li>
                        </ul>
                    </div>


                    <div className="feature-detail">
                        <h4><i className="fas fa-robot"></i> 3. AI Tutor Chat & Advisor</h4>
                        <ul>
                            <li><i className="fas fa-check list-icon"></i><strong>24/7 AI Assistance:</strong> Context-aware answers based on keywords.</li>
                            <li><i className="fas fa-check list-icon"></i><strong>Gap Analysis:</strong> AI analyzes what you know vs. what you need.</li>
                            <li><i className="fas fa-check list-icon"></i><strong>Career Planning:</strong> tailored roadmaps for 13 supported career paths.</li>
                        </ul>
                    </div>
                </div>

                {/* About Section Redesign */}
                <div className="about-redesign">
                    {/* Stats Row */}
                    <div className="about-stats">
                        <div className="stat-box">
                            <span className="stat-number">10k+</span>
                            <span className="stat-label">Active Learners</span>
                        </div>
                        <div className="stat-box">
                            <div className="stat-divider"></div>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">AI Courses</span>
                        </div>
                        <div className="stat-box">
                            <div className="stat-divider"></div>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number">99%</span>
                            <span className="stat-label">Job Ready</span>
                        </div>
                    </div>

                    <div className="about-grid">
                        {/* Mission Card */}
                        <div className="about-card mission-card">
                            <h3><i className="fas fa-bullseye"></i> Our Mission</h3>
                            <div className="quote-content">
                                <p>"To democratize high-quality education by combining the scalability of MOOCs with the
                                    <strong>hyper-personalization of AI</strong>."
                                </p>
                            </div>
                            <p className="mission-text">We bridge the gap between traditional online courses and one-on-one
                                mentorship, making elite professional development accessible to everyone, everywhere.
                            </p>
                        </div>

                        {/* Tech Stack Card */}
                        <div className="about-card tech-card">
                            <h3><i className="fas fa-layer-group"></i> Powered By</h3>
                            <div className="tech-icons">
                                <div className="tech-item" title="Python"><i className="fab fa-python"></i></div>
                                <div className="tech-item" title="React Architecture"><i className="fab fa-react"></i></div>
                                <div className="tech-item" title="Deep Learning"><i className="fas fa-brain"></i></div>
                                <div className="tech-item" title="Cloud Native"><i className="fas fa-cloud"></i></div>
                            </div>
                            <ul className="capabilities-list">
                                <li><i className="fas fa-check"></i> Real-time Progress Tracking</li>
                                <li><i className="fas fa-check"></i> Contextual AI Response</li>
                                <li><i className="fas fa-check"></i> Dynamic Career Matching</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
