import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatbot from './AIChatbot';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
            <AIChatbot />
        </>
    );
};

export default Layout;

