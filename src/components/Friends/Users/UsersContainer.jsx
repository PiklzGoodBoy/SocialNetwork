import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import axios from "axios";
import Preloader from "../../common/preloader/Preloader";
import {
  follow,
  unfollow,
  set_users,
  set_current_page,
  set_total_users_count,
  toogle_is_fetching,
} from "../../../redux/users_reducer";

function UsersContainer(props) {
  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.toogleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`
      )
      .then((response) => {
        props.toogleIsFetching(false);
        props.setUsers(response.data.items);
      });
  };

  useEffect(() => {
    props.toogleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`
      )
      .then((response) => {
        props.toogleIsFetching(false);
        props.setUsers(response.data.items);
        props.setTotalUsersCount(response.data.totalCount);
      });
  }, []);

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    </>
  );
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollow(userId));
    },
    setUsers: (users) => {
      dispatch(set_users(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(set_current_page(pageNumber));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(set_total_users_count(totalUsersCount));
    },
    toogleIsFetching: (isFetching) => {
      dispatch(toogle_is_fetching(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
