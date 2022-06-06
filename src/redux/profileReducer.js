const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({type: ADD_POST,})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPostText = state.newPostText;
            return {
                ...state,
                postsData : [...state.postsData, {id: 9, name: "Zhenya", message: newPostText, likesCount: "0",}],
                newPostText : "",
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
}

export default profileReducer;