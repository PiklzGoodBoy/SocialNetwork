import React from 'react'
import style from './ProfileInfo.module.css'

export default function ProfileInfo() {
  return (
    <div className={style.ProfileInfo}>
      <h2 className={style.profileInfoUserName}>
        UserName
      </h2>
      <div className={style.profileUserInformation}>
        UserInforamtion
      </div>
    </div>
  )
}