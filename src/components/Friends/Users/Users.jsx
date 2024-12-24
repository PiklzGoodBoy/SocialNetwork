import React from 'react'
import style from './Users.module.css'
import axios from 'axios'
import UsPhoto from '../../../assets/images/images.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    // getUsers = () => {
    // }

    render() {
        return (
            <div className={style.Users}>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {this.props.users.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : UsPhoto} />
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        {/* <div>{u.fullName}</div> */}
                        {/* <div>{u.status}</div> */}
                    </div>
                </div>)}
            </div>
        )
    }
}
export default Users