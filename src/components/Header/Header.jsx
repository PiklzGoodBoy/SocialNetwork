import React from 'react';
import style from './Header.module.css';
import { ReactComponent as Logo } from '../../Img/Logo/Vectorlogo.svg'

export default function Header() {
    return (
        <div className={style.Header}>
            <Logo/>
        </div>
    );
}