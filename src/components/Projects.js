import React from "react";
import "../styles/ModernStyle.css";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.autoBot.title"),
      desc: t("projects.autoBot.desc"),
      tech: ["Python", "Pandas", "Selenium", "Yagmail"],
      link: "https://github.com/oscargoezh/auto-report-bot",
    },
    {
      title: t("projects.pdfBot.title"),
      desc: t("projects.pdfBot.desc"),
      tech: ["Python", "PyPDF2", "OS"],
      link: "https://github.com/oscargoezh/pdf-classifier",
    },
    {
      title: t("projects.medApp.title"),
      desc: t("projects.medApp.desc"),
      tech: ["AppSheet", "Google Sheets", "Automatización"],
      link: "https://oscargoezh.web.app",
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
              {p.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
            <a className="btn" href={p.link} target="_blank" rel="noreferrer">
              {t("projects.view")}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
