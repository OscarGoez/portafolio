import React from "react";
import "../styles/ModernStyle.css";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const techSkills = [
    "Python", 
    "RPA (Selenium / Power Automate)", 
    "Automatización con Excel y Correo",
    "SQL / SQLite", 
    "React / Node.js", 
    "Pandas / Power BI"
  ];

  return (
    <section className="section-wrapper skills-section" id="skills">
      <h2>{t("skills.title")}</h2>
      <div className="skills-grid">
        {techSkills.map((skill, i) => (
          <div key={i} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
