import React from 'react';
import style from './Profile.module.css';
import ProfileWrapper from './ProfileWrapper/ProfileWrapper';

export default function Profile(props) {
    return (
        <div className={style.Profile}>
            <ProfileWrapper
                store={props.store}
                // newPostText={props.state.profilePage.newPostText}
                // dispatch={props.dispatch} 1
                />
        </div>
    );
};