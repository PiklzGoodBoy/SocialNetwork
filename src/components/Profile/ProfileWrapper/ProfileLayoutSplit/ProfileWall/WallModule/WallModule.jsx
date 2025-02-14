import React from "react";
import style from "./WallModule.module.css";
import Post from "./Post/Post";

export default function WallModule(props) {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} />
  ));
  return <div className={style.WallModule}>{postsElements}</div>;
}
