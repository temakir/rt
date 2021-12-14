import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setToggleFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersPage-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preload from "../common/Preload/Preload";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setToggleFetching(false)
                    this.props.setUsers(response.data.items)
                }
            )
    }

    render() {
        return <>

            {this.props.isFetching ? <Preload/> :

                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}/>
            }
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleFetching: (isFetching) => {
            dispatch(setToggleFetchingAC(isFetching))
        }
    }
}*/

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleFetching
})(UsersAPIComponent)

export default UsersContainer;
