import React from "react";
import PortfolioImage from "../components/PortfolioImage.jsx";
import {RiInstagramFill} from "react-icons/ri";
import {LiaLinkedin} from "react-icons/lia";
import {LiaGithubAlt} from "react-icons/lia";
import ExperienceCounters from "../components/ExperienceCounters.jsx";

import {useState, useEffect} from "react";

const Home = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1180);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1180);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="home" className="home">
            <div className="center-container">
                <div className="content">
                    <p className="text-1">Hi I am</p>
                    <p className="text">Jovana Gluhović</p>
                    <h2 className="title">Software Engineer</h2>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/jocko1696/" className="icon"><RiInstagramFill/></a>
                        <a href="https://www.linkedin.com/in/jovana-gluhovi%C4%87-65635616a/?originalSubdomain=ba"
                           className="icon"> <LiaLinkedin/></a>
                        <a href="https://github.com/jocko1696" className="icon"><LiaGithubAlt/></a>
                    </div>
                    <div className="buttons-section">
                        <div className="hire-me main-btn">
                            <a href="tel:+38765750008">Hire Me</a>
                        </div>
                        <div className="download-wrapper">
                            <a href="../../public/documents/Jovana_Gluhović_CV_en.pdf" download="Jovana_Gluhović_CV_en.pdf"
                               className="download-btn">
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Show ExperienceCounters only if screen is >= 1180px */}
                    <div className="desktop-view">
                        <ExperienceCounters/>
                    </div>
                    {/*{!isMobileView && <ExperienceCounters />}*/}
                </div>

                <PortfolioImage/>

                {/* Show ExperienceCounters after PortfolioImage if screen < 1180px */}
                {/*{isMobileView && <ExperienceCounters />}*/}
                <div className="mobile-view">
                    <ExperienceCounters/>
                </div>
            </div>
        </section>
    );
};

export default Home;
