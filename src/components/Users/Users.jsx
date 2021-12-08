import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import emptyAvatar from "../../assets/images/emptyAvatar.png";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let page = [];
        for (let i = 1; i <= pageCount && page.length < 18; i++) {
            /*if () {*/
                page.push(i)
           /* }*/
        }

        return (
            <div>
                <div className={s.pagination}>
                    {page.map(p => <span className={this.props.currentPage === p && s.selectedPage}
                                         onClick={() => {this.onPageChanged(p)}}>{p} </span>)}
                </div>
                {this.props.users.map(u =>
                    <div className={s.userslist} key={u.id}>

                        <div>
                            <img alt='avatar' src={u.photos.small != null ? u.photos.small : emptyAvatar}
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