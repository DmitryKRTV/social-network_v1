import {authAPI} from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
    id: null, email: null, login: null, isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state, ...action.data, isAuth: true,
            }
        }
        default:
            return state;
    }
}

export const setUserData = (id, email, login) => ({type: SET_USERS_DATA, data: {id, email, login}})

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setUserData(id, email, login))
                }
            });
    }
}

export default authReducer;