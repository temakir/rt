import React from 'react';
import {connect} from "react-redux";
import {
    followSuccess, followToggle, getUsers,
    setCurrentPage,
    setToggleFetching, setToggleFollowingProgress,
    setTotalUsersCount,
    setUsers,
    unfollowSuccess
} from "../../redux/usersPage-reducer";
import Users from "./Users";
import Preload from "../common/Preload/Preload";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersAPIComponent extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>

            {this.props.isFetching ? <Preload/> :

                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       followInProgress={this.props.followInProgress}
                       followToggle={this.props.followToggle}
                />
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
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
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

let authRedirectComponent = withAuthRedirect(UsersAPIComponent);

const UsersContainer = connect(mapStateToProps, {
    followSuccess, unfollowSuccess, setUsers,
    setCurrentPage, setTotalUsersCount, setToggleFetching,
    setToggleFollowingProgress, getUsers, followToggle
})(authRedirectComponent)

export default UsersContainer;
