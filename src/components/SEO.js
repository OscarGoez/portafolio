// src/components/SEO.js
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* 🔹 Meta básicas */}
      <title>Oscar Goez | Automatización • Python • RPA • Data Analysis • React</title>
      <meta
        name="description"
        content="Portafolio profesional de Oscar Goez, tecnólogo en análisis y desarrollo de sistemas de información. Especialista en automatización de procesos con Python, RPA, análisis de datos y desarrollo web moderno con React."
      />
      <meta
        name="keywords"
        content="Oscar Goez, Python, RPA, Automatización, React, Data Analysis, Portafolio, Colombia, Programador"
      />
      <meta name="author" content="Oscar Goez Henao" />

      {/* 🔹 Meta para dispositivos */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* 🔹 Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* 🔹 Open Graph (para compartir en redes sociales) */}
      <meta property="og:title" content="Oscar Goez | Portafolio Profesional" />
      <meta
        property="og:description"
        content="Tecnólogo en análisis y desarrollo de sistemas con experiencia en automatización de procesos, Python, RPA y análisis de datos."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oscargoezh.web.app" />
      <meta property="og:image" content="/preview.png" />
      
    </Helmet>
  );
};

export default SEO;
