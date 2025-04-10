import React from 'react';
import PortfolioComponent from "../components/Portfolio.jsx";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="center-container">
                <div className="heading">
                    <h2 className="heading-title">Portfolio</h2>
                    <p className="heading-description">Showcasing My Best Work and Achievements</p>
                </div>
                <PortfolioComponent />
            </div>
        </section>
    );
};

export default Portfolio;