import React, { useEffect, useState } from 'react';
import validator from 'validator';
import axios from 'axios';

const ContactForm = ({}) => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        name: '',
        address: '',
        apartment: '',
        city: '',
        country: '',
        postalCode: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validate = () => {
        let formErrors = {};

        if (!validator.isEmail(formData.email)) {
            formErrors.email = 'Invalid email address';
        }

        if (!validator.isMobilePhone(formData.phone, 'any')) {
            formErrors.phone = 'Invalid phone number';
        }

        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.address) formErrors.address = 'Address is required';
        if (!formData.message) formErrors.message = 'Message is required';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {

        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('');

        // Validate form before submitting
        if (!validate()) {
            setIsSubmitting(false);
            return;
        }

        const backendUrl ='http://localhost:5000';  // Default to port 5000 if not set

        try {
            // Send form data to the backend to send the email
            const response = await axios.post(`${backendUrl}/send-email`, formData);
            setSubmissionStatus('success');
            setIsSubmitting(false);
            alert(response.data.message); // Success message from backend
        } catch (error) {
            setSubmissionStatus('error');
            setIsSubmitting(false);
            alert('Failed to send message'); // Error message if email sending fails
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container " id="form">
            <div className="col">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className=""
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className=""
                    />
                    {errors.address && <p className="error">{errors.address}</p>}
                </div>
            </div>
            <div className="col col-2">
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className=""
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className=""
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
            </div>
            <div className="textarea-wrapper">
                <textarea
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <div className="full-width-container">
                <button className="submit-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Contact Me'}
                </button>
            </div>

            {submissionStatus && (
                <p className={`status-message ${submissionStatus}`}>
                    {submissionStatus === 'success' ? 'Your message was sent successfully!' : 'There was an error sending your message.'}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
