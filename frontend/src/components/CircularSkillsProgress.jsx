import React, { useState, useEffect, useRef } from "react";


const CircularSkillProgress = ({ percentage, Icon, skillName }) => {
    const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
    const progressRef = useRef(null);

    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const progress = (percentage / 100) * circumference;

    const handleScroll = () => {
        const rect = progressRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInView && !hasScrolledIntoView) {
            setHasScrolledIntoView(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasScrolledIntoView]);

    return (
        <div className="skill-progress-container" ref={progressRef}>
            <svg width="120" height="120" viewBox="0 0 120 120">
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f43f5e" />
                        <stop offset="50%" stopColor="#fb7185" />
                        <stop offset="100%" stopColor="#fda4af" />
                    </linearGradient>
                </defs>

                {/* Background Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    strokeWidth={strokeWidth}
                    className="progress-bg"
                />

                {/* Progress Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    strokeWidth={strokeWidth}
                    className="progress-bar"
                    strokeDasharray={circumference}
                    strokeDashoffset={hasScrolledIntoView ? circumference - progress : circumference}
                />

                {/* React Icon inside the ring */}
                <foreignObject x="15" y="15" width="90" height="90">
                    <div className="icon-container">
                        <Icon size={50} color="#fff" />
                    </div>
                </foreignObject>
            </svg>

            {/* Skill Name and Percentage */}
            <div className="skill-text">
                <div className="percentage">{percentage}%</div>
                <div className="skill-name">{skillName}</div>
            </div>
        </div>
    );
};

export default CircularSkillProgress;
