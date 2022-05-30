import React from 'react';
import dialogsModule from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div className={dialogsModule["content"]}>
            <div className={dialogsModule["dialogs"]}>
                <div className={dialogsModule["dialogs-items"]}>
                    <div className={dialogsModule["dialog"]}>
                        <NavLink to={"/dialogs/1"}>Dmitry</NavLink>
                    </div>
                    <div className={dialogsModule["dialog"]}>
                        <NavLink to={"/dialogs/2"}>Andrey</NavLink>
                    </div>
                    <div className={dialogsModule["dialog"]}>
                        <NavLink to={"/dialogs/3"}>Sveta</NavLink>
                    </div>
                    <div className={dialogsModule["dialog"]}>
                        <NavLink to={"/dialogs/4"}>Victor</NavLink>
                    </div>
                    <div className={dialogsModule["dialog"]}>
                        <NavLink to={"/dialogs/5"}>Valera</NavLink>
                    </div>
                </div>
            </div>
            <div className={dialogsModule["messages"]}>
                <div className={dialogsModule["message"]}>Hi</div>
                <div className={dialogsModule["message"]}>Howya</div>
                <div className={dialogsModule["message"]}>Hrllo</div>
            </div>
        </div>
    )
}

export default Dialogs