import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
} from "../../../redux/users_reducer";
import { getUsers } from "../../../api/api";

function UsersContainer(props) {
  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.toogleIsFetching(true);
    getUsers(pageNumber, props.pageSize).then((data) => {
      props.toogleIsFetching(false);
      props.setUsers(data.items);
    });
  };

  useEffect(() => {
    props.toogleIsFetching(true);
    getUsers(props.currentPage, props.pageSize).then((data) => {
      props.toogleIsFetching(false);
      props.setUsers(data.items);
      props.setTotalUsersCount(data.totalCount);
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

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount));
//     },
//     toogleIsFetching: (isFetching) => {
//       dispatch(toogleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
})(UsersContainer);
