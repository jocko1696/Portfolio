import React from 'react';


const projects = [
    {
        name: 'Furniture shop',
        imageUrl: 'images/features.jpg',
        technology: 'MERN',
    },
    {
        name: 'Sarah clothing store',
        imageUrl: 'images/sarahs.jpg',
        technology: 'PHP',
    },
    {
        name: 'Hekto makeup',
        imageUrl: 'images/Hekto_makeup.jpg',
        technology: 'Wordpress',
    },
    {
        name: 'Eshelf',
        imageUrl: 'images/eshelf.jpg',
        technology: 'Wordpress',
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            {projects.map((project, index) => (
                <div key={index} className="portfolio-item">
                    <div className="portfolio-image" style={{backgroundImage: `url(${project.imageUrl})`}}></div>
                    <div>
                        <div className="project-name">{project.name}</div>
                        <div className="technology">{project.technology}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
