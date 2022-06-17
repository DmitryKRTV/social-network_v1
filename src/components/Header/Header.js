import React from 'react';
import logoImg from "../../images/logo.png";
import headerModule from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={headerModule["header"]}>
            <div className={headerModule["logo"]}>
                <a href={"http://localhost:3000/"}>
                    <img src={logoImg} alt={"None"} />
                </a>
            </div>
            <div>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Logout</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header