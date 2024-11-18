import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { follow, unfollow, set_users } from '../../../redux/users_reducer'
import style from './Users.module.css'
import axios from 'axios'

function Users(props) {


    // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //     // debugger
    //     // setUsers(response.data.items)
    // });

    // function getCapsules() {
    //     const promise = axios.get('https://api.spacexdata.com/v4/capsules');

    //     return promise.then((response) => {
    //         return response.data
    //     });
    // }

    // const count = useSelector((state) => state.users)
    // const dispatch = useDispatch()

    let users = props.users;
    let follow = props.follow;
    let unfollow = props.unfollow;
    let setUsers = props.setUsers;

    return (
        <div className={style.Users}>
            {props.users.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photoURL} />
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </div>
            </div>)}
        </div>
    )
}
export default Users