import React from 'react';
import dialogsModule from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";





function Dialogs() {

    let dialogsData = [
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
    ]

    let messagesData = [
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
    ]


    return (
        <div className={dialogsModule["content"]}>
            <div className={dialogsModule["dialogs"]}>
                <div className={dialogsModule["dialogs-items"]}>
                    {
                        dialogsData.map((item) => {
                            return <DialogItem key={item.name} name={item.name} id={`${item.id}`}/>
                        })
                    }
                </div>
            </div>
            <div className={dialogsModule["messages"]}>
                {
                    messagesData.map((item) => {
                        return <MessageItem key={item.message} message={item.message} />
                    })
                }
            </div>
        </div>
    )
}

export default Dialogs