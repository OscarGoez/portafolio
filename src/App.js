import "./App.css";
import SEO from "./components/SEO";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { useEffect, useState } from "react";



const Navbar = () => {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <nav className="navbar">
      <a href="#profile">Inicio</a>
      <a href="#projects">{t("navbar.projects")}</a>
      <a href="#about">{t("navbar.about")}</a>
      <a href="#experience">{t("navbar.experience")}</a>
      <a href="#education">{t("navbar.education")}</a>
      <a href="#skills">{t("navbar.skills")}</a>
      <a href="#contact">{t("navbar.contact")}</a>

      <button onClick={toggleLanguage} className="lang-btn">
        {language === "es" ? "🇬🇧 EN" : "🇪🇸 ES"}
      </button>
    </nav>
  );
};

function AppContent() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="App">
      <SEO />
      <Navbar />
      <Profile />
      <Projects />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}



