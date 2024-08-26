import React from 'react';
import style from './Profile.module.css';
import ProfileWrapper from './ProfileWrapper/ProfileWrapper';

export default function Profile(props) {
    return (
        <div className={style.Profile}>
            <ProfileWrapper
                posts={props.state.profilePage}
                newPostText={props.state.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost} />
        </div>
    );
};