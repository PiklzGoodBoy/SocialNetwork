import React from "react";
import style from "./Users.module.css";
import UsPhoto from "../../../assets/images/images.png";
import { NavLink } from "react-router-dom";
import { Unfollow, Follow } from "../../../api/api";

export default function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
    if (i === 10) break;
  }

  return (
    <div className={style.Users}>
      <div>
        {pages.map((p) => {
          let pageId = p;
          return (
            <span
              key={pageId}
              className={props.currentPage === p && style.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : UsPhoto}
                alt=""
              />
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    Unfollow(u.id, props.unfollow);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    Follow(u.id, props.follow);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
