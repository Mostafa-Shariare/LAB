import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import VideoPlayer from '../components/VideoPlayer';

const CoursePlayer = () => {
    const { courseTitle } = useParams(); // Using title as ID for this demo
    const navigate = useNavigate();
    const { allCourses, updateProgress } = useApp();
    const [course, setCourse] = useState(null);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    // Mock Curriculum Data Generator
    const generateCurriculum = (courseTitle) => {
        return [
            {
                title: "Section 1: Introduction",
                lessons: [
                    { id: 1, title: "Welcome to the Course", duration: "5:20", type: "video", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Rick Roll for demo ;)
                    { id: 2, title: "Course Overview & Objectives", duration: "10:15", type: "video", videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE" },
                    { id: 3, title: "Setting Up Your Environment", duration: "15:00", type: "video", videoUrl: "https://www.youtube.com/embed/bJzb-RuUcMU" }
                ]
            },
            {
                title: "Section 2: Core Concepts",
                lessons: [
                    { id: 4, title: "Understanding the Basics", duration: "20:45", type: "video", videoUrl: "https://www.youtube.com/embed/pWOv9xVZLrE" },
                    { id: 5, title: "Advanced Topics Deep Dive", duration: "25:30", type: "video", videoUrl: "https://www.youtube.com/embed/reUZRyXxUs4" },
                    { id: 6, title: "Quiz: Test Your Knowledge", duration: "10:00", type: "quiz" }
                ]
            },
            {
                title: "Section 3: Project Work",
                lessons: [
                    { id: 7, title: "Project Brief & Requirements", duration: "08:15", type: "video", videoUrl: "https://www.youtube.com/embed/z9bZkjyUNCk" },
                    { id: 8, title: "Building the Solution", duration: "45:00", type: "video", videoUrl: "https://www.youtube.com/embed/8j0UDiN7my4" }
                ]
            }
        ];
    };

    useEffect(() => {
        // Decode title from URL
        const decodedTitle = decodeURIComponent(courseTitle);
        const foundCourse = allCourses.find(c => c.title === decodedTitle);

        if (foundCourse) {
            const curriculum = generateCurriculum(foundCourse.title);
            setCourse({ ...foundCourse, curriculum });
            setCurrentLesson(curriculum[0].lessons[0]);
        } else {
            // Redirect if course not found (or handle 404)
            navigate('/dashboard');
        }
    }, [courseTitle, allCourses, navigate]);

    const handleLessonChange = (lesson) => {
        setCurrentLesson(lesson);
        // Simulate progress update logic here if needed
    };

    if (!course || !currentLesson) return <div className="loading-spinner">Loading...</div>;

    return (
        <div className="course-player-container">
            {/* Sidebar - Curriculum */}
            <aside className="player-sidebar">
                <div className="player-sidebar-header">
                    <button onClick={() => navigate('/dashboard')} className="back-btn">
                        <i className="fas fa-arrow-left"></i> Back to Dashboard
                    </button>
                    <h3>{course.title}</h3>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <small>{course.progress}% Completed</small>
                </div>

                <div className="curriculum-list">
                    {course.curriculum.map((section, sIndex) => (
                        <div key={sIndex} className="curriculum-section">
                            <div className="section-title">
                                {section.title}
                            </div>
                            <ul className="lesson-list">
                                {section.lessons.map((lesson) => (
                                    <li
                                        key={lesson.id}
                                        onClick={() => handleLessonChange(lesson)}
                                        className={`lesson-item ${currentLesson.id === lesson.id ? 'active' : ''}`}
                                    >
                                        <div className="lesson-item-left">
                                            <i className={lesson.type === 'video' ? "fas fa-play-circle" : "fas fa-question-circle"}></i>
                                            <span>{lesson.title}</span>
                                        </div>
                                        <small className="lesson-duration">{lesson.duration}</small>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main className="player-main">
                <div className="player-content-wrapper">
                    {/* Video Player Section */}
                    <div className="video-section">
                        {currentLesson.type === 'video' ? (
                            <VideoPlayer videoUrl={currentLesson.videoUrl} title={currentLesson.title} />
                        ) : (
                            <div className="quiz-placeholder">
                                <i className="fas fa-clipboard-list"></i>
                                <h3>Quiz Time!</h3>
                                <p>This is a placeholder for the quiz interface.</p>
                                <button className="btn btn-primary">Start Quiz</button>
                            </div>
                        )}
                    </div>

                    {/* Lesson Info & Tabs */}
                    <div className="lesson-info">
                        <div className="lesson-header">
                            <h2>{currentLesson.title}</h2>
                            <div className="lesson-nav-btns">
                                <button className="btn btn-nav-prev"><i className="fas fa-chevron-left"></i> Previous</button>
                                <button className="btn btn-primary btn-nav-next">Next Lesson <i className="fas fa-chevron-right"></i></button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="player-tabs-container">
                            <div className="player-tab-header">
                                {['overview', 'notes', 'resources', 'discussion'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`player-tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="player-tab-content">
                                {activeTab === 'overview' && (
                                    <div className="tab-pane">
                                        <h4>About this Lesson</h4>
                                        <p>
                                            In this lesson, we will explore the fundamental concepts essential for mastering this topic.
                                            Pay close attention to the examples provided as they will be used in upcoming projects.
                                        </p>
                                    </div>
                                )}
                                {activeTab === 'notes' && (
                                    <div className="tab-pane">
                                        <textarea placeholder="Take your notes here..." className="notes-textarea"></textarea>
                                        <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Save Notes</button>
                                    </div>
                                )}
                                {activeTab === 'resources' && (
                                    <div className="tab-pane">
                                        <ul className="resource-list">
                                            <li className="resource-item">
                                                <span><i className="fas fa-file-pdf"></i> Lesson Slides.pdf</span>
                                                <a href="#">Download</a>
                                            </li>
                                            <li className="resource-item">
                                                <span><i className="fas fa-file-code"></i> Source Code.zip</span>
                                                <a href="#">Download</a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {activeTab === 'discussion' && (
                                    <div className="tab-pane">
                                        <p>Join the discussion with other students.</p>
                                        <div className="comment-placeholder">
                                            <div className="comment-author">Jane Doe</div>
                                            <p className="comment-text">Really helpful explanation! Thanks.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CoursePlayer;
