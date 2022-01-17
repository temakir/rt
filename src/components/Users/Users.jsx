import s from "./Users.module.css";
import emptyAvatar from "../../assets/images/emptyAvatar.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

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
                    <NavLink to={"/profile/" + u.id}>
                        <img alt='avatar' src={u.photos.small != null ? u.photos.small : emptyAvatar}
                             className={s.photoUserList}/>
                    </NavLink>
                    {u.followed
                        ? <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                            props.setToggleFollowingProgress(true, u.id)
                            userAPI.getFollow(u.id, 'unfollow')
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.setToggleFollowingProgress(false, u.id)

                                })


                        }}>Unfollow</button>
                        : <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                            props.setToggleFollowingProgress(true, u.id)
                            userAPI.getFollow(u.id, 'follow')
                                .then(data => {
                                    /*=== ==*/
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.setToggleFollowingProgress(false, u.id)
                                })


                        }}>Follow</button>

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