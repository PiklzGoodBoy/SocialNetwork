import React from "react";
import style from "./ProfileSettings.module.css";
import Dropdown from "../../../../../UI/Dropdown/Dropdown";

export default function ProfileSettings(props) {
  return (
    <div className={style.ProfileSettings}>
      {/* <button>Редактировать профиль</button> */}
      <Dropdown
        name={"Edit profile"}
        imgSrc={
          "https://img.icons8.com/?size=100&id=wLKQNJI6J1wM&format=png&color=000000"
        }
      />
      <Dropdown
        name={"more"}
        imgSrc={
          "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
        }
      />
    </div>
  );
}
