import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import emptyAvatar from "../../assets/images/emptyAvatar.png";

class Users extends React.Component {

    constructor() {
        super();

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (

            <div>
                {this.props.users.map(u =>
                    <div className={s.userslist} key={u.id}>

                        <div>
                            <img src={u.photos.small != null ? u.photos.small : emptyAvatar}
                                 className={s.photoUserList}/>
                            {u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>

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
}


export default Users;