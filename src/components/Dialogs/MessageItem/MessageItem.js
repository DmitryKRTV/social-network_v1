import React from 'react';
import messageItemModule from "./MessageItem.module.css"


function MessageItem(props) {
    return (
        <div className={messageItemModule["message"]}>{props.message}</div>
    )
}

export default MessageItem;
