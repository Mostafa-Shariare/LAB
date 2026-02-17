import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useNavigate } from 'react-router-dom';

const TeacherAI = () => {
    const navigate = useNavigate();
    const [activeToolIdx, setActiveToolIdx] = useState(0);

    // ---- Lesson Planner State ----
    const [lessonTopic, setLessonTopic] = useState('');
    const [lessonDifficulty, setLessonDifficulty] = useState('intermediate');
    const [isGeneratingLesson, setIsGeneratingLesson] = useState(false);
    const [lessonResult, setLessonResult] = useState(null);

    // ---- Quiz Generator State ----
    const [quizTopic, setQuizTopic] = useState('');
    const [quizCount, setQuizCount] = useState('5');
    const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
    const [quizResult, setQuizResult] = useState(null);

    // ---- Content Reviewer State ----
    const [contentInput, setContentInput] = useState('');
    const [isReviewingContent, setIsReviewingContent] = useState(false);
    const [contentReview, setContentReview] = useState(null);

    const menuItems = [
        { label: 'Dashboard', icon: 'fas fa-tachometer-alt', active: false, onClick: () => navigate('/teacher') },
        { label: 'My Courses', icon: 'fas fa-laptop-code', active: false, onClick: () => navigate('/teacher/create-course') },
        { label: 'Students', icon: 'fas fa-user-graduate', active: false, onClick: () => navigate('/teacher/students') },
        { label: 'Assignments', icon: 'fas fa-tasks', active: false, onClick: () => navigate('/teacher/assignments') },
        { label: 'AI Co-pilot', icon: 'fas fa-robot', active: true, onClick: () => navigate('/teacher/ai') },
    ];

    const tools = [
        { title: 'Lesson Planner', icon: 'fas fa-chalkboard-teacher', color: '#10b981' },
        { title: 'Quiz Generator', icon: 'fas fa-pen-fancy', color: '#3b82f6' },
        { title: 'Student Insights', icon: 'fas fa-chart-bar', color: '#f59e0b' },
        { title: 'Content Reviewer', icon: 'fas fa-spell-check', color: '#8b5cf6' },
    ];

    // ---- Lesson Planner Logic ----
    const handleGenerateLesson = () => {
        if (!lessonTopic.trim()) return;
        setIsGeneratingLesson(true);
        setLessonResult(null);

        setTimeout(() => {
            const mockLessons = {
                'python': {
                    title: `Lesson: Python ${lessonDifficulty === 'beginner' ? 'Fundamentals' : lessonDifficulty === 'intermediate' ? 'Data Structures' : 'Advanced Patterns'}`,
                    objectives: [
                        'Understand core Python syntax and data types',
                        'Apply list comprehensions and built-in functions',
                        'Build a small project demonstrating learned concepts',
                    ],
                    outline: [
                        { phase: 'Warm-up (10 min)', desc: 'Interactive polling: What Python features do students already use?' },
                        { phase: 'Core Content (25 min)', desc: 'Live-coding walkthrough of key concepts with student participation' },
                        { phase: 'Hands-on Activity (15 min)', desc: 'Build a mini-project: Student gradebook calculator' },
                        { phase: 'Assessment (10 min)', desc: 'Quick quiz + peer code review exercise' },
                    ],
                    resources: ['Python Official Docs', 'Interactive Jupyter Notebook', 'Practice Problem Set'],
                },
                'default': {
                    title: `Lesson: ${lessonTopic} (${lessonDifficulty})`,
                    objectives: [
                        `Define key concepts of ${lessonTopic}`,
                        'Apply theory to practical examples',
                        'Evaluate understanding through assessment',
                    ],
                    outline: [
                        { phase: 'Introduction (10 min)', desc: `Overview of ${lessonTopic} and real-world relevance` },
                        { phase: 'Deep Dive (25 min)', desc: 'Interactive lecture with visual aids and demonstrations' },
                        { phase: 'Practice (15 min)', desc: 'Guided exercises with increasing difficulty' },
                        { phase: 'Wrap-up (10 min)', desc: 'Summary, Q&A, and homework assignment' },
                    ],
                    resources: ['Lecture Slides', 'Reading Material', 'Practice Exercises'],
                }
            };

            const key = lessonTopic.toLowerCase().includes('python') ? 'python' : 'default';
            setLessonResult(mockLessons[key]);
            setIsGeneratingLesson(false);
        }, 1800);
    };

    // ---- Quiz Generator Logic ----
    const handleGenerateQuiz = () => {
        if (!quizTopic.trim()) return;
        setIsGeneratingQuiz(true);
        setQuizResult(null);

        setTimeout(() => {
            const count = parseInt(quizCount) || 5;
            const questions = [];
            for (let i = 1; i <= count; i++) {
                questions.push({
                    id: i,
                    question: `Sample question ${i} about ${quizTopic}`,
                    options: ['Option A', 'Option B', 'Option C', 'Option D'],
                    correct: Math.floor(Math.random() * 4),
                    explanation: `This tests the student's understanding of concept ${i} in ${quizTopic}.`,
                });
            }
            setQuizResult({ topic: quizTopic, questions });
            setIsGeneratingQuiz(false);
        }, 1500);
    };

    // ---- Content Reviewer Logic ----
    const handleReviewContent = () => {
        if (!contentInput.trim()) return;
        setIsReviewingContent(true);
        setContentReview(null);

        setTimeout(() => {
            const suggestions = [
                { type: 'clarity', icon: 'fas fa-eye', text: 'Consider simplifying the introduction — aim for a 6th-grade reading level for broader accessibility.' },
                { type: 'engagement', icon: 'fas fa-bolt', text: 'Add a real-world example or case study to make the content more relatable.' },
                { type: 'structure', icon: 'fas fa-sitemap', text: 'Break longer paragraphs into bullet points for better scannability.' },
                { type: 'seo', icon: 'fas fa-search', text: 'Include 2-3 relevant keywords in the first 100 words for better discoverability.' },
                { type: 'assessment', icon: 'fas fa-question-circle', text: 'Add a comprehension check or discussion prompt at the end.' },
            ];
            setContentReview({
                score: Math.floor(Math.random() * 20) + 75,
                suggestions,
                wordCount: contentInput.split(/\s+/).length,
                readTime: Math.max(1, Math.round(contentInput.split(/\s+/).length / 200)),
            });
            setIsReviewingContent(false);
        }, 1500);
    };

    // ---- Mock Student Data ----
    const studentInsights = {
        classAverage: 78,
        topPerformers: ['Emily Chen', 'James Wilson', 'Sarah Kim'],
        atRisk: ['Mike Ross', 'Lisa Park'],
        topicDifficulty: [
            { topic: 'Variables & Types', mastery: 92 },
            { topic: 'Functions', mastery: 85 },
            { topic: 'OOP Concepts', mastery: 67 },
            { topic: 'Error Handling', mastery: 58 },
            { topic: 'Async Programming', mastery: 45 },
        ],
        engagement: { viewRate: 87, completionRate: 72, quizParticipation: 91 },
    };

    return (
        <DashboardLayout role="teacher" menuItems={menuItems}>
            <h2 className="dash-header"><i className="fas fa-robot"></i> AI Teaching Co-pilot</h2>

            {/* Tool Selector Tabs */}
            <div className="ai-tool-tabs">
                {tools.map((tool, idx) => (
                    <button
                        key={idx}
                        className={`ai-tool-tab ${activeToolIdx === idx ? 'active' : ''}`}
                        onClick={() => setActiveToolIdx(idx)}
                        style={{ '--tool-color': tool.color }}
                    >
                        <i className={tool.icon}></i>
                        <span>{tool.title}</span>
                    </button>
                ))}
            </div>

            {/* Tool 0: Lesson Planner */}
            {activeToolIdx === 0 && (
                <div className="ai-tool-panel">
                    <div className="ai-tool-header">
                        <div className="ai-tool-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                            <i className="fas fa-chalkboard-teacher"></i>
                        </div>
                        <div>
                            <h3>AI Lesson Planner</h3>
                            <p>Generate structured lesson plans with objectives, activities, and assessments.</p>
                        </div>
                    </div>

                    <div className="ai-tool-form">
                        <div className="ai-form-group">
                            <label>Lesson Topic</label>
                            <input
                                type="text"
                                placeholder="e.g. Python Data Structures, React Hooks..."
                                value={lessonTopic}
                                onChange={(e) => setLessonTopic(e.target.value)}
                            />
                        </div>
                        <div className="ai-form-group">
                            <label>Difficulty Level</label>
                            <select value={lessonDifficulty} onChange={(e) => setLessonDifficulty(e.target.value)}>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <button
                            className="btn btn-primary ai-generate-btn"
                            onClick={handleGenerateLesson}
                            disabled={isGeneratingLesson || !lessonTopic.trim()}
                        >
                            {isGeneratingLesson ? (
                                <><i className="fas fa-spinner fa-spin"></i> Generating Lesson Plan...</>
                            ) : (
                                <><i className="fas fa-magic"></i> Generate Lesson Plan</>
                            )}
                        </button>
                    </div>

                    {lessonResult && (
                        <div className="ai-result-card fade-in">
                            <h4><i className="fas fa-clipboard-list"></i> {lessonResult.title}</h4>

                            <div className="ai-result-section">
                                <h5><i className="fas fa-bullseye"></i> Learning Objectives</h5>
                                <ul className="ai-checklist">
                                    {lessonResult.objectives.map((obj, i) => (
                                        <li key={i}><i className="fas fa-check-circle"></i> {obj}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="ai-result-section">
                                <h5><i className="fas fa-list-ol"></i> Lesson Outline</h5>
                                <div className="ai-timeline">
                                    {lessonResult.outline.map((item, i) => (
                                        <div key={i} className="ai-timeline-item">
                                            <div className="ai-timeline-dot"></div>
                                            <div className="ai-timeline-content">
                                                <strong>{item.phase}</strong>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="ai-result-section">
                                <h5><i className="fas fa-book-open"></i> Recommended Resources</h5>
                                <div className="ai-tag-list">
                                    {lessonResult.resources.map((r, i) => (
                                        <span key={i} className="ai-tag"><i className="fas fa-link"></i> {r}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Tool 1: Quiz Generator */}
            {activeToolIdx === 1 && (
                <div className="ai-tool-panel">
                    <div className="ai-tool-header">
                        <div className="ai-tool-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                            <i className="fas fa-pen-fancy"></i>
                        </div>
                        <div>
                            <h3>AI Quiz Generator</h3>
                            <p>Auto-generate quiz questions for your courses with answers and explanations.</p>
                        </div>
                    </div>

                    <div className="ai-tool-form">
                        <div className="ai-form-group">
                            <label>Quiz Topic</label>
                            <input
                                type="text"
                                placeholder="e.g. JavaScript Closures, SQL Joins..."
                                value={quizTopic}
                                onChange={(e) => setQuizTopic(e.target.value)}
                            />
                        </div>
                        <div className="ai-form-group">
                            <label>Number of Questions</label>
                            <select value={quizCount} onChange={(e) => setQuizCount(e.target.value)}>
                                <option value="3">3 Questions</option>
                                <option value="5">5 Questions</option>
                                <option value="10">10 Questions</option>
                            </select>
                        </div>
                        <button
                            className="btn btn-primary ai-generate-btn"
                            onClick={handleGenerateQuiz}
                            disabled={isGeneratingQuiz || !quizTopic.trim()}
                        >
                            {isGeneratingQuiz ? (
                                <><i className="fas fa-spinner fa-spin"></i> Generating Quiz...</>
                            ) : (
                                <><i className="fas fa-pen-fancy"></i> Generate Quiz</>
                            )}
                        </button>
                    </div>

                    {quizResult && (
                        <div className="ai-result-card fade-in">
                            <h4><i className="fas fa-file-alt"></i> Generated Quiz: {quizResult.topic}</h4>
                            <p className="ai-result-subtitle">{quizResult.questions.length} questions generated — ready to add to your course</p>

                            <div className="ai-quiz-list">
                                {quizResult.questions.map((q) => (
                                    <div key={q.id} className="ai-quiz-item">
                                        <div className="ai-quiz-number">Q{q.id}</div>
                                        <div className="ai-quiz-body">
                                            <p className="ai-quiz-question">{q.question}</p>
                                            <div className="ai-quiz-options">
                                                {q.options.map((opt, oi) => (
                                                    <div key={oi} className={`ai-quiz-option ${oi === q.correct ? 'correct' : ''}`}>
                                                        <span className="ai-option-letter">{String.fromCharCode(65 + oi)}</span>
                                                        {opt}
                                                        {oi === q.correct && <i className="fas fa-check"></i>}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="ai-quiz-explanation"><i className="fas fa-lightbulb"></i> {q.explanation}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Tool 2: Student Insights */}
            {activeToolIdx === 2 && (
                <div className="ai-tool-panel">
                    <div className="ai-tool-header">
                        <div className="ai-tool-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                            <i className="fas fa-chart-bar"></i>
                        </div>
                        <div>
                            <h3>Student Performance Insights</h3>
                            <p>AI-powered analytics on student engagement and topic mastery.</p>
                        </div>
                    </div>

                    <div className="ai-insights-grid">
                        {/* Class Overview */}
                        <div className="ai-insight-card">
                            <h5><i className="fas fa-graduation-cap"></i> Class Overview</h5>
                            <div className="ai-insight-stat">{studentInsights.classAverage}%</div>
                            <p>Class Average Score</p>
                            <div className="ai-progress-bar">
                                <div className="ai-progress-fill" style={{ width: `${studentInsights.classAverage}%`, background: '#10b981' }}></div>
                            </div>
                        </div>

                        {/* Engagement */}
                        <div className="ai-insight-card">
                            <h5><i className="fas fa-fire"></i> Engagement Metrics</h5>
                            <div className="ai-metric-list">
                                <div className="ai-metric">
                                    <span>View Rate</span>
                                    <strong>{studentInsights.engagement.viewRate}%</strong>
                                </div>
                                <div className="ai-metric">
                                    <span>Completion</span>
                                    <strong>{studentInsights.engagement.completionRate}%</strong>
                                </div>
                                <div className="ai-metric">
                                    <span>Quiz Participation</span>
                                    <strong>{studentInsights.engagement.quizParticipation}%</strong>
                                </div>
                            </div>
                        </div>

                        {/* Top Performers */}
                        <div className="ai-insight-card">
                            <h5><i className="fas fa-star"></i> Top Performers</h5>
                            <ul className="ai-student-list">
                                {studentInsights.topPerformers.map((name, i) => (
                                    <li key={i} className="ai-student-item top">
                                        <div className="ai-student-avatar">{name.charAt(0)}</div>
                                        <span>{name}</span>
                                        <i className="fas fa-trophy"></i>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* At Risk */}
                        <div className="ai-insight-card">
                            <h5><i className="fas fa-exclamation-triangle"></i> Needs Attention</h5>
                            <ul className="ai-student-list">
                                {studentInsights.atRisk.map((name, i) => (
                                    <li key={i} className="ai-student-item risk">
                                        <div className="ai-student-avatar risk">{name.charAt(0)}</div>
                                        <span>{name}</span>
                                        <i className="fas fa-arrow-down"></i>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Topic Difficulty */}
                    <div className="ai-result-card" style={{ marginTop: '1.5rem' }}>
                        <h4><i className="fas fa-signal"></i> Topic Mastery Heatmap</h4>
                        <div className="ai-mastery-list">
                            {studentInsights.topicDifficulty.map((t, i) => (
                                <div key={i} className="ai-mastery-row">
                                    <span className="ai-mastery-label">{t.topic}</span>
                                    <div className="ai-mastery-bar-wrap">
                                        <div
                                            className={`ai-mastery-bar ${t.mastery >= 80 ? 'high' : t.mastery >= 60 ? 'medium' : 'low'}`}
                                            style={{ width: `${t.mastery}%` }}
                                        >
                                            {t.mastery}%
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Tool 3: Content Reviewer */}
            {activeToolIdx === 3 && (
                <div className="ai-tool-panel">
                    <div className="ai-tool-header">
                        <div className="ai-tool-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                            <i className="fas fa-spell-check"></i>
                        </div>
                        <div>
                            <h3>AI Content Reviewer</h3>
                            <p>Paste your course content to get AI suggestions for clarity, engagement, and structure.</p>
                        </div>
                    </div>

                    <div className="ai-tool-form">
                        <div className="ai-form-group">
                            <label>Course Content</label>
                            <textarea
                                placeholder="Paste your lesson text, course description, or module content here..."
                                value={contentInput}
                                onChange={(e) => setContentInput(e.target.value)}
                                rows={6}
                            />
                        </div>
                        <button
                            className="btn btn-primary ai-generate-btn"
                            onClick={handleReviewContent}
                            disabled={isReviewingContent || !contentInput.trim()}
                        >
                            {isReviewingContent ? (
                                <><i className="fas fa-spinner fa-spin"></i> Analyzing Content...</>
                            ) : (
                                <><i className="fas fa-search"></i> Review Content</>
                            )}
                        </button>
                    </div>

                    {contentReview && (
                        <div className="ai-result-card fade-in">
                            <div className="ai-review-header">
                                <div className="ai-score-circle" style={{
                                    '--score-color': contentReview.score >= 85 ? '#10b981' : contentReview.score >= 70 ? '#f59e0b' : '#ef4444'
                                }}>
                                    <span className="ai-score-value">{contentReview.score}</span>
                                    <span className="ai-score-label">/ 100</span>
                                </div>
                                <div className="ai-review-meta">
                                    <p><i className="fas fa-file-word"></i> {contentReview.wordCount} words</p>
                                    <p><i className="fas fa-clock"></i> ~{contentReview.readTime} min read</p>
                                </div>
                            </div>

                            <h4><i className="fas fa-lightbulb"></i> Improvement Suggestions</h4>
                            <div className="ai-suggestions-list">
                                {contentReview.suggestions.map((s, i) => (
                                    <div key={i} className="ai-suggestion-item">
                                        <div className="ai-suggestion-icon">
                                            <i className={s.icon}></i>
                                        </div>
                                        <p>{s.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </DashboardLayout>
    );
};

export default TeacherAI;
