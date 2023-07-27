import React from 'react'
import style from '../styles/Experience.module.css'

const jobs = [
    {
        company: 'Freelancer',
        position: 'Developer',
        time: 'Enero 2023 — Presente',
        task: `Me he dedicado a realizar varios proyectos con el objetivo de obtener 
               una experiencia enriquecedora. Entre ellos, destaco el desarrollo de una pagina 
               web para una posada rural utilizando Angular y Node js para el envío de correos, así como la creación de un sitio web 
                para una compañía especializada en la fabricación de malacates. Además, 
                he diseñado este portafolio personal utilizando React. Estos proyectos demuestran mi habilidad 
                para trabajar con diferentes tecnologías y mi capacidad para adaptarme a diversas 
                necesidades. Estoy constantemente buscando oportunidades para mejorar mis habilidades 
                y ampliar mi conocimiento en el campo del desarrollo web. Puedes visitar los sitios web en estos enlaces https://elretornogranja.web.app/ y https://hhomalactes.web.app/.`
    },
    {
        company: 'Enterdev S.A.S',
        position: 'Practicante Analista y parametrizador RPA',
        time: 'Julio 2022 — Enero 2023',
        task: `Analizar y parametrizar los robots según las arquitecturas, 
                BPMN y los requerimientos establecidos por los clientes de la organización.`
    },
    {
        company: 'Postobón S.A',
        position: 'Operario de montacargas',
        time: 'Noviembre 2014 — Junio 2022',
        task: `Almacenar los productos de la compañía garantizando la rotación de inventario, 
                la unicidad de estos y la fluidez de las líneas de producción, 
                manejo de robots  orbitales en estantería "SSI Orbiter".`
    },
    {
        company: 'Estructuras y servicios S.A.S',
        position: 'Conductor, Auxiliar de soldadura',
        time: 'Mayo 2013 — Noviembre 2014',
        task: `Instalación, transporte y mantenimiento de estructuras metálicas 
                en el área de la construcción y la industria.`
    },
    {
        company: 'Industrias Ceno S.A',
        position: 'Operario de montacargas, auxiliar de producción',
        time: 'Octubre 2012 — Abril 2013 ',
        task: `Garantizar la producción del área de galvanizado y 
                operar el montacargas suministrando los insumos necesarios a las diferentes áreas.`
    },
    {
        company: 'Conalquipo S.A.S ',
        position: 'Auxiliar de compras',
        time: 'Abril 2010 — Octubre 2012 ',
        task: `Atención al cliente, realizar cotizaciones y pedidos del área de compras, 
                velar por la disponibilidad de los equipos a alquilar, mantener el almacén de insumos 
                y repuestos con un stock estandarizado.`
    },
]

const ClickableText = ({ text }) => {
    // Expresión regular para buscar URLs en el texto
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*)/gi;
  
    // Reemplaza las URLs en el texto con enlaces clicables
    const renderedText = text.replace(urlRegex, (match) => {
      return `<a href="${match}" target="_blank" rel="noopener noreferrer">${match}</a>`;
    });
  
    // Utilizamos el atributo "dangerouslySetInnerHTML" para renderizar el texto HTML
    return <div dangerouslySetInnerHTML={{ __html: renderedText }} />;
  };

const Experience = () => {

    return (
        <div className={style.Experience}>
        <h2 className={style.hTwo}>Experiencia</h2>
        {jobs.map((job, index) => (
          <div key={index} className={style.jobs}>
            <h3 className={style.hThree}>{job.company}</h3>
            <p className={style.position}>
              {job.position}
              <br />
              {job.time}
            </p>
            <span className={style.paragraph}>
            <ClickableText text={job.task} />
            </span>
          </div>
        ))}
      </div>
    );
  };

export default Experience
