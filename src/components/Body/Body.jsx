import React from 'react';
import style from './Body.module.css';


function Body(props) {
    return (
        <div className={style.Body}>
            <p>leftBody</p>
            <p>Body</p>
            <p>rightBody</p>
        </div>
    );
}

export default Body;