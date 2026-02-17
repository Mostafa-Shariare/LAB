import { useState } from 'react';
import { useApp } from '../context/AppContext';

const Courses = () => {
    const { allCourses, enrollInCourse, enrolledCourses } = useApp();
    const [filterCategory, setFilterCategory] = useState('All');

    const filteredCourses = filterCategory === 'All'
        ? allCourses
        : allCourses.filter(course => course.category === filterCategory);

    const isEnrolled = (courseTitle) => {
        return enrolledCourses.some(c => c.title === courseTitle);
    };

    const handleEnroll = (course) => {
        if (enrollInCourse(course)) {
            alert(`Successfully enrolled in ${course.title}!`);
        }
    };

    return (
        <section id="courses" className="content-section active">
            <div className="section-header">
                <h2>Explore Our Courses</h2>
                <div className="filter-bar">
                    {['All', 'Programming', 'Data Science', 'AI & ML', 'Soft Skills'].map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filterCategory === category ? 'active' : ''}`}
                            onClick={() => setFilterCategory(category)}
                        >
                            {category}<span className="filter-btn-effect"></span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="course-grid" id="course-container">
                {filteredCourses.length === 0 ? (
                    <div className="empty-state" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
                        <i className="fas fa-search" style={{ fontSize: '3rem', color: 'var(--gray)', marginBottom: '1rem' }}></i>
                        <p style={{ color: 'var(--gray)', fontSize: '1.1rem' }}>No courses found in this category</p>
                    </div>
                ) : (
                    filteredCourses.map((course, index) => (
                        <div key={index} className="course-card">
                            <div className="course-img">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    loading="lazy"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=' + encodeURIComponent(course.title); }}
                                />
                                <div className="course-img-overlay">
                                    <i className={course.icon}></i>
                                </div>
                                <span className="category-badge">{course.category}</span>
                            </div>
                            <div className="course-info">
                                <h3>{course.title}</h3>
                                <p>Instructor: {course.instructor}</p>
                                <div className="progress-container">
                                    {/* Show progress only if enrolled, else show popularity/info? 
                                        Actually, let's hide progress bar if not enrolled for "Explore" view, 
                                        or show 0% if we want uniformity. The original design had it. 
                                        Let's keep it but dynamic.
                                     */}
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: isEnrolled(course.title) ? `${enrolledCourses.find(c => c.title === course.title).progress}%` : '0%' }}></div>
                                    </div>
                                    <small>{isEnrolled(course.title) ? `${enrolledCourses.find(c => c.title === course.title).progress}% Complete` : 'Not Enrolled'}</small>
                                </div>

                                {isEnrolled(course.title) ? (
                                    <button className="btn btn-primary" style={{ width: '100%', backgroundColor: '#10b981', borderColor: '#10b981' }} disabled>
                                        Enrolled <i className="fas fa-check"></i>
                                    </button>
                                ) : (
                                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handleEnroll(course)}>
                                        Enroll Now<span className="btn-effect"></span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Courses;
