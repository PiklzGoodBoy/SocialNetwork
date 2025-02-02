import React from 'react'
import style from './ProfileImg.module.css'
import ImgAvatar from '../../../../../Img/ProfielImg/nicolas-horn-MTZTGvDsHFY-unsplash.jpg'

export default function ProfileImg(props) {
  return (
    <div className={style.ProfileImg}>  
      <img src={props.photo} alt="ImgAvatar"/>
    </div>
  )
}

