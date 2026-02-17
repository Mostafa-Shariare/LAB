import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        category: '',
        price: '',
        level: 'Beginner',
        thumbnail: null
    });
    const [sections, setSections] = useState([
        { id: 1, title: 'Introduction', lessons: [] }
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddSection = () => {
        setSections([...sections, { id: sections.length + 1, title: `Section ${sections.length + 1}`, lessons: [] }]);
    };

    const handleAddLesson = (sectionId) => {
        setSections(sections.map(sec => {
            if (sec.id === sectionId) {
                return { ...sec, lessons: [...sec.lessons, { id: Date.now(), title: '' }] };
            }
            return sec;
        }));
    };

    const handleLessonChange = (sectionId, lessonId, value) => {
        setSections(sections.map(sec => {
            if (sec.id === sectionId) {
                const updatedLessons = sec.lessons.map(lesson =>
                    lesson.id === lessonId ? { ...lesson, title: value } : lesson
                );
                return { ...sec, lessons: updatedLessons };
            }
            return sec;
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to backend
        console.log("Course Data:", { ...formData, curriculum: sections });
        alert("Course Created Successfully! (Demo)");
        navigate('/teacher');
    };

    return (
        <div className="auth-container" style={{ padding: '2rem 1rem', minHeight: '90vh', alignItems: 'flex-start' }}>
            <div className="auth-card" style={{ maxWidth: '800px', margin: '2rem auto' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>Create New Course</h2>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
                    <div style={{ height: '4px', width: '30px', background: step >= 1 ? 'var(--primary)' : '#e2e8f0', borderRadius: '2px' }}></div>
                    <div style={{ height: '4px', width: '30px', background: step >= 2 ? 'var(--primary)' : '#e2e8f0', borderRadius: '2px' }}></div>
                </div>

                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="step-content">
                            <h3 style={{ textAlign: 'left', marginBottom: '1.5rem', color: 'var(--dark)' }}>Basic Information</h3>
                            <div className="form-group">
                                <label>Course Title</label>
                                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Complete Python Bootcamp" required />
                            </div>
                            <div className="form-group">
                                <label>Subtitle</label>
                                <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} placeholder="e.g. Learn Python from scratch to expert" />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select name="category" value={formData.category} onChange={handleChange} style={{ width: '100%', padding: '1rem', border: '2px solid #e2e8f0', borderRadius: '10px', background: '#f8fafc' }}>
                                        <option value="">Select Category</option>
                                        <option value="Programming">Programming</option>
                                        <option value="Design">Design</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Business">Business</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Level</label>
                                    <select name="level" value={formData.level} onChange={handleChange} style={{ width: '100%', padding: '1rem', border: '2px solid #e2e8f0', borderRadius: '10px', background: '#f8fafc' }}>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Price ($)</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="e.g. 49.99" />
                            </div>
                            <button type="button" className="btn btn-primary btn-block" onClick={() => setStep(2)}>Next: Curriculum</button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step-content">
                            <h3 style={{ textAlign: 'left', marginBottom: '1.5rem', color: 'var(--dark)' }}>Curriculum Builder</h3>

                            <div className="curriculum-builder" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                                {sections.map((section, index) => (
                                    <div key={section.id} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{ fontWeight: '600' }}>{section.title}</span>
                                            <small style={{ color: 'var(--gray)' }}>Section {index + 1}</small>
                                        </div>

                                        <div className="lessons-list" style={{ marginLeft: '1rem', borderLeft: '2px solid #e2e8f0', paddingLeft: '1rem' }}>
                                            {section.lessons.map((lesson, lIndex) => (
                                                <div key={lesson.id} style={{ marginBottom: '0.5rem' }}>
                                                    <input
                                                        type="text"
                                                        placeholder={`Lesson ${lIndex + 1} Title`}
                                                        value={lesson.title}
                                                        onChange={(e) => handleLessonChange(section.id, lesson.id, e.target.value)}
                                                        style={{ width: '100%', padding: '0.5rem', fontSize: '0.9rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                                                    />
                                                </div>
                                            ))}
                                            <button type="button" onClick={() => handleAddLesson(section.id)} style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '0.85rem', cursor: 'pointer', marginTop: '0.5rem' }}>
                                                + Add Lesson
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button type="button" onClick={handleAddSection} style={{ width: '100%', padding: '0.8rem', border: '2px dashed #cbd5e1', borderRadius: '8px', color: 'var(--gray)', background: 'none', cursor: 'pointer' }}>
                                    + Add New Section
                                </button>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button type="button" className="btn" onClick={() => setStep(1)} style={{ flex: 1, background: '#f1f5f9', color: 'var(--dark)' }}>Back</button>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Create Course</button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CreateCourse;
