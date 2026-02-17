import { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../data/aiEngine';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! 👋 I'm your AI assistant. Ask me about any CS topic — Python, JavaScript, Data Structures, ML, and more!", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatBodyRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSend = () => {
        if (!input.trim() || isTyping) return;

        const userMsg = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        const query = input;
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const response = getAIResponse(query);
            setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
            setIsTyping(false);
        }, 600 + Math.random() * 600);
    };

    const handleClear = () => {
        setMessages([
            { text: "Chat cleared! How can I help you? 🚀", sender: 'bot' }
        ]);
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                className={`chatbot-fab ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                title="AI Assistant"
            >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
                {!isOpen && <span className="fab-pulse"></span>}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-header-info">
                            <div className="chatbot-avatar">
                                <i className="fas fa-robot"></i>
                            </div>
                            <div>
                                <h4>AI Assistant</h4>
                                <span className="chatbot-status">
                                    <span className="status-dot"></span> Online
                                </span>
                            </div>
                        </div>
                        <div className="chatbot-header-actions">
                            <button onClick={handleClear} title="Clear chat">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                            <button onClick={() => setIsOpen(false)} title="Close">
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>

                    <div className="chatbot-body" ref={chatBodyRef}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`chatbot-msg ${msg.sender}`}>
                                {msg.sender === 'bot' && (
                                    <div className="chatbot-msg-avatar">
                                        <i className="fas fa-robot"></i>
                                    </div>
                                )}
                                <div className="chatbot-msg-bubble">
                                    {msg.text.split('\n').map((line, i) => (
                                        <span key={i}>{line}<br /></span>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="chatbot-msg bot">
                                <div className="chatbot-msg-avatar">
                                    <i className="fas fa-robot"></i>
                                </div>
                                <div className="chatbot-msg-bubble typing">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="chatbot-suggestions">
                        {['Python', 'React', 'ML', 'OOP'].map(topic => (
                            <button
                                key={topic}
                                className="suggestion-chip"
                                onClick={() => {
                                    setInput(topic);
                                    setTimeout(() => {
                                        setInput('');
                                        const userMsg = { text: topic, sender: 'user' };
                                        setMessages(prev => [...prev, userMsg]);
                                        setIsTyping(true);
                                        setTimeout(() => {
                                            setMessages(prev => [...prev, { text: getAIResponse(topic), sender: 'bot' }]);
                                            setIsTyping(false);
                                        }, 600 + Math.random() * 600);
                                    }, 100);
                                }}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>

                    <div className="chatbot-footer">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend} disabled={isTyping || !input.trim()}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChatbot;
