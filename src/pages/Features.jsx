import { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { getAIResponse, quizBank, reviewCode, assessmentQuestions, generateSchedule } from '../data/aiEngine';

const Features = () => {
    // ---- AI Tutor Chat State ----
    const [messages, setMessages] = useState([
        { text: "Hello! I'm your AI Tutor. Ask me about Python, JavaScript, Data Structures, Machine Learning, and more! 🚀", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatDisplayRef = useRef(null);

    // ---- Quiz State ----
    const [quizTopic, setQuizTopic] = useState('');
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);
    const [answerFeedback, setAnswerFeedback] = useState(null);

    // ---- Code Reviewer State ----
    const [codeInput, setCodeInput] = useState('');
    const [codeReviewResults, setCodeReviewResults] = useState(null);
    const [isReviewing, setIsReviewing] = useState(false);

    // ---- Study Schedule State ----
    const { enrolledCourses } = useApp();
    const [schedule, setSchedule] = useState(null);

    // ---- Learning Style Assessment State ----
    const [assessmentStep, setAssessmentStep] = useState(0);
    const [assessmentStarted, setAssessmentStarted] = useState(false);
    const [styleScores, setStyleScores] = useState({ visual: 0, auditory: 0, kinesthetic: 0, reading: 0 });
    const [assessmentDone, setAssessmentDone] = useState(false);

    // Auto-scroll chat
    useEffect(() => {
        if (chatDisplayRef.current) {
            chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // ========== AI TUTOR ==========
    const handleSendMessage = () => {
        if (inputValue.trim() === "" || isTyping) return;

        const userMsg = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        const query = inputValue;
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const botText = getAIResponse(query);
            setMessages(prev => [...prev, { text: botText, sender: 'bot' }]);
            setIsTyping(false);
        }, 800 + Math.random() * 700);
    };

    // ========== QUIZ GENERATOR ==========
    const startQuiz = (topic) => {
        const questions = quizBank[topic];
        if (!questions) return;
        setQuizTopic(topic);
        setCurrentQuiz(questions);
        setCurrentQuestionIdx(0);
        setQuizScore(0);
        setQuizFinished(false);
        setSelectedAnswer(null);
        setAnswerFeedback(null);
    };

    const handleQuizAnswer = (answerIdx) => {
        if (selectedAnswer !== null) return; // Already answered
        setSelectedAnswer(answerIdx);
        const isCorrect = answerIdx === currentQuiz[currentQuestionIdx].correct;
        if (isCorrect) setQuizScore(prev => prev + 1);
        setAnswerFeedback(isCorrect ? 'correct' : 'wrong');

        setTimeout(() => {
            if (currentQuestionIdx < currentQuiz.length - 1) {
                setCurrentQuestionIdx(prev => prev + 1);
                setSelectedAnswer(null);
                setAnswerFeedback(null);
            } else {
                setQuizFinished(true);
            }
        }, 1200);
    };

    const resetQuiz = () => {
        setCurrentQuiz(null);
        setQuizTopic('');
        setQuizFinished(false);
        setSelectedAnswer(null);
        setAnswerFeedback(null);
    };

    // ========== CODE REVIEWER ==========
    const handleCodeReview = () => {
        if (!codeInput.trim()) return;
        setIsReviewing(true);
        setCodeReviewResults(null);

        setTimeout(() => {
            const results = reviewCode(codeInput);
            setCodeReviewResults(results);
            setIsReviewing(false);
        }, 1500);
    };

    // ========== STUDY SCHEDULE ==========
    const handleGenerateSchedule = () => {
        setSchedule(generateSchedule(enrolledCourses));
    };

    // ========== LEARNING STYLE ==========
    const handleAssessmentAnswer = (style) => {
        setStyleScores(prev => ({ ...prev, [style]: prev[style] + 1 }));

        if (assessmentStep < assessmentQuestions.length - 1) {
            setAssessmentStep(prev => prev + 1);
        } else {
            setAssessmentDone(true);
        }
    };

    const getTopStyle = () => {
        const entries = Object.entries(styleScores);
        entries.sort((a, b) => b[1] - a[1]);
        return entries[0];
    };

    const resetAssessment = () => {
        setAssessmentStep(0);
        setAssessmentStarted(false);
        setStyleScores({ visual: 0, auditory: 0, kinesthetic: 0, reading: 0 });
        setAssessmentDone(false);
    };

    return (
        <section id="features" className="content-section active">
            <div className="section-header">
                <h2>AI-Powered Learning Tools</h2>
            </div>
            <div className="features-container">

                {/* ===== AI TUTOR CHAT ===== */}
                <div className="feature-card chat-box">
                    <h3><i className="fas fa-robot"></i> AI Tutor Chat</h3>
                    <div className="chat-display" id="chat-display" ref={chatDisplayRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`msg ${msg.sender}`}>
                                {msg.text.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="msg bot typing-indicator">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        )}
                    </div>
                    <div className="chat-input-area">
                        <input
                            type="text"
                            id="chat-input"
                            placeholder="Ask about Python, JavaScript, ML..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button onClick={handleSendMessage} disabled={isTyping}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>

                {/* ===== LEARNING ANALYTICS ===== */}
                <div className="feature-card analytics">
                    <h3><i className="fas fa-chart-line"></i> Learning Analytics</h3>
                    <div className="chart-mock">
                        <div className="bar-container">
                            <label>Weekly Progress</label>
                            <div className="bar-bg">
                                <div className="bar-fill" style={{ width: `${Math.min(enrolledCourses.length * 15 + 25, 100)}%` }}>
                                    {Math.min(enrolledCourses.length * 15 + 25, 100)}%
                                </div>
                            </div>
                        </div>
                        <div className="bar-container">
                            <label>Quiz Accuracy</label>
                            <div className="bar-bg">
                                <div className="bar-fill" style={{ width: quizFinished ? `${Math.round(quizScore / (currentQuiz?.length || 1) * 100)}%` : '72%' }}>
                                    {quizFinished ? `${Math.round(quizScore / (currentQuiz?.length || 1) * 100)}%` : '72%'}
                                </div>
                            </div>
                        </div>
                        <div className="bar-container">
                            <label>Courses Enrolled</label>
                            <div className="bar-bg">
                                <div className="bar-fill" style={{ width: `${Math.min(enrolledCourses.length * 10, 100)}%`, background: 'linear-gradient(135deg, #10b981, #34d399)' }}>
                                    {enrolledCourses.length}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== AI QUIZ GENERATOR ===== */}
                <div className="feature-card quiz-mock">
                    <h3><i className="fas fa-pen-fancy"></i> AI Quiz Generator</h3>

                    {!currentQuiz ? (
                        <div>
                            <p>Choose a topic to generate a practice quiz:</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                                {Object.keys(quizBank).map(topic => (
                                    <button
                                        key={topic}
                                        className="filter-btn"
                                        onClick={() => startQuiz(topic)}
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        {topic}<span className="filter-btn-effect"></span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : quizFinished ? (
                        <div className="quiz-results" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                {quizScore === currentQuiz.length ? '🏆' : quizScore >= currentQuiz.length / 2 ? '🎉' : '📚'}
                            </div>
                            <h4>Quiz Complete!</h4>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: '1rem 0' }}>
                                {quizScore} / {currentQuiz.length}
                            </p>
                            <p style={{ color: 'var(--gray)' }}>
                                {quizScore === currentQuiz.length ? 'Perfect score! You\'re a master!' :
                                    quizScore >= currentQuiz.length / 2 ? 'Good job! Keep learning!' :
                                        'Keep practicing! You\'ll get there!'}
                            </p>
                            <button className="btn btn-primary" onClick={resetQuiz} style={{ marginTop: '1rem' }}>
                                Try Another Topic <span className="btn-effect"></span>
                            </button>
                        </div>
                    ) : (
                        <div className="quiz-box">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <small style={{ color: 'var(--gray)' }}>
                                    Question {currentQuestionIdx + 1} of {currentQuiz.length}
                                </small>
                                <small style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                                    Score: {quizScore}
                                </small>
                            </div>
                            <div className="progress-bar" style={{ marginBottom: '1rem' }}>
                                <div className="progress-fill" style={{ width: `${((currentQuestionIdx + 1) / currentQuiz.length) * 100}%`, transition: 'width 0.3s ease' }}></div>
                            </div>
                            <p className="question">{currentQuiz[currentQuestionIdx].question}</p>
                            {currentQuiz[currentQuestionIdx].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    className={`quiz-opt ${selectedAnswer === idx
                                        ? (idx === currentQuiz[currentQuestionIdx].correct ? 'correct' : 'wrong')
                                        : (selectedAnswer !== null && idx === currentQuiz[currentQuestionIdx].correct ? 'correct' : '')
                                        }`}
                                    onClick={() => handleQuizAnswer(idx)}
                                    disabled={selectedAnswer !== null}
                                    style={{
                                        borderColor: selectedAnswer === idx
                                            ? (idx === currentQuiz[currentQuestionIdx].correct ? '#10b981' : '#ef4444')
                                            : (selectedAnswer !== null && idx === currentQuiz[currentQuestionIdx].correct ? '#10b981' : ''),
                                        backgroundColor: selectedAnswer === idx
                                            ? (idx === currentQuiz[currentQuestionIdx].correct ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)')
                                            : (selectedAnswer !== null && idx === currentQuiz[currentQuestionIdx].correct ? 'rgba(16, 185, 129, 0.1)' : ''),
                                    }}
                                >
                                    {option}
                                    {selectedAnswer !== null && idx === currentQuiz[currentQuestionIdx].correct && (
                                        <i className="fas fa-check" style={{ marginLeft: '0.5rem', color: '#10b981' }}></i>
                                    )}
                                    {selectedAnswer === idx && idx !== currentQuiz[currentQuestionIdx].correct && (
                                        <i className="fas fa-times" style={{ marginLeft: '0.5rem', color: '#ef4444' }}></i>
                                    )}
                                </button>
                            ))}
                            {answerFeedback && (
                                <p style={{
                                    marginTop: '0.5rem',
                                    fontWeight: 'bold',
                                    color: answerFeedback === 'correct' ? '#10b981' : '#ef4444'
                                }}>
                                    {answerFeedback === 'correct' ? '✓ Correct!' : '✗ Wrong! See the correct answer above.'}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* ===== AI CODE REVIEWER ===== */}
                <div className="feature-card code-review">
                    <h3><i className="fas fa-bug"></i> AI Code Reviewer</h3>
                    <p>Paste your code below for instant AI feedback:</p>
                    <textarea
                        value={codeInput}
                        onChange={(e) => setCodeInput(e.target.value)}
                        placeholder={`// Paste your JavaScript code here...\nvar x = 10;\nif (x == "10") {\n  console.log("equal");\n}`}
                        style={{
                            width: '100%',
                            minHeight: '120px',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            fontFamily: "'Courier New', monospace",
                            fontSize: '0.85rem',
                            backgroundColor: '#1e293b',
                            color: '#f8fafc',
                            resize: 'vertical',
                            marginTop: '0.5rem'
                        }}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={handleCodeReview}
                        disabled={isReviewing || !codeInput.trim()}
                        style={{ marginTop: '0.75rem', width: '100%' }}
                    >
                        {isReviewing ? (
                            <><i className="fas fa-spinner fa-spin"></i> Reviewing...</>
                        ) : (
                            <>Review Code <i className="fas fa-search"></i><span className="btn-effect"></span></>
                        )}
                    </button>

                    {codeReviewResults && (
                        <div style={{ marginTop: '1rem' }}>
                            {codeReviewResults.map((issue, idx) => (
                                <div key={idx} style={{
                                    padding: '0.75rem',
                                    marginBottom: '0.5rem',
                                    borderRadius: '8px',
                                    borderLeft: `4px solid ${issue.severity === 'error' ? '#ef4444' :
                                        issue.severity === 'warning' ? '#f59e0b' :
                                            issue.severity === 'success' ? '#10b981' : '#3b82f6'}`,
                                    backgroundColor: issue.severity === 'error' ? 'rgba(239,68,68,0.05)' :
                                        issue.severity === 'warning' ? 'rgba(245,158,11,0.05)' :
                                            issue.severity === 'success' ? 'rgba(16,185,129,0.05)' : 'rgba(59,130,246,0.05)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                        <i className={`fas ${issue.severity === 'error' ? 'fa-times-circle' :
                                            issue.severity === 'warning' ? 'fa-exclamation-triangle' :
                                                issue.severity === 'success' ? 'fa-check-circle' : 'fa-info-circle'}`}
                                            style={{
                                                color: issue.severity === 'error' ? '#ef4444' :
                                                    issue.severity === 'warning' ? '#f59e0b' :
                                                        issue.severity === 'success' ? '#10b981' : '#3b82f6'
                                            }}
                                        ></i>
                                        <strong style={{ textTransform: 'capitalize', fontSize: '0.85rem' }}>
                                            {issue.severity}{issue.line > 0 ? ` — Line ${issue.line}` : ''}
                                        </strong>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--dark)' }}>{issue.message}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* ===== SMART STUDY SCHEDULE ===== */}
                <div className="feature-card schedule">
                    <h3><i className="fas fa-calendar-alt"></i> Smart Study Schedule</h3>
                    <p>AI-optimized learning plan based on your enrolled courses.</p>

                    {!schedule ? (
                        <button className="btn btn-primary" onClick={handleGenerateSchedule} style={{ marginTop: '1rem', width: '100%' }}>
                            <i className="fas fa-magic"></i> Generate My Schedule<span className="btn-effect"></span>
                        </button>
                    ) : (
                        <div className="schedule-mock" style={{ marginTop: '1rem' }}>
                            {schedule.map((item, idx) => (
                                <div key={idx} className="schedule-item" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '0.75rem',
                                    marginBottom: '0.5rem',
                                    background: idx === 0 ? 'rgba(79,70,229,0.08)' : '#f8fafc',
                                    borderRadius: '8px',
                                    borderLeft: `3px solid ${idx === 0 ? 'var(--primary)' : '#e2e8f0'}`
                                }}>
                                    <div className="time" style={{ fontWeight: 'bold', minWidth: '80px', color: 'var(--primary)', fontSize: '0.85rem' }}>
                                        {item.time}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div className="task" style={{ fontWeight: '600', fontSize: '0.9rem' }}>{item.task}</div>
                                        <small style={{ color: 'var(--gray)' }}>{item.tip}</small>
                                    </div>
                                </div>
                            ))}
                            <button
                                className="btn btn-secondary"
                                onClick={() => setSchedule(null)}
                                style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem' }}
                            >
                                <i className="fas fa-redo"></i> Regenerate<span className="btn-effect"></span>
                            </button>
                        </div>
                    )}
                </div>

                {/* ===== LEARNING STYLE ASSESSMENT ===== */}
                <div className="feature-card learning-style">
                    <h3><i className="fas fa-brain"></i> Style Assessment</h3>

                    {!assessmentStarted && !assessmentDone ? (
                        <div style={{ textAlign: 'center' }}>
                            <p>Discover your learning style to get personalized recommendations.</p>
                            <button className="btn btn-primary" onClick={() => setAssessmentStarted(true)} style={{ marginTop: '1rem' }}>
                                <i className="fas fa-play"></i> Start Assessment<span className="btn-effect"></span>
                            </button>
                        </div>
                    ) : assessmentDone ? (
                        <div>
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
                                <h4>Your Learning Style</h4>
                                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'capitalize' }}>
                                    {getTopStyle()[0]} Learner
                                </p>
                            </div>
                            <div className="style-chart">
                                {Object.entries(styleScores).map(([style, score]) => {
                                    const maxPossible = assessmentQuestions.length;
                                    const pct = Math.round((score / maxPossible) * 100);
                                    return (
                                        <div key={style} className={`style-bar ${style}`} style={{ width: `${Math.max(pct, 10)}%` }}>
                                            <span>{style.charAt(0).toUpperCase() + style.slice(1)} {pct}%</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <button className="btn btn-secondary" onClick={resetAssessment} style={{ marginTop: '1rem', width: '100%', padding: '0.5rem' }}>
                                <i className="fas fa-redo"></i> Retake<span className="btn-effect"></span>
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <small style={{ color: 'var(--gray)' }}>
                                    Question {assessmentStep + 1} of {assessmentQuestions.length}
                                </small>
                            </div>
                            <div className="progress-bar" style={{ marginBottom: '1rem' }}>
                                <div className="progress-fill" style={{ width: `${((assessmentStep + 1) / assessmentQuestions.length) * 100}%`, transition: 'width 0.3s ease' }}></div>
                            </div>
                            <p style={{ fontWeight: '600', marginBottom: '0.75rem' }}>
                                {assessmentQuestions[assessmentStep].question}
                            </p>
                            {assessmentQuestions[assessmentStep].options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    className="quiz-opt"
                                    onClick={() => handleAssessmentAnswer(opt.style)}
                                    style={{ marginBottom: '0.5rem' }}
                                >
                                    {opt.text}<span className="quiz-opt-effect"></span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Features;
