import React from "react";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import "../styles/ModernStyle.css";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="section-wrapper contact-section" id="contact">
      <h2>{t("navbar.contact")}</h2>

      <div className="contact-grid">

        {/* Correo */}
        <div className="contact-card">
          <Mail className="icon" size={28} />
          <h3>Email</h3>
          <p>
            <a href="mailto:oscargoezhenao@gmail.com">oscargoezhenao@gmail.com</a>
          </p>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <Linkedin className="icon" size={28} />
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/oscargoez"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/oscargoez
            </a>
          </p>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <Github className="icon" size={28} />
          <h3>GitHub</h3>
          <p>
            <a
              href="https://github.com/oscargoez"
              target="_blank"
              rel="noreferrer"
            >
              github.com/oscargoez
            </a>
          </p>
        </div>

        {/* WhatsApp */}
        <div className="contact-card">
          <Phone className="icon" size={28} />
          <h3>WhatsApp</h3>
          <p>
            <a
              href="https://wa.me/573105290842?text=Hola%20Oscar,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte."
              target="_blank"
              rel="noreferrer"
            >
              Escribeme por WhatsApp
            </a>
          </p>
        </div>

        {/* Ubicación */}
        <div className="contact-card">
          <MapPin className="icon" size={28} />
          <h3>Ubicación</h3>
          <p>Bello, Colombia</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
