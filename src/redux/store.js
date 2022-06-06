import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

let store = {
    _state : {
        profile: {
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
        },
        dialogs: {
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
            newMessageText:"Some Message"
        },
        navbarFriendsMenu: {
            friendsData: [
                {
                    name: "Vasya",
                },
                {
                    name: "Dmitry",
                },
                {
                    name: "Oleg",
                },
                {
                    name: "Andrey",
                },
            ]
        }
    },
    getState(){
        return this._state;
    },
    _renderEntireTree() {
        console.log('State')
    },
    subscribe (observer) {
        this._renderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        sidebarReducer();

        this._renderEntireTree(this._state);
    }
}

export default store;