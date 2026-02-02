import React from "react";
import { Github, Mail, FileDown, Linkedin } from "lucide-react";
import image from "../img/avatar1.jpg";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { t } = useLanguage();

  return (
    <header className="card header container" id="profile">
      <img src={image} alt={t("profile.name")} className="avatar" />

      <div className="meta">
        <h1>{t("profile.name")}</h1>
        <h2>{t("profile.role")}</h2>
        <p>{t("profile.description")}</p>

        <div className="cta">
          <a className="btn" href="/Hoja_de_vida_Oscar_Goez.pdf" download>
            <FileDown size={18} /> {t("profile.download")}
          </a>
          <a className="btn" href="mailto:oscargoezhenao@gmail.com">
            <Mail size={18} /> {t("profile.contact")}
          </a>
          <a
            className="btn"
            href="https://github.com/oscargoez"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> {t("profile.github")}
          </a>
          
        </div>
      </div>
    </header>
  );
};

export default Profile;
