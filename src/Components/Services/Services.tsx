import React from "react";
import "./Services.css";

const services = [
    {
        id: 1,
        image: "assets/bug.png",
        title: "Fix Front-end Bugs",
        description:
            "Identify and fix front-end bugs to ensure smooth user experience.",
    },
    {
        id: 2,
        image: "assets/components.png",
        title: "Create React Components",
        description:
            "Design and develop reusable React components for efficient code reuse.",
    },
    {
        id: 3,
        image: "assets/responsive.png",
        title: "Make Website Mobile-Friendly / Responsive",
        description:
            "Design and develop responsive websites that adapt to different screen sizes.",
    },
];

const ServicesSection = () => {
    return (
        <section className="services">
            <div className="header-title">
                <h1>Services</h1>
            </div>
            <div className="services-container">
                {services.map((service) => (
                    <div className="service-card" key={service.id}>
                        <img loading="lazy" src={service.image} alt={service.title} className="service-img" />
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
