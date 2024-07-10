import React from 'react'
import style from './ProfileWrapper.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeaer'
import ProfileLayoutSplit from './ProfileLayoutSplit/ProfileLayoutSplit'

const ProfileWrapper = () => {
    return (
        <div className={style.ProfileWrapper}>
            <ProfileHeader />
            <ProfileLayoutSplit/>
        </div>
    )
}

export default ProfileWrapper