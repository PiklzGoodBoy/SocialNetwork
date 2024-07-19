import React from 'react';
import style from './Header.module.css';
import { ReactComponent as Logo } from '../../Img/Logo/Vectorlogo.svg'

function Header() {
    return (
        <div className={style.Header}>
            <Logo/>
        </div>
    );
}

export default Header;
