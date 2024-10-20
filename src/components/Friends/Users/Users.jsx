import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { follow, unfollow, set_users } from '../../../redux/users_reducer'
import style from './Users.module.css'

function Users(props) {

    const count = useSelector((state) => state.users)
    const dispatch = useDispatch()
    // if (count.users.length === 0) {
    //     count.setUsers([{
    //         id: 1,
    //         photoURL: 'https://plus.unsplash.com/premium_photo-1728498509874-eb3a7438ccfc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         followed: true,
    //         fullName: "Andrey",
    //         status: "I am a bose",
    //         location: {
    //             city: "Rayzan",
    //             country: "RussianFederation"
    //         }
    //     },
    //     {
    //         id: 2,
    //         photoURL: 'https://plus.unsplash.com/premium_photo-1728498509874-eb3a7438ccfc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         followed: false,
    //         fullName: "Yobok",
    //         status: "I am a bose",
    //         location: {
    //             city: "Saint Petersburg",
    //             country: "RussianFederation"
    //         }
    //     },
    //     {
    //         id: 3, photoURL: 'https://plus.unsplash.com/premium_photo-1728498509874-eb3a7438ccfc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         followed: true, fullName: "JajaVis", status: "I am a bose", location: { city: "Kyoto", country: "Japan" }
    //     },
    //     {
    //         id: 4, photoURL: 'https://plus.unsplash.com/premium_photo-1728498509874-eb3a7438ccfc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         followed: false, fullName: "SukaKa", status: "I am a lose", location: { city: "Philadelphia", country: "USA" }
    //     }
    //     ]
    //     )

    // }
    return (
        <div className={style.Users}>
            {count.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photoURL} />
                    <div>
                        {u.followed ? <button onClick={() => { dispatch(unfollow(u.id)) }}>unfollow</button>
                            : <button onClick={() => { dispatch(follow(u.id)) }}>follow</button>}
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