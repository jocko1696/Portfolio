import React, {useState} from 'react';
import Nav from "./nav/nav.jsx";
import SocialIcons from "../components/SocialIcons.jsx";
import ContactInfo from "../components/ContactInfo.jsx";

const Footer = () => {
    const [activeSection, setActiveSection] = useState(""); // No default active

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setActiveSection(id); // Set active on click
    };
    return (
        <footer id="footer" className="footer">
            <div className="center-container">
                <nav className="">
                    <div className="navbar-container">
                        <div className="logo">
                            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
                                JG
                            </a>
                        </div>

                        {/* Navbar Links */}
                        <div className="navbar-links">
                            <a href="#home"
                               className={activeSection === "home" ? "active" : ""}
                               onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
                            >
                                Home
                            </a>
                            <a href="#services"
                               className={activeSection === "services" ? "active" : ""}
                               onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                            >
                                Services
                            </a>
                            <a href="#about-me"
                               className={activeSection === "about-me" ? "active" : ""}
                               onClick={(e) => { e.preventDefault(); scrollToSection("about-me"); }}
                            >
                                About Me
                            </a>
                            <a href="#portfolio"
                               className={activeSection === "portfolio" ? "active" : ""}
                               onClick={(e) => { e.preventDefault(); scrollToSection("portfolio"); }}
                            >
                                Portfolio
                            </a>
                            <a href="#contact-me"
                               className={activeSection === "contact-me" ? "active" : ""}
                               onClick={(e) => { e.preventDefault(); scrollToSection("contact-me"); }}
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </nav>
                <SocialIcons />
                <ContactInfo />
                <div className="footer-divider"></div>
                <p className="rights-reserved">&copy; 2025 Jovana Gluhović. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;