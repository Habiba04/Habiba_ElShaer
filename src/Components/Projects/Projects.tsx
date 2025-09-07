import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./projects.css";

interface Project {
    title: string;
    description: string;
    image: string;
    tools: string[];
}

const projectsData: Project[] = [
    {
        title: "Orchid World Gate",
        description:
            "Developed and deployed the corporation’s landing page, with the primary objective of creating a strong first impression for visitors. The website was designed to clearly communicate the corporation’s values, highlight its range of services, and provide an intuitive user experience. By combining clean design with responsive frontend development, the landing page helped establish credibility, improve brand perception, and make essential information easily accessible to potential clients.",
        image: "/assets/orchid.jpeg",
        tools: ["HTML", "CSS", "Github"],
    },
    {
        title: "Helwan University Club",
        description:
            "Designed the UI and developed the frontend for Phase 1 of the system, focusing on seamless member registration and secure online payments. Integrated modern technologies like RFID cards for quick access, and implemented features to simplify booking activities and facilities.",
        image: "/assets/huc.jpg",
        tools: ["ReactJS", "CSS", "Bootstrap", "Figma", "Git"],
    },
    {
        title: "Clinic Management System",
        description:
            "Developed a web application for clinic and doctor management, enabling patients to book appointments, access prescriptions, and communicate directly with doctors. Enhanced appointment efficiency by streamlining booking processes and optimizing patient–doctor communication.",
        image: "/assets/clinic.png",
        tools: ["ReactJS", "CSS", "Bootstrap", "Figma", "JSON-server", "Git"],
    },
    {
        title: "Real-time Cinema Booking System",
        description:
            "A real-time movie ticket booking platform that allows users to browse movies, select showtimes, and reserve seats seamlessly. Designed vendor-side features for managing cinemas, screenings, and listings, while ensuring a smooth customer experience through real-time seat availability updates and advanced filtering options. Improved the booking flow to make the process faster, more intuitive, and user-friendly.",
        image: "/assets/movies.jpeg",
        tools: ["Angular", "Figma", "Bootstrap", "NodeJS", "REST API", "Git"],
    },
    {
        title: "Test Designs for Mobile Applications",
        description:
            "A collection of experimental mobile app UI/UX designs created to explore different layouts, color schemes, and user flows. These concepts were designed as practice to refine my design process, experiment with creative ideas, and showcase versatility in crafting modern, user-friendly mobile interfaces.",
        image: "/assets/flutter.png",
        tools: ["Flutter", "Dart", "Git", "Local Storage", "Http Requests"],
    },
];

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projectsPerPage = 2;

    const prevProject = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - projectsPerPage);
        }
    };

    const nextProject = () => {
        if (currentIndex < projectsData.length - projectsPerPage) {
            setCurrentIndex(currentIndex + projectsPerPage);
        }
    };

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [selectedProject]);

    return (
        <section className="projects-section">
            <div className="header-title">
                <h1>Projects</h1>
            </div>

            <div className="projects-wrapper">
                {projectsData
                    .slice(currentIndex, currentIndex + projectsPerPage)
                    .map((project, index) => (
                        <div
                            className="project-card"
                            key={index}
                            onClick={() => handleOpenModal(project)} // 👈 open modal when clicking the whole card
                        >
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                    ))}
            </div>

            {/* Navigation buttons */}
            <div className="carousel-buttons">
                <button
                    title="Previous Project"
                    className="carousel-btn"
                    onClick={prevProject}
                    disabled={currentIndex === 0}
                >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                </button>

                <button
                    title="Next Project"
                    className="carousel-btn"
                    onClick={nextProject}
                    disabled={currentIndex >= projectsData.length - projectsPerPage}
                >
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                </button>
            </div>

            {/* Custom Modal */}
            {selectedProject && (
                <div className="custom-modal-overlay" onClick={handleCloseModal}>
                    <div
                        className="custom-modal"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
                    >
                        <button title="Close" className="modal-close-btn" onClick={handleCloseModal}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="modal-content">
                            {/* Left - Image */}
                            <div className="modal-left">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>

                            {/* Right - Details */}
                            <div className="modal-right">
                                <h2>{selectedProject.title}</h2>
                                <p>{selectedProject.description}</p>
                                <h3>Tools Used:</h3>
                                <ul>
                                    {selectedProject.tools.map((tool, i) => (
                                        <li key={i}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
