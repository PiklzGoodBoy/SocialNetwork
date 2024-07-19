import React from 'react'
import style from './ProfileImg.module.css'
import ImgAvatar from '../../../../../Img/ProfielImg/nicolas-horn-MTZTGvDsHFY-unsplash.jpg'

function ProfileImg() {
  return (
    <div className={style.ProfileImg}>  
      <img src={ImgAvatar} alt="ImgAvatar"/>
    </div>
  )
}

export default ProfileImg
