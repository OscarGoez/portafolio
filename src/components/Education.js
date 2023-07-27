import React from 'react'
import style from '../styles/Education.module.css'

const titles =[
    {
        title:'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
        institution:'SENA - Servicio Nacional de Aprendizaje',
        time:'Agosto 2020 — Marzo 2023'
    },
    {
        title:'Técnico Laboral en Análisis y Desarrollo de Software',
        institution:'CENSA - Centro de Sistemas de Antioquia S.A.S.', 
        time:'junio 2018 — junio 2019'
    },
    {
        title:'Bachiller Académico',
        institution:'Institución Educativa Ciro Mendia',
        time:'Enero 1996 — Noviembre 2003'
    }
]
const Education = () => {
  return (
    <div className={style.education}>
        <h2 className={style.hTwo}>Educación</h2>

        {titles.map((data, index) => (
                <div key={index} className={style.content}>
                    <h3 className={style.hThree}>{data.title}</h3>
                    <h4 className={style.hFour}>{data.institution}</h4>
                    <p className={style.paragraph}>{data.time}</p>
                </div>
            ))}        
    </div>
  )
}

export default Education