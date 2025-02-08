import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { ReactComponent as Logo } from "../../Img/Logo/Vectorlogo.svg";

export default function Header(props) {
  return (
    <div className={style.Header}>
      <Logo />
      <div className="midleHeader">midle</div>
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <Link to={"/login-" + props.login}>{props.login} </Link>
        ) : (
          <Link to={"/login"}>login</Link>
        )}
      </div>
    </div>
  );
}
