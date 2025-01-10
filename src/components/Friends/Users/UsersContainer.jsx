import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import axios from 'axios'
import { follow, unfollow, set_users, set_current_page, set_total_users_count } from '../../../redux/users_reducer'



function UsersContainer(props) {


    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items);
                props.setTotalUsersCount(response.data.totalCount);
            });
    },
        []
    );


    return <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        follow={props.follow}
        unfollow={props.unfollow}
    />
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users) => {
            dispatch(set_users(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(set_current_page(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(set_total_users_count(totalUsersCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)