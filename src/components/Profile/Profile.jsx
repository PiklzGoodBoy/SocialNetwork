import React from 'react';
import style from './Profile.module.css';
import ProfileWrapper from './ProfileWrapper/ProfileWrapper';


function Profile(props) {
    return (
        <div className={style.Profile}>
           <ProfileWrapper/>
        </div>
    );
}

export default Profile;