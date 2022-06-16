const ADD_MESSAGE = "ADD-MESSAGE";

export const addNewMessage = (text) => ({type: ADD_MESSAGE, newMessage: text})

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Dmitry",
        },
        {
            id: 2,
            name: "Andrey",
        },
        {
            id: 3,
            name: "Sveta",
        },
        {
            id: 4,
            name: "Victor",
        },
        {
            id: 5,
            name: "Valera",
        },
    ],
    messagesData: [
        {
            id: 1,
            message: "Gello",
        },
        {
            id: 2,
            message: "Hello",
        },
        {
            id: 3,
            message: "Yo",
        },
        {
            id: 4,
            message: "Whats",
        },
        {
            id: 5,
            message: "ye",
        },
        {
            id: 6,
            message: "Hey",
        },
        {
            id: 7,
            message: "Wer",
        },
        {
            id: 8,
            message: "Aew",
        },
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 9, message: action.newMessage}],
            }
        }
        default:
            return state;
    }
}

export default dialogsReducer;