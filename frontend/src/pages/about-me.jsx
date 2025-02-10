import React from 'react';
import PortfolioImage from "../components/PortfolioImage.jsx";
import { PiDownloadSimple } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import CircularSkillProgress from "../components/CircularSkillsProgress.jsx";

const AboutMe = () => {
    return (
        <section id="about-me" className="about-me">
            <div className="center-container">
                <div className="heading">
                    <h2 className="heading-title">About Me</h2>
                    <p className="heading-description">User Interface and User Experience</p>
                </div>
                <div className="about-me-wrapper">
                    <PortfolioImage />
                    <div className="text-container">
                        <p>Jovana Gluhović is a Software Engineer with experience in WordPress, HTML, CSS, PHP, and JavaScript.
                            She is currently working at IT sector, where she develops and maintains modern websites.
                            Jovana has experience working with in WordPress, ensuring visually appealing and functional websites.
                            She holds a Bachelor of Science in Electrical Engineering – Computer Science and Informatics from the University of East Sarajevo.
                            Her thesis focused on online clothing purchases using a MySQL database.
                            Jovana is skilled in frontend technologies, including Bootstrap, TailwindCSS, and SCSS.
                            She has recently started programming in React and Node.js and is continuously learning these technologies.
                            In addition to web development, she has experience with version control systems like Git.
                            She is proficient in working with databases, including MySQL and MongoDB.
                            She is fluent in Serbian and has advanced proficiency in English (C1 level).
                            She also has intermediate knowledge of Spanish (B1) and basic proficiency in German (A2).
                            Jovana has experience working with jQuery to enhance website interactivity.
                            With a strong background in electrical engineering and computer science, she understands both hardware and software aspects of development.
                            She enjoys working on internal and external projects, ensuring high-quality frontend solutions.
                           </p>
                        <div className="download-wrapper">
                            <a href="../../public/documents/Jovana_Gluhović_CV_en.pdf" download="Jovana_Gluhović_CV_en.pdf"
                               className="download-btn main-btn">
                                <PiDownloadSimple /> Download CV
                            </a>
                        </div>
                    </div>
                </div>
                <div className="skills-container">
                    <CircularSkillProgress
                        percentage={100}
                        Icon={FaHtml5} // Pass the React icon as a prop
                        skillName="HTML"
                    />
                    <CircularSkillProgress
                        percentage={100}
                        Icon={FaCss3Alt} // You can use any other icon here as well
                        skillName="CSS"
                    />
                    <CircularSkillProgress
                        percentage={90}
                        Icon={IoLogoJavascript} // Pass the React icon as a prop
                        skillName="JavaScript"
                    />
                    <CircularSkillProgress
                        percentage={60}
                        Icon={FaReact} // Pass the React icon as a prop
                        skillName="React"
                    />
                    <CircularSkillProgress
                        percentage={70}
                        Icon={FaWordpress} // You can use any other icon here as well
                        skillName="WordPress"
                    />

                    <CircularSkillProgress
                        percentage={70}
                        Icon={FaPhp } // You can use any other icon here as well
                        skillName="PHP"
                    />
                    <CircularSkillProgress
                        percentage={60}
                        Icon={FaNodeJs} // You can use any other icon here as well
                        skillName="Node.js"
                    />
                    <CircularSkillProgress
                        percentage={60}
                        Icon={SiMongodb} // You can use any other icon here as well
                        skillName="MongoDB"
                    />
                    <CircularSkillProgress
                        percentage={70}
                        Icon={GrMysql } // You can use any other icon here as well
                        skillName="MySql"
                    />
                </div>
            </div>

        </section>
    );
};

export default AboutMe;