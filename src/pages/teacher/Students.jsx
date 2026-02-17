import { students } from '../../data/mockData';

const Students = () => {
    return (
        <section className="content-section active" style={{ paddingTop: '2rem', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--dark)' }}>Enrolled Students</h2>

            <div className="dash-widget">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '2px solid #f1f5f9', color: 'var(--gray)' }}>
                                <th style={{ padding: '1rem' }}>Student Name</th>
                                <th style={{ padding: '1rem' }}>Course</th>
                                <th style={{ padding: '1rem' }}>Progress</th>
                                <th style={{ padding: '1rem' }}>Last Active</th>
                                <th style={{ padding: '1rem' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} style={{ borderBottom: '1px solid #f8fafc' }}>
                                    <td style={{ padding: '1rem', fontWeight: 500 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ width: '32px', height: '32px', background: '#e0f2fe', color: '#0369a1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', overflow: 'hidden' }}>
                                                {student.avatar ? <img src={student.avatar} alt={student.name} style={{ width: '100%', height: '100%' }} /> : student.name.charAt(0)}
                                            </div>
                                            {student.name}
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', color: 'var(--gray)' }}>{student.course}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{ width: '100px', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                                                <div style={{ width: `${student.progress}%`, height: '100%', background: student.progress === 100 ? '#10b981' : '#3b82f6' }}></div>
                                            </div>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>{student.progress}%</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', color: 'var(--gray)' }}>{student.lastActive}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <button style={{ padding: '0.4rem 0.8rem', border: '1px solid #cbd5e1', borderRadius: '6px', background: '#fff', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            Message
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

export default Students;
