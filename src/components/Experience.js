import React from "react";
import "../styles/ModernStyle.css";
import { Code2, Settings, Truck, Hammer, Database } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Freelancer",
      position: t("experience.roleFreelancer"),
      time: "Enero 2023 — Presente",
      icon: <Code2 className="exp-icon" />,
      description: t("experience.descFreelancer"),
    },
    {
      company: "Enterdev S.A.S",
      position: t("experience.roleEnterdev"),
      time: "Julio 2022 — Enero 2023",
      icon: <Settings className="exp-icon" />,
      description: t("experience.descEnterdev"),
    },
    {
      company: "Postobón S.A.",
      position: t("experience.rolePostobon"),
      time: "Noviembre 2014 — Junio 2022",
      icon: <Truck className="exp-icon" />,
      description: t("experience.descPostobon"),
    },
    {
      company: "Estructuras y Servicios S.A.S",
      position: t("experience.roleEstructuras"),
      time: "Mayo 2013 — Noviembre 2014",
      icon: <Hammer className="exp-icon" />,
      description: t("experience.descEstructuras"),
    },
    {
      company: "Conalquipo S.A.S",
      position: t("experience.roleConalquipo"),
      time: "Abril 2010 — Octubre 2012",
      icon: <Database className="exp-icon" />,
      description: t("experience.descConalquipo"),
    },
  ];

  return (
    <section className="section-wrapper experience-section" id="experience">
      <h2>{t("experience.title")}</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-icon">{exp.icon}</div>
            <div className="timeline-content">
              <h3>{exp.company}</h3>
              <h4>{exp.position}</h4>
              <p className="exp-time">{exp.time}</p>
              <p className="exp-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
