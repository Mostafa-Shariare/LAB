import { adminCourses } from '../../data/mockData';

const CourseManagement = () => {
    return (
        <section className="content-section active" style={{ paddingTop: '2rem', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--dark)' }}>Course Management</h2>

            <div className="dash-widget">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '2px solid #f1f5f9', color: 'var(--gray)' }}>
                                <th style={{ padding: '1rem' }}>Course Title</th>
                                <th style={{ padding: '1rem' }}>Instructor</th>
                                <th style={{ padding: '1rem' }}>Category</th>
                                <th style={{ padding: '1rem' }}>Status</th>
                                <th style={{ padding: '1rem' }}>Students</th>
                                <th style={{ padding: '1rem' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminCourses.map((course) => (
                                <tr key={course.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                                    <td style={{ padding: '1rem', fontWeight: 500 }}>{course.title}</td>
                                    <td style={{ padding: '1rem', color: 'var(--gray)' }}>{course.instructor}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{ fontSize: '0.85rem', background: '#f1f5f9', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                                            {course.category}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '12px',
                                            fontSize: '0.8rem',
                                            fontWeight: 500,
                                            background: course.status === 'Published' ? '#dcfce7' : course.status === 'Pending Review' ? '#fff7ed' : '#f1f5f9',
                                            color: course.status === 'Published' ? '#16a34a' : course.status === 'Pending Review' ? '#ea580c' : 'var(--gray)'
                                        }}>
                                            {course.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>{course.students.toLocaleString()}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <button style={{ padding: '0.4rem 0.8rem', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#fff', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            <i className="fas fa-edit"></i> Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default CourseManagement;
