import React from 'react';
import ContactForm from "../components/ContactForm";

const ContactMe = () => {
    return (
        <section id="contact-me" className="contact-me">
            <div className="center-container">
                <div className="heading">
                    <h2 className="heading-title">Contact Me</h2>
                    <p className="heading-description">Cultivating Connections: Reach Out and Connect with Me</p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactMe;