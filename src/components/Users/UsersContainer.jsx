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
import Users from "./Users";
import Preload from "../common/Preload/Preload";
import { userAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setToggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.setToggleFetching(false)
                    this.props.setUsers(data.items)
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
