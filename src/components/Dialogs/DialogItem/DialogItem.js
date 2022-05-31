import React from 'react';
import dialogItemModule from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

function DialogItem(props){
    return (
        <div className={dialogItemModule["dialog"]}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
