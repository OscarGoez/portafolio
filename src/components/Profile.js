import React from 'react'
import { Avatar } from '@mui/material';
import image from '../../src/img/avatar1.jpg'
import style from '../styles/Profile.module.css'

const Profile = () => {
    return (
        <div>
            <header className={style.header}>
                <Avatar
                    alt="Oscar_Goez"
                    src={image}
                    sx={{ width: 350, height: 350 }}
                />
                <h1 className={style.hOne}>Oscar Goez Henao</h1>
                <h2 className={style.hTwo}>Tecnólogo Análisis y Desarrollo Sistemas Información</h2>
            </header>
        </div>
    )
}

export default Profile