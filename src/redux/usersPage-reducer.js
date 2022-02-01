import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_TOGGLE_FETCHING = 'SET_TOGGLE_FETCHING';
const SET_TOGGLE_FOLLOWING_PROGRESS = 'SET_TOGGLE_FOLLOWING_PROGRESS';


let initialiseStore = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}

const usersPageReducer = (state = initialiseStore, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })

            };
        }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case SET_TOGGLE_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case SET_TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userID]
                    : state.followInProgress.filter(id => id !== action.userID)
            }
        }
        default :
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount});
export const setToggleFetching = (isFetching) => ({type: SET_TOGGLE_FETCHING, isFetching});
export const setToggleFollowingProgress = (isFetching, userID) => ({
    type: SET_TOGGLE_FOLLOWING_PROGRESS, isFetching, userID
});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggleFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const followToggle = (userID, operation) => {
    return (dispatch) => {
        dispatch(setToggleFollowingProgress(true, userID))
        userAPI.getFollow(userID, operation)
            .then(data => {
                if (data.resultCode === 0) {
                    operation === 'follow'
                    ?dispatch(followSuccess(userID))
                    :dispatch(unfollowSuccess(userID))
                }
                dispatch(setToggleFollowingProgress(false, userID))

            })
    }
}

export default usersPageReducer;