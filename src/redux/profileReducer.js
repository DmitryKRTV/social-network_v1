import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    postsData: [
        {
            id: 1,
            name: "Dmitry",
            message: "Gello",
            likesCount: "2",
        },
        {
            id: 2,
            name: "Andrey",
            message: "Hello",
            likesCount: "3",
        },
        {
            id: 3,
            name: "Sveta",
            message: "Yo",
            likesCount: "5",
        },
        {
            id: 4,
            name: "Victor",
            message: "Whats",
            likesCount: "1",
        },
        {
            id: 5,
            name: "Valera",
            message: "ye",
            likesCount: "0",
        },
    ],
    newPostText: "something",
    profile: null,
    status: "222",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPostText = state.newPostText;
            return {
                ...state,
                postsData: [...state.postsData, {id: 9, name: "Zhenya", message: newPostText, likesCount: "0",}],
                newPostText: "",
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST,})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfileThunkCreator = (userIdFromProps) => {
    return ((dispatch) => {
        profileAPI.getProfile(userIdFromProps).then(response => {
            dispatch(setUserProfile(response.data));
        });
    })
}


export const getStatsThunk = (userId) => {
    return ((dispatch) => {
        profileAPI.getUserStatus(+userId)
            .then(response => {
            dispatch(setStatus(response.data));
        });
    })
}
export const updateStatsThunk = (status) => {
    return ((dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    })
}


export default profileReducer;