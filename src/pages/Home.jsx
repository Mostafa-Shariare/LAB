import { useNavigate } from 'react-router-dom';
import AboutSection from '../components/AboutSection';


const Home = () => {
    const navigate = useNavigate();

    return (
        <section id="home" className="content-section active">
            <div className="hero">
                <div className="hero-text">
                    <h1>Learn Smarter with <span className="gradient-text">AI-Assisted</span> Online Courses</h1>
                    <p>Experience a personalized learning journey powered by Artificial Intelligence. From
                        auto-generated quizzes to 24/7 AI tutoring.</p>
                    <div className="cta-group">
                        <button className="btn btn-primary" onClick={() => navigate('/courses')}>Explore
                            Courses<span className="btn-effect"></span></button>
                        <button className="btn btn-secondary" onClick={() => navigate('/features')}>Try AI
                            Tutor<span className="btn-effect"></span></button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7004.jpg"
                        alt="AI Learning Illustration" />
                </div>
            </div>
            <AboutSection />
        </section>
    );
};

export default Home;
