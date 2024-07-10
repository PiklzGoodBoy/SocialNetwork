import React from 'react';
import style from './Body.module.css';
import LeftBar from './LeftBar/LeftBar';
import ProfileWrapper from './ProfileWrapper/ProfileWrapper';


function Body(props) {
    return (
        <div className={style.Body}>

           <LeftBar/>
           <ProfileWrapper/>
            
        </div>
    );
}

export default Body;