import React from 'react'
import style from '../styles/AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={style.aboutMe}>
            <div className={style.personalInfo}>
                <h2 className={style.hTwo}>Información Personal</h2>
                <p className={style.paragraph}>Nombre: <strong>Oscar Alberto Góez Henao</strong></p>
                <p className={style.paragraph}>Nacionalidad: <strong>Colombiano</strong></p>
                <p className={style.paragraph}>Ubicación: <strong>Bello, Antioquia</strong></p>
                <p className={style.paragraph}>Teléfono: <strong>310 5290842</strong></p>
                <p className={style.paragraph}>Email: <strong>oscargoez11@gmail.com</strong></p>
            </div>
            <div className={style.myself}>
                <h2 className={style.hTwo}>Sobre mi </h2>

                <p className={style.paragraph}>
                    Tecnólogo con conocimiento en análisis, diseño,
                    implementación y ajustes de sistemas informáticos, sistematización y/o
                    automatización de procesos. Manejo de bases de datos SQL.
                    Planificador, analítico, con pensamiento lógico. Soy una persona entusiasta,
                    comprometida, enfocada en los resultados, con disposición para asumir
                    nuevos desafíos, con buenas relaciones interpersonales y de trabajo en
                    equipo.
                    <br></br><br></br>
                    Entre mis pasatiempos, disfruto mucho viajar en moto y explorar nuevos lugares.                    
                    También me gusta salir a caminar o montar en bicicleta. 
                    Estas actividades me permiten apreciar el entorno a un ritmo tranquilo, 
                    disfrutando de cada detalle y sumergiéndome en la serenidad de los paisajes.
                    Por último, pero no menos importante, el tiempo en familia es invaluable para 
                    mí. Compartir momentos especiales con mis seres queridos, 
                    crear recuerdos y disfrutar de su compañía es una de las cosas más 
                    gratificantes en la vida.
                </p>

            </div>
        </div>
    )
}

export default AboutMe

