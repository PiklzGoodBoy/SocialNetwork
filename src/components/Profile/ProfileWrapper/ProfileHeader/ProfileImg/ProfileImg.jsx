import React from 'react'
import style from './ProfileImg.module.css'
import ImgAvatar from '../../../../../Img/ProfielImg/nicolas-horn-MTZTGvDsHFY-unsplash.jpg'

export default function ProfileImg() {
  return (
    <div className={style.ProfileImg}>  
      <img src={ImgAvatar} alt="ImgAvatar"/>
    </div>
  )
}

