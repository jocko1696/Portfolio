import React from "react";
import { FaLaptopCode, FaPlug, FaShoppingCart, FaWordpress, FaDatabase, FaTools } from "react-icons/fa";

const cardData = [
    {
        icon: <FaLaptopCode className="gradient-icon" />,
        title: "Web Development",
        description: "Build modern, high-performance websites and web applications using the latest technologies like React, Node.js, and PHP. I create user-friendly, responsive, and scalable web solutions tailored to your business needs."
    },
    {
        icon: <FaPlug className="gradient-icon" />,
        title: "API Development & Integration",
        description: "Design and implement robust RESTful & GraphQL APIs that allow seamless communication between different systems. Whether you need to integrate third-party services (Stripe, PayPal, or social logins) or build custom APIs, I’ve got you covered."
    },
    {
        icon: <FaShoppingCart className="gradient-icon" />,
        title: "E-Commerce Development",
        description: "Create powerful online stores with platforms like WooCommerce, Shopify, or custom solutions using MERN stack. I ensure secure payment gateways, product management, and an optimized shopping experience for your customers."
    },
    {
        icon: <FaWordpress className="gradient-icon" />,
        title: "WordPress Development",
        description: "Develop and customize WordPress websites, themes, and plugins. Whether it’s a corporate website, a blog, or a custom plugin, I enhance functionality and performance while keeping it easy to manage."
    },
    {
        icon: <FaDatabase className="gradient-icon" />,
        title: "Database Design & Management",
        description: "Optimize and manage databases using MySQL or MongoDB. I design efficient data structures, optimize queries, and ensure security & scalability for your applications."
    },
    {
        icon: <FaTools className="gradient-icon" />,
        title: "Software Maintenance & Support",
        description: "Provide ongoing maintenance, bug fixes, and performance optimizations. I ensure your software runs smoothly with regular updates, security patches, and technical support to keep your system secure and efficient."
    },
];

const Cards = () => {
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <div className="icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;
