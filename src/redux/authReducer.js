const SET_USERS_DATA = "SET_USERS_DATA";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const setUserData = (id, email, login) => ({type: SET_USERS_DATA, data:{id, email, login} })

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default:
            return state;
    }
}


export default authReducer;