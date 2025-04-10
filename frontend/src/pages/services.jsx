import React from 'react';
import Cards from "../components/Cards.jsx";

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="center-container">
                <div className="heading">
                    <h2 className="heading-title">Services</h2>
                    <p className="heading-description">Providing innovative software solutions to drive your business forward</p>
                </div>
                <Cards />
            </div>
        </section>
    );
};

export default Services;