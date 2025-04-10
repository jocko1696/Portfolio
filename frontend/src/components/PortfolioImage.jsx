import React, { useState, useEffect } from 'react';

const PortfolioImage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1180);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1180);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`image-container section-cv ${isMobile ? 'mobile' : ''}`}>
            <img alt="Styled" className="styled-image" src="../../public/images/JG-color.JPG"/>
            <div className="overlay"></div>
        </div>
    );
};

export default PortfolioImage;
