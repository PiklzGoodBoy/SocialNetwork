import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { follow, unfollow, set_users } from '../../../redux/users_reducer'

let mapStateToProps = (state) => {
    return { users: state.users }
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)