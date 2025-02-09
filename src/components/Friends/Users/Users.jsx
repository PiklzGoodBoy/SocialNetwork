import React from "react";
import style from "./Users.module.css";
import UsPhoto from "../../../assets/images/images.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "4b436c7c-abac-432c-b457-19d4a7bd970b",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "4b436c7c-abac-432c-b457-19d4a7bd970b",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
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
