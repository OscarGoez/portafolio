import React from 'react'
import style from '../styles/Skills.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 18,
  borderRadius: 5,
  margin: 7.5,
  padding: 2,
  right: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 500 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'rgb(48, 123, 123)' : 'rgb(151 171 171)',
  },


}));

const Skills = () => {
  return (

    <div className={style.skills}>
      <h2 className={style.hTwo}>Competencias</h2>
      <div className={style.row}>
        <div className={style.skillSection}>
          <h3 className={style.hThree}>Personales</h3>
          <section className={style.personalSkills}>

            <section className={style.personalName}>
              <span className={style.span}>Rápido aprendizaje</span>
              <span className={style.span}>Compromiso</span>
              <span className={style.span}>Planificación</span>
              <span className={style.span}>Analítico</span>
              <span className={style.span}>Organización</span>
            </section>
            <section className={style.personalProgress}>
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress className={style.progress} variant="determinate" value={90} />
                <BorderLinearProgress className={style.progress} variant="determinate" value={85} />
                <BorderLinearProgress className={style.progress} variant="determinate" value={90} />
                <BorderLinearProgress className={style.progress} variant="determinate" value={85} />
                <BorderLinearProgress className={style.progress} variant="determinate" value={90} />
              </Box>
            </section>
          </section>
        </div>
        <div className={style.row}>
        <div className={style.skillSection}>
          <h3 className={style.hThree}>Laborales</h3>
          <div className={style.personalSkills}>
            <section className={style.personalName}>
              <span className={style.span}>Javascript</span>
              <span className={style.span}>SQL</span>
              <span className={style.span}>Angular</span>
              <span className={style.span}>react</span>
              <span className={style.span}>Node js</span>
            </section>
            <section className={style.personalProgress} >
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress className={style.progress} variant="determinate" value={70} />
                <BorderLinearProgress className={style.progress} variant="determinate" value={70} />
                <BorderLinearProgress className={style.progress} variant="determinate" value={60} />
                <BorderLinearProgress className={style.progress} variant="determinate" value={60} />
                <BorderLinearProgress className={style.progress} variant="determinate" value={50} />
              </Box>

            </section>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

