import React, { useState, useEffect } from "react";

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState(""); // No default active

    let scrollTimeout = null;

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle("menu-open", isMobileMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setActiveSection(id); // Set active on click
        setIsMobileMenuOpen(false); // Close mobile menu
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const sections = ["services", "about-me", "portfolio", "contact-me"];
            let currentSection = "";

            // If at the top, Home is active
            if (currentScrollY < 50) {
                currentSection = "home";
            } else {
                // Detect which section is currently in view
                for (let section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 150 && rect.bottom >= 150) {
                            currentSection = section;
                            break;
                        }
                    }
                }
            }

            setActiveSection(currentSection);

            // Show/hide navbar based on scroll
            if (currentScrollY === 0) {
                setHidden(false);
            } else if (currentScrollY > prevScrollY) {
                setHidden(true);
            } else if (currentScrollY < prevScrollY - 20) {
                setHidden(false);
                if (scrollTimeout) clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    setHidden(true);
                }, 1500);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [prevScrollY]);

    return (
        <nav className={`navbar ${hidden ? "hidden" : ""}`}>
            <div className="navbar-container">
                <div className="logo">
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
                        JG
                    </a>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Navbar Links */}
                <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
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
                       className={`${activeSection === "contact-me" ? "active" : ""} ${isMobileMenuOpen ? "main-btn contact-me" : ""}`}
                       onClick={(e) => { e.preventDefault(); scrollToSection("contact-me"); }}
                    >
                        Contact Me
                    </a>
                </div>

                {/* Hire Me */}
                <div className="hire-me main-btn">
                    <a href="tel:+38765750008">Hire Me</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
