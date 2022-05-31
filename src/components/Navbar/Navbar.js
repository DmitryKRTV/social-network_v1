import React from 'react'
import navModule from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


const isActiveLink = function({isActive}) {
    if(isActive) {
        return `${navModule["aLink"]} ${navModule["active"]}`
    } else {
        return `${navModule["aLink"]}`
    }
}                                                                                                //  Использование модулей даёт возможность инкапсулирвоать
                                                                                                 //файлы и создавать модульные области видимости. При этом
function Navbar(props) {                                                                              //создаётся отдельный модуль, а например, файл css становиться объектом,
    return (                                                                                     //который имеет пары "(ключ) имя класса указанное нами" : "(значение)уникальное имя класса созданое ректом"
        <nav className={navModule["nav"]}>                                                       {/*При помощи этого можно избежать повторений классов либо имён объектов.*/}
            <div className={navModule.item}>                                                     {/*Для обращение к свойсву объекта(значенияю) нужно прописывать имя класса с фигурными скобками*/}
                <NavLink className={isActiveLink} to={"/profile"}>Profile</NavLink>                  {/*className = {имямодуля["Указанное нами имя класса"]} */}
            </div>                                                                               {/*className = {`{имямодуля["Указанное нами имя класса"]}} {имямодуля["Указанное нами имя класса"]}}`} */}
            <div className={navModule["item"]}>                                                  {/*При неободимости нескольких классов использовать интерполяцию и ${}*/}
                <NavLink className={isActiveLink} to={"/dialogs"}>Messages</NavLink>
            </div>
            <div className={navModule["item"]}>
                <NavLink className={isActiveLink} to={"/news"}>News</NavLink>
            </div>
            <div className={navModule["item"]}>
                <NavLink className={isActiveLink} to={"/music"}>Music</NavLink>
            </div>
            <div className={navModule["item"]}>
                <NavLink className={isActiveLink} to={"/settings"}>Settings</NavLink>
            </div>
            <div className={navModule["friendsBlock"]}>
                <div className={navModule["preview"]}>Friends</div>
                {
                    props.friendsData.map((item)=>{
                        return <Friend name = {item.name}/>
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar


