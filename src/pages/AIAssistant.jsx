import { useState } from 'react';
import { useApp } from '../context/AppContext';

const AIMessage = ({ role, text, isUser }) => (
    <div style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: '1rem'
    }}>
        <div style={{
            maxWidth: '70%',
            padding: '1rem',
            borderRadius: '12px',
            background: isUser ? 'var(--primary)' : '#f1f5f9',
            color: isUser ? '#fff' : 'var(--dark)',
            borderBottomRightRadius: isUser ? '2px' : '12px',
            borderBottomLeftRadius: isUser ? '12px' : '2px'
        }}>
            {!isUser && <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--gray)' }}>{role} Assistant</strong>}
            {text}
        </div>
    </div>
);

const AIAssistant = () => {
    const { user } = useApp();
    const [messages, setMessages] = useState([
        { id: 1, isUser: false, text: getWelcomeMessage(user?.role) }
    ]);
    const [input, setInput] = useState('');

    function getWelcomeMessage(role) {
        switch (role) {
            case 'admin': return "Hello Admin. I can help analyze platform data, user trends, or moderation queues. What do you need?";
            case 'teacher': return "Hi Instructor! I'm here to help you draft course outlines, create quizzes, or improve your lesson descriptions.";
            case 'student': return "Hey there! I'm your Study Buddy. Need a study plan, a quick quiz, or an explanation of a tough concept?";
            default: return "Hello! How can I help you today?";
        }
    }

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newUserMsg = { id: Date.now(), isUser: true, text: input };
        setMessages(prev => [...prev, newUserMsg]);
        setInput('');

        // Simulate AI Response
        setTimeout(() => {
            const aiResponse = { id: Date.now() + 1, isUser: false, text: getAIResponse(user?.role, input) };
            setMessages(prev => [...prev, aiResponse]);
        }, 1200);
    };

    function getAIResponse(role, query) {
        // Mock responses based on role
        if (role === 'student') {
            return "That's a great question! Based on your current progress in Python, I suggest focusing on 'List Comprehensions' next. Would you like a mini-quiz on that?";
        } else if (role === 'teacher') {
            return "I've drafted a lesson outline for that topic. It includes an introduction, three core examples, and a hands-on exercise. Shall I expand on the exercise?";
        } else if (role === 'admin') {
            return "Analysis complete. User growth is up 15% this week, primarily driven by the new 'Data Science' category. Server load is stable at 42%.";
        }
        return "I'm processing your request. Please stand by.";
    }

    return (
        <section className="content-section active" style={{ paddingTop: '2rem', height: 'calc(100vh - 70px)', display: 'flex', flexDirection: 'column' }}>
            <div className="ai-container" style={{ maxWidth: '800px', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>

                {/* Header */}
                <div className="ai-header" style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', background: '#f8fafc', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--gradient)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                        <i className="fas fa-robot"></i>
                    </div>
                    <div>
                        <h3 style={{ margin: 0 }}>
                            {user?.role === 'student' ? 'Smart Study Buddy' : user?.role === 'teacher' ? 'Curriculum Co-pilot' : 'Platform Insight AI'}
                        </h3>
                        <span style={{ fontSize: '0.85rem', color: 'var(--green)' }}>● Online</span>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="chat-messages" style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                    {messages.map(msg => (
                        <AIMessage key={msg.id} role={user?.role} text={msg.text} isUser={msg.isUser} />
                    ))}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} style={{ padding: '1.5rem', borderTop: '1px solid #e2e8f0', background: '#fff', display: 'flex', gap: '1rem' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={user?.role === 'student' ? "Ask for a quiz or explanation..." : "Ask for data or content help..."}
                        style={{ flex: 1, padding: '1rem', borderRadius: '30px', border: '1px solid #cbd5e1', outline: 'none' }}
                    />
                    <button type="submit" className="btn btn-primary" style={{ borderRadius: '50%', width: '50px', height: '50px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AIAssistant;
