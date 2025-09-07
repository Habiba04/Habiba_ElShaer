import React from "react";
import "./certificates.css";

const Certificates = () => {
  const certificates = [
    {
      title: "UI/UX Design",
      issuer: "Sprints",
      date: "Jun. 2025",
      link: "assets/sprints.pdf"
    },
    {
      title: "Cyber Security",
      issuer: "BUE, Impact",
      date: "Aug. 2024",
      link: "assets/cyberSecurity.jpg"
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      issuer: "Zewail University, Impact",
      date: "Nov. 2023",
      link: "assets/ai.jpg"
    }
  ];

  return (
    <div className="certificatesSection" id="certificates">
      <div className="header-title">
        <h1>Certificates</h1>
      </div>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
