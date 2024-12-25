import React from 'react'
import { useEffect } from 'react'
import style from './Users.module.css'
import axios from 'axios'
import UsPhoto from '../../../assets/images/images.png'

export default function Users(props) {
    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }, []);
    return (
        <div className={style.Users}>
            {props.users.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : UsPhoto} />
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
            </div>
            )}
        </div>
    )
}