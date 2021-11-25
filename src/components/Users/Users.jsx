import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import emptyAvatar from "../../assets/images/emptyAvatar.png";

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });


        /*props.setUsers([
            {
                id: 1,
                followed: true,
                status: 'I am a boss',
                photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
                fullName: "Dmitry A.",
                location: {country: 'Ukraine', city: 'Kyiv'}
            },
            {
                id: 2,
                followed: false,
                status: 'I am a student',
                photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
                fullName: "Alena B.",
                location: {country: 'Russia', city: 'Moskow'}
            },
            {
                id: 3,
                followed: true,
                status: 'I am a BIG BOY',
                photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
                fullName: "Maxim C.",
                location: {country: 'Belarys', city: 'Minsk'}
            }
        ]*/
    }
    return (
        <div>
            {props.users.map(u =>
                <div className={s.userslist} key={u.id}>

                    <div>
                        <img src={u.photos.small != null? u.photos.small: emptyAvatar } className={s.photoUserList}/>
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
    )
}

export default Users;