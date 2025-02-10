import React, { useEffect, useState } from "react";

const counters = [
    { title: "Experiences", value: 3 },
    { title: "Projects Done", value: 5},
    { title: "Happy Clients", value: 10 },
];

const CounterCard = ({ title, value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 2000; // Animation duration in ms
        const increment = Math.ceil(end / (duration / 50)); // Speed control

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="counter-card">
            <h2>{count}+</h2>
            <p>{title}</p>
        </div>
    );
};

const ExperienceCounters = () => {
    return (
        <div className="counter-container">
            {counters.map((counter, index) => (
                <React.Fragment key={index}>
                    <CounterCard {...counter} />
                    {index < counters.length - 1 && <div className="divider"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ExperienceCounters;
