import React from "react";
import "../styles/ModernStyle.css";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.hhoSystem.title"),
      desc: t("projects.hhoSystem.desc"),
      tech: ["React", "Firebase", "Firestore", "JavaScript", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/OscarGoez/hho-facturas"
    },
    {
      title: t("projects.householdInventory.title"),
      desc: t("projects.householdInventory.desc"),
      tech: ["React", "Vite", "Firebase", "Tailwind CSS", "PWA"],
      link: "#",
      github: "#"
    },
    {
      title: t("projects.autoBot.title"),
      desc: t("projects.autoBot.desc"),
      tech: ["Python", "Pandas", "Selenium", "Yagmail"],
      link: "https://github.com/OscarGoez/Control_vacunas",
    },
    {
      title: t("projects.pdfBot.title"),
      desc: t("projects.pdfBot.desc"),
      tech: ["Python", "PyPDF2", "OS"],
      link: "https://github.com/OscarGoez/Organizador_Facturas",
    },
    {
      title: t("projects.medApp.title"),
      desc: t("projects.medApp.desc"),
      tech: ["React", "Firebase Hosting", "Responsive UI"],
      link: "https://ascensoreshho.web.app",
      github: "https://github.com/OscarGoez/Ascensores_Malacates_hho",
    },
  ];

  return (
    <section className="section-wrapper projects-section" id="projects">
      <h2>{t("projects.title")}</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tech-tags">
              {p.tech.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            <div className="project-buttons">
              {p.link !== "#" && (
                <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                  {p.link.includes("github.com") ? t("projects.view") : t("projects.view")}
                </a>
              )}
              {p.github && p.github !== "#" && (
                <a 
                  className="btn secondary" 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ marginLeft: "8px" }}
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;