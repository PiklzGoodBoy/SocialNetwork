import React from 'react'
import style from './ProfileWrapper.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileLayoutSplit from './ProfileLayoutSplit/ProfileLayoutSplit'

const ProfileWrapper = (props) => {
    
    return (
        <div className={style.ProfileWrapper}>
            <ProfileHeader />
            <ProfileLayoutSplit postData={props.postData}/>
        </div>
    )
}

export default ProfileWrapper