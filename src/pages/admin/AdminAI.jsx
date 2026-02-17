import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useNavigate } from 'react-router-dom';

const AdminAI = () => {
    const navigate = useNavigate();
    const [activeToolIdx, setActiveToolIdx] = useState(0);

    // ---- Report Generator State ----
    const [reportType, setReportType] = useState('weekly');
    const [isGeneratingReport, setIsGeneratingReport] = useState(false);
    const [reportResult, setReportResult] = useState(null);

    const menuItems = [
        { label: 'Dashboard', icon: 'fas fa-tachometer-alt', active: false, onClick: () => navigate('/admin') },
        { label: 'Users', icon: 'fas fa-users', active: false, onClick: () => navigate('/admin/users') },
        { label: 'Courses', icon: 'fas fa-book', active: false, onClick: () => navigate('/admin/courses') },
        { label: 'AI Analyst', icon: 'fas fa-robot', active: true, onClick: () => navigate('/admin/ai') },
        { label: 'Settings', icon: 'fas fa-cog', active: false, onClick: () => navigate('/admin/settings') },
    ];

    const tools = [
        { title: 'Analytics', icon: 'fas fa-chart-pie', color: '#3b82f6' },
        { title: 'Moderation', icon: 'fas fa-shield-alt', color: '#ef4444' },
        { title: 'User Insights', icon: 'fas fa-user-chart', color: '#10b981' },
        { title: 'AI Reports', icon: 'fas fa-file-invoice', color: '#8b5cf6' },
    ];

    // ---- Mock Analytics Data ----
    const analyticsData = {
        userGrowth: [
            { month: 'Sep', users: 1850 },
            { month: 'Oct', users: 2200 },
            { month: 'Nov', users: 2750 },
            { month: 'Dec', users: 3100 },
            { month: 'Jan', users: 3620 },
            { month: 'Feb', users: 4150 },
        ],
        topCourses: [
            { name: 'Python for Data Science', enrollments: 1245, rating: 4.8 },
            { name: 'Web Development Bootcamp', enrollments: 980, rating: 4.7 },
            { name: 'Machine Learning A-Z', enrollments: 876, rating: 4.9 },
            { name: 'React & Node.js', enrollments: 654, rating: 4.6 },
            { name: 'Cloud Computing Essentials', enrollments: 432, rating: 4.5 },
        ],
        revenueTrend: [
            { month: 'Sep', revenue: 12500 },
            { month: 'Oct', revenue: 15800 },
            { month: 'Nov', revenue: 18200 },
            { month: 'Dec', revenue: 22100 },
            { month: 'Jan', revenue: 25600 },
            { month: 'Feb', revenue: 29400 },
        ],
        kpis: [
            { label: 'DAU / MAU', value: '42%', trend: '+5%' },
            { label: 'Avg. Session', value: '18 min', trend: '+2 min' },
            { label: 'Churn Rate', value: '3.2%', trend: '-0.8%' },
            { label: 'NPS Score', value: '72', trend: '+4' },
        ],
    };

    // ---- Mock Moderation Queue ----
    const moderationQueue = [
        { id: 1, type: 'Review', content: '"This course is terrible, total scam!!!"', user: 'anon_user_42', risk: 'high', aiLabel: 'Potentially Abusive' },
        { id: 2, type: 'Comment', content: 'Check out my website for free courses!', user: 'spambot_99', risk: 'high', aiLabel: 'Spam / Promotional' },
        { id: 3, type: 'Course Description', content: 'Learn advanced hacking techniques for penetration testing and cybersecurity...', user: 'cyber_prof', risk: 'medium', aiLabel: 'Needs Human Review' },
        { id: 4, type: 'Forum Post', content: 'Can anyone share their project code? I need help understanding the solution.', user: 'student_23', risk: 'low', aiLabel: 'Legitimate' },
        { id: 5, type: 'Review', content: 'Great course, very informative! The instructor explains things clearly.', user: 'jane_doe', risk: 'low', aiLabel: 'Legitimate' },
    ];

    // ---- Mock User Behavior Data ----
    const userBehavior = {
        peakHours: [
            { hour: '8 AM', activity: 35 },
            { hour: '10 AM', activity: 68 },
            { hour: '12 PM', activity: 82 },
            { hour: '2 PM', activity: 75 },
            { hour: '4 PM', activity: 60 },
            { hour: '6 PM', activity: 90 },
            { hour: '8 PM', activity: 95 },
            { hour: '10 PM', activity: 70 },
        ],
        churnRisk: [
            { segment: 'New Users (0-7 days)', risk: 45, count: 320 },
            { segment: 'Casual (8-30 days)', risk: 25, count: 580 },
            { segment: 'Active (31-90 days)', risk: 12, count: 890 },
            { segment: 'Power Users (90+ days)', risk: 5, count: 1200 },
        ],
        deviceBreakdown: [
            { device: 'Desktop', pct: 52 },
            { device: 'Mobile', pct: 38 },
            { device: 'Tablet', pct: 10 },
        ],
    };

    // ---- Report Generator Logic ----
    const handleGenerateReport = () => {
        setIsGeneratingReport(true);
        setReportResult(null);

        setTimeout(() => {
            const reports = {
                weekly: {
                    title: 'Weekly Platform Summary',
                    period: 'Feb 10 - Feb 17, 2026',
                    highlights: [
                        { metric: 'New Registrations', value: '342', change: '+18%', icon: 'fas fa-user-plus' },
                        { metric: 'Course Completions', value: '89', change: '+12%', icon: 'fas fa-graduation-cap' },
                        { metric: 'Revenue', value: '$7,250', change: '+9%', icon: 'fas fa-dollar-sign' },
                        { metric: 'Active Users', value: '1,847', change: '+22%', icon: 'fas fa-users' },
                    ],
                    topIssue: 'Server response time increased 15% during peak hours (6-9 PM). Consider scaling infrastructure.',
                    recommendation: 'The "Python for Data Science" course saw a 40% enrollment spike. Consider promoting the advanced follow-up course.',
                },
                revenue: {
                    title: 'Revenue Analysis Report',
                    period: 'January 2026',
                    highlights: [
                        { metric: 'Total Revenue', value: '$25,600', change: '+16%', icon: 'fas fa-coins' },
                        { metric: 'ARPU', value: '$8.20', change: '+5%', icon: 'fas fa-chart-line' },
                        { metric: 'Subscription Revenue', value: '$18,400', change: '+20%', icon: 'fas fa-credit-card' },
                        { metric: 'One-time Purchases', value: '$7,200', change: '+8%', icon: 'fas fa-shopping-cart' },
                    ],
                    topIssue: 'Premium conversion rate dropped 3% for mobile users. Mobile checkout UX may need optimization.',
                    recommendation: 'Bundle pricing for 3+ courses shows 35% higher conversion. Expand bundle offerings.',
                },
                growth: {
                    title: 'User Growth Report',
                    period: 'Q4 2025 → Q1 2026',
                    highlights: [
                        { metric: 'Total Users', value: '4,150', change: '+45%', icon: 'fas fa-users' },
                        { metric: 'Monthly Active', value: '2,890', change: '+38%', icon: 'fas fa-fire' },
                        { metric: 'Avg. Session Duration', value: '22 min', change: '+15%', icon: 'fas fa-clock' },
                        { metric: 'Referral Signups', value: '18%', change: '+6%', icon: 'fas fa-share-alt' },
                    ],
                    topIssue: 'Organic search traffic accounts for only 12% of signups. SEO optimization recommended.',
                    recommendation: 'Social media referral campaign generated 3x ROI. Scale Facebook/LinkedIn ad budget by 50%.',
                },
            };
            setReportResult(reports[reportType]);
            setIsGeneratingReport(false);
        }, 2000);
    };

    return (
        <DashboardLayout role="admin" menuItems={menuItems}>
            <h2 className="dash-header"><i className="fas fa-robot"></i> Platform Insight AI</h2>

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

            {/* Tool 0: Platform Analytics */}
            {activeToolIdx === 0 && (
                <div className="ai-tool-panel">
                    <div className="ai-tool-header">
                        <div className="ai-tool-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                            <i className="fas fa-chart-pie"></i>
                        </div>
                        <div>
                            <h3>Platform Analytics Dashboard</h3>
                            <p>AI-powered analytics on platform performance, growth trends, and course popularity.</p>
                        </div>
                    </div>

                    {/* KPI Cards */}
                    <div className="ai-kpi-grid">
                        {analyticsData.kpis.map((kpi, i) => (
                            <div key={i} className="ai-kpi-card">
                                <p className="ai-kpi-label">{kpi.label}</p>
                                <h3 className="ai-kpi-value">{kpi.value}</h3>
                                <span className={`ai-kpi-trend ${kpi.trend.startsWith('+') || kpi.trend.startsWith('-0') ? '' : 'negative'}`}>
                                    <i className={`fas ${kpi.trend.startsWith('-') && !kpi.label.includes('Churn') ? 'fa-arrow-down' : 'fa-arrow-up'}`}></i> {kpi.trend}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* User Growth Chart (Mock Bar Chart) */}
                    <div className="ai-result-card" style={{ marginTop: '1.5rem' }}>
                        <h4><i className="fas fa-chart-bar"></i> User Growth Trend</h4>
                        <div className="ai-bar-chart">
                            {analyticsData.userGrowth.map((d, i) => (
                                <div key={i} className="ai-bar-col">
                                    <div className="ai-bar-value">{(d.users / 1000).toFixed(1)}k</div>
                                    <div className="ai-bar" style={{ height: `${(d.users / 4500) * 100}%` }}></div>
                                    <div className="ai-bar-label">{d.month}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Courses */}
                    <div className="ai-result-card" style={{ marginTop: '1.5rem' }}>
                        <h4><i className="fas fa-trophy"></i> Top Performing Courses</h4>
                        <div className="table-responsive">
                            <table className="dash-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Course Name</th>
                                        <th>Enrollments</th>
                                        <th>Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {analyticsData.topCourses.map((c, i) => (
                                        <tr key={i}>
                                            <td><strong>{i + 1}</strong></td>
                                            <td>{c.name}</td>
                                            <td>{c.enrollments.toLocaleString()}</td>
                                            <td><span className="status-badge status-active">⭐ {c.rating}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Tool 1: Content Moderation */}
            {activeToolIdx === 1 && (
                <div className="ai-tool-panel">
                    <div className="ai-tool-header">
                        <div className="ai-tool-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <div>
                            <h3>AI Content Moderation</h3>
                            <p>Auto-classified content queue. AI flags potential issues for your review.</p>
                        </div>
                    </div>

                    <div className="ai-moderation-queue">
                        {moderationQueue.map((item) => (
                            <div key={item.id} className={`ai-mod-item risk-${item.risk}`}>
                                <div className="ai-mod-header">
                                    <span className={`ai-mod-risk risk-${item.risk}`}>
                                        <i className={`fas ${item.risk === 'high' ? 'fa-exclamation-circle' : item.risk === 'medium' ? 'fa-exclamation-triangle' : 'fa-check-circle'}`}></i>
                                        {item.risk.toUpperCase()}
                                    </span>
                                    <span className="ai-mod-type">{item.type}</span>
                                    <span className="ai-mod-label">{item.aiLabel}</span>
                                </div>
                                <p className="ai-mod-content">"{item.content}"</p>
                                <div className="ai-mod-footer">
                                    <span className="ai-mod-user"><i className="fas fa-user"></i> {item.user}</span>
                                    <div className="ai-mod-actions">
                                        <button className="ai-mod-btn approve" title="Approve"><i className="fas fa-check"></i></button>
                                        <button className="ai-mod-btn reject" title="Reject"><i className="fas fa-times"></i></button>
                                        <button className="ai-mod-btn review" title="Flag for Review"><i className="fas fa-flag"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Tool 2: User Behavior Insights */}
            {activeToolIdx === 2 && (
                <div className="ai-tool-panel">
                    <div className="ai-tool-header">
                        <div className="ai-tool-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                            <i className="fas fa-users"></i>
                        </div>
                        <div>
                            <h3>User Behavior Insights</h3>
                            <p>AI-driven analysis of user engagement patterns and churn risk.</p>
                        </div>
                    </div>

                    <div className="ai-insights-grid">
                        {/* Peak Activity */}
                        <div className="ai-insight-card" style={{ gridColumn: 'span 2' }}>
                            <h5><i className="fas fa-clock"></i> Peak Activity Hours</h5>
                            <div className="ai-bar-chart compact">
                                {userBehavior.peakHours.map((h, i) => (
                                    <div key={i} className="ai-bar-col">
                                        <div className="ai-bar-value">{h.activity}%</div>
                                        <div className="ai-bar" style={{ height: `${h.activity}%`, background: h.activity >= 85 ? '#10b981' : h.activity >= 60 ? '#3b82f6' : '#94a3b8' }}></div>
                                        <div className="ai-bar-label">{h.hour}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Device Breakdown */}
                        <div className="ai-insight-card">
                            <h5><i className="fas fa-mobile-alt"></i> Device Breakdown</h5>
                            {userBehavior.deviceBreakdown.map((d, i) => (
                                <div key={i} className="ai-mastery-row" style={{ marginBottom: '0.75rem' }}>
                                    <span className="ai-mastery-label">{d.device}</span>
                                    <div className="ai-mastery-bar-wrap">
                                        <div className="ai-mastery-bar high" style={{ width: `${d.pct}%` }}>{d.pct}%</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Churn Risk */}
                        <div className="ai-insight-card">
                            <h5><i className="fas fa-exclamation-triangle"></i> Churn Risk by Segment</h5>
                            {userBehavior.churnRisk.map((s, i) => (
                                <div key={i} className="ai-mastery-row" style={{ marginBottom: '0.75rem' }}>
                                    <span className="ai-mastery-label" style={{ fontSize: '0.8rem' }}>{s.segment}</span>
                                    <div className="ai-mastery-bar-wrap">
                                        <div className={`ai-mastery-bar ${s.risk >= 30 ? 'low' : s.risk >= 15 ? 'medium' : 'high'}`} style={{ width: `${s.risk}%` }}>
                                            {s.risk}%
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Tool 3: AI Report Generator */}
            {activeToolIdx === 3 && (
                <div className="ai-tool-panel">
                    <div className="ai-tool-header">
                        <div className="ai-tool-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                            <i className="fas fa-file-invoice"></i>
                        </div>
                        <div>
                            <h3>AI Report Generator</h3>
                            <p>Generate comprehensive platform reports with AI-powered analysis.</p>
                        </div>
                    </div>

                    <div className="ai-tool-form">
                        <div className="ai-form-group">
                            <label>Report Type</label>
                            <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
                                <option value="weekly">Weekly Summary</option>
                                <option value="revenue">Revenue Analysis</option>
                                <option value="growth">User Growth Report</option>
                            </select>
                        </div>
                        <button
                            className="btn btn-primary ai-generate-btn"
                            onClick={handleGenerateReport}
                            disabled={isGeneratingReport}
                        >
                            {isGeneratingReport ? (
                                <><i className="fas fa-spinner fa-spin"></i> Generating Report...</>
                            ) : (
                                <><i className="fas fa-file-alt"></i> Generate Report</>
                            )}
                        </button>
                    </div>

                    {reportResult && (
                        <div className="ai-result-card fade-in">
                            <div className="ai-report-banner">
                                <h4><i className="fas fa-clipboard-check"></i> {reportResult.title}</h4>
                                <span className="ai-report-period"><i className="fas fa-calendar"></i> {reportResult.period}</span>
                            </div>

                            <div className="ai-kpi-grid" style={{ marginTop: '1.5rem' }}>
                                {reportResult.highlights.map((h, i) => (
                                    <div key={i} className="ai-kpi-card">
                                        <div className="ai-kpi-icon"><i className={h.icon}></i></div>
                                        <p className="ai-kpi-label">{h.metric}</p>
                                        <h3 className="ai-kpi-value">{h.value}</h3>
                                        <span className="ai-kpi-trend"><i className="fas fa-arrow-up"></i> {h.change}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="ai-report-section" style={{ marginTop: '1.5rem' }}>
                                <div className="ai-suggestion-item" style={{ borderLeft: '4px solid #f59e0b' }}>
                                    <div className="ai-suggestion-icon" style={{ color: '#f59e0b' }}>
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <div>
                                        <strong>Key Issue</strong>
                                        <p>{reportResult.topIssue}</p>
                                    </div>
                                </div>
                                <div className="ai-suggestion-item" style={{ borderLeft: '4px solid #10b981' }}>
                                    <div className="ai-suggestion-icon" style={{ color: '#10b981' }}>
                                        <i className="fas fa-lightbulb"></i>
                                    </div>
                                    <div>
                                        <strong>AI Recommendation</strong>
                                        <p>{reportResult.recommendation}</p>
                                    </div>
                                </div>
                            </div>

                            <p className="demo-note" style={{ marginTop: '1.5rem' }}>Note: This is a simulated AI-generated report for demonstration purposes.</p>
                        </div>
                    )}
                </div>
            )}
        </DashboardLayout>
    );
};

export default AdminAI;
