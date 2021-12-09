import s from "./Users.module.css";
import emptyAvatar from "../../assets/images/emptyAvatar.png";
import React from "react";


const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= pageCount && page.length < 18; i++) {
        page.push(i)
    }

        return <div>
            <div className={s.pagination}>
                {page.map(p => <span className={props.currentPage === p && s.selectedPage}
                                     onClick={() => {props.onPageChanged(p)}}>{p} </span>)}
            </div>
            {props.users.map(u =>
                <div className={s.userslist} key={u.id}>

                    <div>
                        <img alt='avatar' src={u.photos.small != null ? u.photos.small : emptyAvatar}
                             className={s.photoUserList}/>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>

                        }
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </div>

                </div>
            )
            }

        </div>

}
export default Users;