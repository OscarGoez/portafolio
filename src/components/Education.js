import React from "react";
import "../styles/ModernStyle.css";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  const educationData = [
    {
      title: t("education.tech"),
      institution: "SENA - Servicio Nacional de Aprendizaje",
      time: "2020 — 2023",
    },
    { title: t("education.python"), institution: "Cisco Networking Academy", time: "2024" },
    { title: t("education.automation"), institution: "Santander Open Academy", time: "2025" },
    { title: t("education.marketing"), institution: "Santander Open Academy", time: "2025" },
    { title: t("education.copilot"), institution: "Santander Open Academy", time: "2025" },
    { title: t("education.data"), institution: "IE University", time: "2025" },
    { title: t("education.iot"), institution: "MIT Professional Education", time: "2025" },
    { title: t("education.highschool"), institution: "Institución Educativa Ciro Mendía", time: "2003" },
  ];

  return (
    <section className="section-wrapper education-section" id="education">
      <h2>{t("education.title")}</h2>
      <div className="education-timeline">
        {educationData.map((item, i) => (
          <div key={i} className="education-item">
            <div className="icon-box">
              <GraduationCap className="edu-icon" />
            </div>
            <div className="edu-content">
              <h3>{item.title}</h3>
              <p className="edu-institution">{item.institution}</p>
              <p className="edu-time">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
