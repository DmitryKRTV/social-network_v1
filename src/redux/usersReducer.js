const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed:true}
                    }
                    return u;
                }),
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed:false}
                    }
                    return u;
                }),
            }
        }

        case SET_USERS: {
            return {
                ...state, users: [...action.users]  //...state, users: [...state.users, ...action.users] -- с добавлением в конец
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.newCurrentPage,
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount,
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isToggle,
            }
        }

        default:
            return state;

    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setNewCurrentPageAC = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setToggleIsFetching = (isToggle) => ({type: TOGGLE_IS_FETCHING, isToggle});

export default usersReducer;