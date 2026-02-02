export const translations = {
  es: {
    navbar: {
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Formación",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },

    profile: {
      name: "Oscar Goez Henao",
      role: "Automatización • Python • RPA • Data Analysis • React",
      description:
        "Tecnólogo en Análisis y Desarrollo de Sistemas de Información con experiencia en automatización de procesos, análisis de datos y desarrollo web. Aplico la lógica de la programación para optimizar flujos operativos, reducir errores y mejorar la eficiencia mediante herramientas modernas como Python, Excel y RPA.",
      download: "Descargar CV",
      contact: "Contactar",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    about: {
      title: "Sobre mí",
      professionalTitle: "Perfil Profesional",
      professionalText1:
        "Soy Tecnólogo en Análisis y Desarrollo de Sistemas de Información con un enfoque en automatización, integración de datos y desarrollo de soluciones eficientes. Tengo experiencia práctica en el diseño e implementación de scripts de automatización con Python, RPA y Selenium, así como conocimientos en bases de datos SQL, React y Node.js.",
      professionalText2:
        "Mi objetivo es generar valor mediante la optimización de procesos y el análisis inteligente de datos. Me caracterizo por ser analítico, organizado y orientado a resultados, con alta capacidad de adaptación y aprendizaje continuo.",
      personalTitle: "Más sobre mí",
      personalText:
        "Me apasiona viajar en moto, caminar y explorar nuevos lugares; actividades que me inspiran y equilibran mi enfoque profesional. También valoro el tiempo en familia y los momentos de tranquilidad que refuerzan mi concentración y bienestar.",
      hobby1: "Viajar en moto",
      hobby2: "Explorar nuevos lugares",
      focusTitle: "Áreas de especialización",
      focus1: "Automatización de procesos",
      focus2: "Desarrollo web y backend",
      focus3: "Análisis y gestión de datos",
    },

    experience: {
      title: "Experiencia Profesional",
      roleAltipal: "Operario de Montacargas",
      descAltipal:
        "Organización y logística del almacén. Operación de montacargas asegurando el correcto flujo de la operación. Control y cuidado del inventario. Esta experiencia fortaleció mis competencias en procesos, organización y mejora continua.",      
      roleFreelancer: "Desarrollador y Automatizador de Procesos",
      descFreelancer:(
        <>
          Desarrollo de proyectos personales y empresariales enfocados en automatización, análisis de datos y desarrollo web.
          <br/>
          • <strong>Arquitectura y desarrollo completo de sistema CRM</strong> para gestión de clientes, cotizaciones y facturación (HHO Ascensores)
          <br/>
          • <strong>Diseño y desarrollo completo de aplicación web SPA</strong> para gestión inteligente de inventario doméstico
          <br/>
          • Implementación de bots con Python (Selenium, Yagmail, Pandas) y aplicaciones React/Node.js
          <br/>
          • Automatización de reportes Sisbén, clasificación de facturas PDF, desarrollo de sitios web (
          <a href="https://elretornogranja.web.app" target="_blank" rel="noopener noreferrer" className="link-color">
            elretornogranja.web.app
          </a>
          ,{" "}
          <a href="https://ascensoreshho.web.app" target="_blank" rel="noopener noreferrer" className="link-color">
            ascensoreshho.web.app
          </a>
          )
        </>
      ),
      roleEnterdev: "Practicante Analista y Parametrizador RPA",
      descEnterdev:
        "Análisis y diseño de robots de automatización (RPA) basados en BPMN y requerimientos del cliente. Participación en pruebas funcionales, documentación técnica y parametrización de procesos digitales.",
      rolePostobon: "Operario de Montacargas / Logística",
      descPostobon:
        "Gestión logística y almacenamiento eficiente con enfoque en optimización de procesos y control de inventario. Experiencia en operación de sistemas automatizados como SSI Orbiter.",
      roleEstructuras: "Conductor / Auxiliar de Soldadura",
      descEstructuras:
        "Instalación y mantenimiento de estructuras metálicas. Desarrollo de habilidades en planificación, seguridad industrial y trabajo colaborativo.",
      roleConalquipo: "Auxiliar de Compras y Logística",
      descConalquipo:
        "Gestión de inventarios, cotizaciones y control de equipos. Mejora de procesos administrativos y soporte técnico a clientes internos.",
    },

    education: {
      title: "Formación Académica",
      tech: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
      python: "Fundamentos de Python 1 y 2",
      automation: "Automatización con Python",
      marketing: "Marketing Automation",
      copilot: "Copilot (IA y Productividad)",
      data: "Introducción a la Ciencia de Datos",
      iot: "Internet de las Cosas (IoT)",
      highschool: "Bachiller Académico",
    },

    skills: {
      title: "Habilidades Técnicas",
    },

    projects: {
      title: "Proyectos Destacados",
      
      hhoSystem: {
        title: "Sistema de Gestión HHO Ascensores",
        desc: "Plataforma web completa para administración de clientes, documentos financieros y métricas empresariales. Dashboard con visualización de KPIs en tiempo real, CRUD completo para clientes y documentos, sistema de conversión automática entre tipos de documentos (cotización → factura), y generación de PDF profesionales.",
      },
      
      householdInventory: {
        title: "Sistema de Inventario Inteligente para Hogares",
        desc: "Aplicación web completa para gestión automatizada de productos del hogar. Sistema de alertas de vencimientos, lista de compras automática cuando productos se agotan, algoritmo de cálculo de estados en tiempo real (disponible → bajo stock → agotado), y modo offline con sincronización automática.",
      },
      
      autoBot: {
        title: "Bot de Automatización Excel → Web → Reporte",
        desc: "Script en Python que extrae datos desde Excel, realiza consultas web (Sisbén), actualiza registros y genera reportes automáticos por correo electrónico.",
      },
      
      pdfBot: {
        title: "Clasificador Automático de Facturas PDF",
        desc: "Clasifica facturas según emisor y tipo, renombra y organiza archivos automáticamente en carpetas designadas.",
      },
      
      medApp: {
        title: "Página Web Empresarial – HHO Elevadores y Malacates",
        desc: "Sitio web profesional desarrollado para la empresa HHO Ascensores & Malacates. Presenta más de 20 años de experiencia, catálogo de productos industriales, procesos de trabajo y contacto directo. Diseñado para transmitir confianza, calidad y profesionalismo.",
      },
      
      view: "Ver Proyecto",
    },

    contact: {
      title: "Contacto",
      subtitle:
        "Si deseas más información o estás interesado en colaborar, no dudes en contactarme:",
    },
  },

  en: {
    navbar: {
      about: "About Me",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },

    profile: {
      name: "Oscar Goez Henao",
      role: "Automation • Python • RPA • Data Analysis • React",
      description:
        "Technologist in Systems Analysis and Development with experience in process automation, data analysis, and web development. I apply programming logic to streamline workflows, reduce errors, and improve efficiency using Python, Advanced Excel and RPA tools.",
      download: "Download CV",
      contact: "Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
    },

    about: {
      title: "About Me",
      professionalTitle: "Professional Profile",
      professionalText1:
        "I am a Technologist in Systems Analysis and Development focused on automation, data integration, and efficient solutions. I have hands-on experience designing and implementing automation scripts with Python, RPA, and Selenium, as well as knowledge of SQL databases, React, and Node.js.",
      professionalText2:
        "My professional goal is to optimize processes and deliver value through data-driven decision-making. I am analytical, detail-oriented, and results-driven, with strong adaptability and continuous learning skills.",
      personalTitle: "More About Me",
      personalText:
        "I enjoy traveling by motorcycle, hiking, and exploring new places — activities that inspire creativity and balance. I value family time and quiet moments that enhance my focus and productivity.",
      hobby1: "Traveling by motorcycle",
      hobby2: "Exploring new places",
      focusTitle: "Areas of Expertise",
      focus1: "Process Automation",
      focus2: "Web and Backend Development",
      focus3: "Data Analysis and Management",
    },

    experience: {
      title: "Professional Experience",
      roleAltipal: "Forklift Operator",
      descAltipal:
        "Warehouse organization and logistics. Forklift operation ensuring the proper flow of operations. Inventory control and care. This experience strengthened my skills in processes, organization, and continuous improvement.",
      
      roleFreelancer: "Developer and Process Automation Specialist",
      descFreelancer: (
        <>
          Development of automation, data analysis, and web projects for individuals and companies.
          <br/>
          • <strong>Complete architecture and development of CRM system</strong> for customer management, quotations, and invoicing (HHO Ascensores)
          <br/>
          • <strong>Complete design and development of SPA web application</strong> for intelligent household inventory management
          <br/>
          • Implementation of bots using Python (Selenium, Yagmail, Pandas) and React/Node.js apps
          <br/>
          • Automation of Sisbén reports, PDF invoice classification, and web projects (
          <a href="https://elretornogranja.web.app" target="_blank" rel="noopener noreferrer" className="link-color">
            elretornogranja.web.app
          </a>
          ,{" "}
          <a href="https://ascensoreshho.web.app" target="_blank" rel="noopener noreferrer" className="link-color">
            ascensoreshho.web.app
          </a>
          )
        </>
      ),
        
      roleEnterdev: "RPA Analyst & Process Parameterization Intern",
      descEnterdev:
        "Analysis and design of automation robots (RPA) based on BPMN and customer requirements. Participated in functional testing and process documentation.",
      rolePostobon: "Forklift Operator / Logistics Assistant",
      descPostobon:
        "Managed inventory logistics and implemented process optimizations. Experience with automated storage systems such as SSI Orbiter.",
      roleEstructuras: "Driver / Welding Assistant",
      descEstructuras:
        "Installation and maintenance of metal structures. Developed planning, safety, and teamwork skills.",
      roleConalquipo: "Purchasing & Logistics Assistant",
      descConalquipo:
        "Inventory management, quotations, and equipment control. Improved administrative processes and customer support efficiency.",
    },

    education: {
      title: "Education",
      tech: "Technologist in Systems Analysis and Development",
      python: "Python Fundamentals 1 and 2",
      automation: "Process Automation with Python",
      marketing: "Marketing Automation",
      copilot: "Copilot (AI and Productivity)",
      data: "Introduction to Data Science",
      iot: "Internet of Things (IoT)",
      highschool: "High School Diploma",
    },

    skills: {
      title: "Technical Skills",
    },

    projects: {
      title: "Highlighted Projects",
      
      hhoSystem: {
        title: "HHO Ascensores Management System",
        desc: "Complete web platform for customer administration, financial documents, and business metrics. Dashboard with real-time KPI visualization, complete CRUD for clients and documents, automatic document conversion system (quotation → invoice), and professional PDF generation.",
      },
      
      householdInventory: {
        title: "Smart Household Inventory System",
        desc: "Complete web application for automated household product management. Expiration alerts, automatic shopping lists when products run out, real-time status calculation algorithm (available → low stock → out of stock), and offline mode with automatic synchronization.",
      },
      
      autoBot: {
        title: "Automation Bot: Excel → Web → Report",
        desc: "Python script that reads Excel data, queries web platforms (Sisbén), updates records, and sends automated reports via email.",
      },
      
      pdfBot: {
        title: "Automatic PDF Invoice Classifier",
        desc: "Automatically classifies invoices by sender and type, renames, and organizes them into folders.",
      },
      
      medApp: {
        title: "Business Website – HHO Elevadores y Malacates",
        desc: "Professional website developed for HHO Ascensores & Malacates. Showcases over 20 years of experience, industrial product catalog, operational processes, and direct contact. Designed to convey trust, quality, and professionalism.",
      },
      
      view: "View Project",
    },

    contact: {
      title: "Contact",
      subtitle: "Feel free to reach out for collaborations or job opportunities:",
    },
  },
};