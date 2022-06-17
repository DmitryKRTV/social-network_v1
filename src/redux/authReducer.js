import {authAPI} from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
    id: null, email: null, login: null, isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state, ...action.data
            }
        }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USERS_DATA, data: {id, email, login, isAuth}})

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setUserData(id, email, login, true))
                }
            });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthThunkCreator())
                }
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            });
    }
}

export default authReducer;