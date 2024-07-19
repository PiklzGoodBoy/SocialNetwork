import React from 'react';
import style from './Profile.module.css';
import LeftBar from './LeftBar/LeftBar';
import ProfileWrapper from './ProfileWrapper/ProfileWrapper';


function Profile(props) {
    return (
        <div className={style.Profile}>

           <LeftBar/>
           <ProfileWrapper/>
            
        </div>
    );
}

export default Profile;