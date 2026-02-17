import { useState } from 'react';
import { gapAnalysisData, careerPaths } from '../data/advisorData';

const Advisor = () => {
    const [activeTab, setActiveTab] = useState('gap');

    // Gap Analysis State
    const [gapCourse, setGapCourse] = useState('');
    const [gapTopics, setGapTopics] = useState('');
    const [isAnalyzingGap, setIsAnalyzingGap] = useState(false);
    const [gapResults, setGapResults] = useState(null);

    // Career Planner State
    const [careerGoal, setCareerGoal] = useState('');
    const [careerLevel, setCareerLevel] = useState('beginner');
    const [isGeneratingRoadmap, setIsGeneratingRoadmap] = useState(false);
    const [careerResults, setCareerResults] = useState(null);

    const handleGapAnalysis = () => {
        if (!gapCourse) return;

        setIsAnalyzingGap(true);
        setGapResults(null);

        // Simulation
        setTimeout(() => {
            const data = gapAnalysisData[gapCourse] || gapAnalysisData.python; // Fallback
            setGapResults(data);
            setIsAnalyzingGap(false);
        }, 2000);
    };

    const handleCareerPlanning = () => {
        if (!careerGoal.trim()) return;

        setIsGeneratingRoadmap(true);
        setCareerResults(null);

        // Simulation
        setTimeout(() => {
            const userInput = careerGoal.toLowerCase();
            const match = careerPaths.find(path =>
                path.keywords.some(keyword => userInput.includes(keyword.toLowerCase()))
            );

            setCareerResults({
                path: match || {
                    title: "General Tech Career",
                    icon: "fa-laptop-code",
                    coreSkills: ["Programming Fundamentals", "Problem Solving", "Version Control"],
                    courses: ["Programming Fundamentals", "Git Version Control", "Project Management"]
                },
                level: careerLevel
            });
            setIsGeneratingRoadmap(false);
        }, 1500);
    };

    return (
        <section id="advisor" className="content-section active">
            <div className="section-header">
                <h2><i className="fas fa-magic"></i> AI Learning Advisor</h2>
                <p>Personalized guidance powered by AI to bridge your skill gaps and plan your career.</p>
            </div>

            <div className="advisor-container-redesign">
                {/* Wizard Navigation / Tabs */}
                <div className="advisor-tabs">
                    <button
                        className={`advisor-tab ${activeTab === 'gap' ? 'active' : ''}`}
                        onClick={() => setActiveTab('gap')}
                    >
                        <i className="fas fa-search"></i> Gap Analyzer
                        <div className="advisor-tab-underline"></div>
                    </button>
                    <button
                        className={`advisor-tab ${activeTab === 'career' ? 'active' : ''}`}
                        onClick={() => setActiveTab('career')}
                    >
                        <i className="fas fa-map-signs"></i> Career Planner
                        <div className="advisor-tab-underline"></div>
                    </button>
                </div>

                {/* Content Area */}
                <div className="advisor-content-wrapper">

                    {/* Tab 1: Learning Gap Analyzer */}
                    <div id="tab-gap" className={`advisor-tab-content ${activeTab === 'gap' ? 'active' : ''}`}>
                        <div className="wizard-card glass-panel">
                            <div className="wizard-step">
                                <div className="step-icon"><i className="fas fa-bullseye"></i></div>
                                <h3>Identify Knowledge Gaps</h3>
                                <p>Let AI analyze what you know vs. what you need.</p>
                            </div>

                            <div className="wizard-form">
                                <div className="form-group floating-label">
                                    <select
                                        id="gap-course"
                                        className="glass-input"
                                        value={gapCourse}
                                        onChange={(e) => setGapCourse(e.target.value)}
                                        style={{ borderColor: !gapCourse && isAnalyzingGap ? '#ef4444' : '' }}
                                    >
                                        <option value="" disabled>Select a target course...</option>
                                        <option value="python">Python for Data Science</option>
                                        <option value="web">Web Development</option>
                                        <option value="ml">Machine Learning Fundamentals</option>
                                    </select>
                                    <label>Target Course</label>
                                </div>
                                <div className="form-group floating-label">
                                    <input
                                        type="text"
                                        id="gap-topics"
                                        className="glass-input"
                                        placeholder=" "
                                        value={gapTopics}
                                        onChange={(e) => setGapTopics(e.target.value)}
                                    />
                                    <label>Topics you already know (comma separated)</label>
                                </div>
                                <button
                                    className="btn btn-glow"
                                    onClick={handleGapAnalysis}
                                    disabled={isAnalyzingGap}
                                >
                                    {isAnalyzingGap ? (
                                        <>
                                            <span className="btn-text">AI Analysis in Progress...</span>
                                            <span className="btn-icon"><i className="fas fa-spinner fa-spin"></i></span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="btn-text">Analyze My Skills</span>
                                            <span className="btn-icon"><i className="fas fa-wand-magic-sparkles"></i></span>
                                            <span className="btn-effect"></span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {gapResults && (
                                <div id="gap-results" className="results-area glass-results">
                                    <div className="scanning-line"></div>
                                    <h4><i className="fas fa-clipboard-check"></i> Analysis Complete</h4>
                                    <div className="gap-tags" id="gap-list">
                                        {gapResults.gaps.map((gap, index) => (
                                            <span key={index} className="gap-tag" style={{ animationDelay: `${index * 0.1}s` }}>
                                                <i className="fas fa-exclamation-triangle"></i> {gap}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="real-world-suggestions">
                                        <h5><i className="fas fa-lightbulb"></i> Industry Application</h5>
                                        <div id="real-world-content" className="carousel-container">
                                            {gapResults.realWorldApplications.map((app, index) => (
                                                <div key={index} className="real-world-card">
                                                    <div className="real-world-header">
                                                        <i className={`fas ${app.icon}`}></i>
                                                        <h5>{app.title}</h5>
                                                    </div>
                                                    <p>{app.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tab 2: Career Path Planner */}
                    <div id="tab-career" className={`advisor-tab-content ${activeTab === 'career' ? 'active' : ''}`}>
                        <div className="wizard-card glass-panel dark-mode-accent">
                            <div className="wizard-step">
                                <div className="step-icon"><i className="fas fa-road"></i></div>
                                <h3>Design Your Future</h3>
                                <p>Get a tailored roadmap to your dream job.</p>
                            </div>

                            <div className="wizard-form">
                                <div className="form-group floating-label">
                                    <input
                                        type="text"
                                        id="career-goal"
                                        className="glass-input"
                                        placeholder=" "
                                        value={careerGoal}
                                        onChange={(e) => setCareerGoal(e.target.value)}
                                    />
                                    <label>Dream Job Title (e.g. Data Scientist)</label>
                                </div>
                                <div className="form-group floating-label">
                                    <select
                                        id="career-level"
                                        className="glass-input"
                                        value={careerLevel}
                                        onChange={(e) => setCareerLevel(e.target.value)}
                                    >
                                        <option value="beginner">Beginner (0-1 years)</option>
                                        <option value="intermediate">Intermediate (2-4 years)</option>
                                        <option value="advanced">Advanced (5+ years)</option>
                                    </select>
                                    <label>Current Experience</label>
                                </div>
                                <button
                                    className="btn btn-glow secondary"
                                    onClick={handleCareerPlanning}
                                    disabled={isGeneratingRoadmap}
                                >
                                    {isGeneratingRoadmap ? (
                                        <>
                                            <span className="btn-text">Generating Roadmap...</span>
                                            <span className="btn-icon"><i className="fas fa-spinner fa-spin"></i></span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="btn-text">Generate Roadmap</span>
                                            <span className="btn-icon"><i className="fas fa-rocket"></i></span>
                                            <span className="btn-effect"></span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {careerResults && (
                                <div id="career-results" className="results-area glass-results">
                                    <h4><i className="fas fa-map"></i> Your Personal Roadmap: {careerResults.path.title}</h4>
                                    <div className="career-roadmap">
                                        <div className="roadmap-step">
                                            <div className="timeline-dot"></div>
                                            <h5>Step 1: Build Strong Foundations</h5>
                                            <p>Master Core Concepts: {careerResults.path.coreSkills ? careerResults.path.coreSkills[0] : 'Programming Basics'}</p>
                                        </div>
                                        <div className="roadmap-step">
                                            <div className="timeline-dot"></div>
                                            <h5>Step 2: Specialized Skills</h5>
                                            <p>Advanced Topics: {careerResults.path.coreSkills ? careerResults.path.coreSkills[1] : 'Advanced Functions'}</p>
                                        </div>
                                        <div className="roadmap-step">
                                            <div className="timeline-dot"></div>
                                            <h5>Step 3: Recommended Courses</h5>
                                            <div className="mini-course-list">
                                                {careerResults.path.courses.slice(0, 3).map((c, i) => (
                                                    <div key={i} className="mini-course-card" style={{ marginTop: '0.5rem', padding: '0.5rem' }}>
                                                        <i className="fas fa-book-reader" style={{ color: 'var(--primary)' }}></i> <span>{c}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    <h4><span className="badge badge-boost"><i className={`fas ${careerResults.path.icon}`}></i> Career Path: {careerResults.path.title}</span></h4>
                                    <div className="career-info">
                                        <div className="career-core-skills">
                                            <strong>Core Skills:</strong>
                                            <div className="skills-tags">
                                                {careerResults.path.coreSkills.map((skill, index) => (
                                                    <span key={index} className="skill-tag">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recommended-courses">
                                        <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--dark)' }}>
                                            <i className="fas fa-graduation-cap"></i> Suggested Courses:
                                        </h5>
                                        {careerResults.path.courses.map((course, index) => (
                                            <div key={index} className="mini-course-card">
                                                <div className="course-number">{index + 1}</div>
                                                <div className="course-content">
                                                    <h5>{course}</h5>
                                                    <p><span className="badge badge-rec">Recommended</span> <span className="course-duration">
                                                        {careerResults.level === 'beginner' ? '8-12 Weeks' :
                                                            careerResults.level === 'intermediate' ? '6-10 Weeks' : '4-8 Weeks'}
                                                    </span></p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="demo-note">Note: This is a simulated AI response for demonstration purposes.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Advisor;
