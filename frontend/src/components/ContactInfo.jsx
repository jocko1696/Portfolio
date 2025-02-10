import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Import the icons

const ContactInfo = () => {
    return (
        <div className="contact-info">
            {/* Email div */}
            <a href="mailto:joca.gluhovic@gmail.com" className="contact-link">
                <div className="icon-email">
                    <FaEnvelope size={20} /> {/* React email icon */}
                </div>
                <div className="contact-text">
                    joca.gluhovic@gmail.com
                </div>
            </a>

            {/* Phone div */}
            <a href="tel:+38765750008" className="contact-link">
                <div className="icon-phone">
                    <FaPhoneAlt size={20} /> {/* React phone icon */}
                </div>
                <div className="contact-text">
                    +38765750008
                </div>
            </a>
        </div>
    );
};

export default ContactInfo;
