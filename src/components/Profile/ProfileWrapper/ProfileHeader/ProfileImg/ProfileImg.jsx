import React from "react";
import style from "./ProfileImg.module.css";
import usPhoto from '../../../../../assets/images/images.png'
export default function ProfileImg(props) {
  return (
    <div className={style.ProfileImg}>
      <img
        src={props.photo != null ? props.photo : usPhoto}
        alt="ImgAvatar"
      />
    </div>
  );
}
