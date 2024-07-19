import React from 'react'
import style from './ProfileHeader.module.css'
import ProfileImg from './ProfileImg/ProfileImg'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileSettings from './ProfileSettings/ProfileSettings'

const ProfileHeader = () => {
  return (
    <div className={style.ProfileHeader}>
        <ProfileImg/>    
        <ProfileInfo/>
        <ProfileSettings/>
    </div>
  )
}

export default ProfileHeader