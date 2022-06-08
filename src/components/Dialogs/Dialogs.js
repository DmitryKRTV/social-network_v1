import React from "react";
import dialogsModule from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { Navigate } from "react-router-dom";

function Dialogs(props) {

    return (
        <div className={dialogsModule["content"]}>
            <div className={dialogsModule["dialogs"]}>
                <div className={dialogsModule["dialogs-items"]}>
                    {
                        props.dialogsData.map((item) => {
                            return <DialogItem key={item.name} name={item.name} id={`${item.id}`}/>
                        })
                    }
                </div>
            </div>
            <div className={dialogsModule["messages"]}>
                {
                    props.messagesData.map((item) => {
                        return <MessageItem key={item.message} message={item.message} />
                    })
                }
                <div className={dialogsModule["messageBlock"]}>
                    <textarea
                              className={dialogsModule["tArea"]} rows={5}
                              value={props.newMessageText}
                              onChange={(props.changeMessage)}
                    ></textarea>
                    <button className={dialogsModule["sendMessageBtn"]}
                            onClick={props.onAddNewMessage}
                    >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs