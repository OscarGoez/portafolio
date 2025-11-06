import React from "react";
import "../styles/ModernStyle.css";
import { Cpu, Workflow, Database, Bike, Mountain } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section className="section-wrapper about-section" id="about">
      <h2>{t("about.title")}</h2>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="highlight">{t("about.professionalTitle")}</h3>
          <p>{t("about.professionalText1")}</p>
        </div>

        <div className="about-card secondary">
          <h3 className="highlight">{t("about.personalTitle")}</h3>
          <p>{t("about.personalText")}</p>
          <div className="hobbies">
            <div className="hobby">
              <Bike className="icon" /> <span>{t("about.hobby1")}</span>
            </div>
            <div className="hobby">
              <Mountain className="icon" /> <span>{t("about.hobby2")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-focus">
        <h3>{t("about.focusTitle")}</h3>
        <div className="focus-grid">
          <div className="focus-item">
            <Cpu className="icon" /> <span>{t("about.focus1")}</span>
          </div>
          <div className="focus-item">
            <Workflow className="icon" /> <span>{t("about.focus2")}</span>
          </div>
          <div className="focus-item">
            <Database className="icon" /> <span>{t("about.focus3")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
