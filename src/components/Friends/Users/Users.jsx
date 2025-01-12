import React from 'react'
import style from './Users.module.css'
import UsPhoto from '../../../assets/images/images.png'

export default function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i === 10) break
    }

    return (
        <div className={style.Users}>
            <div>
                {pages.map(p => {
                    let pageId = p
                    return <span key={pageId}
                        className={props.currentPage === p && style.selectedPage}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : UsPhoto} alt='' />
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