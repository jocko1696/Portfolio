import '../src/assets/scss/main.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './layout/Header.jsx';
import Navbar from './layout/Footer.jsx'; // Assuming Footer is your footer component
import Home from './pages/index';
import Services from './pages/services';
import Portfolio from './pages/portfolio.jsx';
import ContactMe from './pages/contact-me.jsx';
import AboutMe from './pages/about-me.jsx';
import ScrollToTopButton from "./components/ScrollToTopButton .jsx";
import Footer from "./layout/Footer.jsx";

// Main Layout Component
const AppLayout = () => {
    return (
        <>
            <Header/>
            <main>
                <Home/>
                <div className="white-divider"></div>
                <AboutMe/>
                <Services/>
                <Portfolio/>
                <ContactMe/>

                <ScrollToTopButton/>
            </main>
            <Footer/>
        </>
    );
};

// App Component
function App() {
    return (
        <Router>
            <AppLayout/>
        </Router>
    );
}

export default App;
