import { assignments } from '../../data/mockData';

const Assignments = () => {
    return (
        <section className="content-section active" style={{ paddingTop: '2rem', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--dark)' }}>Assignments</h2>

            <div className="dash-widget">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '2px solid #f1f5f9', color: 'var(--gray)' }}>
                                <th style={{ padding: '1rem' }}>Assignment</th>
                                <th style={{ padding: '1rem' }}>Course</th>
                                <th style={{ padding: '1rem' }}>Student</th>
                                <th style={{ padding: '1rem' }}>Submitted</th>
                                <th style={{ padding: '1rem' }}>Status</th>
                                <th style={{ padding: '1rem' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map((assignment) => (
                                <tr key={assignment.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                                    <td style={{ padding: '1rem', fontWeight: 500 }}>{assignment.title}</td>
                                    <td style={{ padding: '1rem', color: 'var(--gray)' }}>{assignment.course}</td>
                                    <td style={{ padding: '1rem' }}>{assignment.student}</td>
                                    <td style={{ padding: '1rem', color: 'var(--gray)' }}>{assignment.submitted}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '12px',
                                            fontSize: '0.8rem',
                                            background: assignment.status === 'Graded' ? '#dcfce7' : '#fff7ed',
                                            color: assignment.status === 'Graded' ? '#16a34a' : '#ea580c',
                                            fontWeight: 500
                                        }}>
                                            {assignment.status === 'Graded' ? assignment.grade : 'Pending Review'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        {assignment.status === 'Pending' ? (
                                            <button style={{ padding: '0.4rem 0.8rem', border: 'none', borderRadius: '6px', background: 'var(--primary)', color: '#fff', cursor: 'pointer', fontSize: '0.85rem' }}>
                                                Grade
                                            </button>
                                        ) : (
                                            <button style={{ padding: '0.4rem 0.8rem', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#fff', cursor: 'pointer', fontSize: '0.85rem' }}>
                                                View
                                            </button>
                                        )}
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

export default Assignments;
