import React from 'react'
import style from './ProfileWrapper.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileLayoutSplit from './ProfileLayoutSplit/ProfileLayoutSplit'

export default function ProfileWrapper(props) {
    return (
        <div className={style.ProfileWrapper}>
            <ProfileHeader />
            <ProfileLayoutSplit
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}