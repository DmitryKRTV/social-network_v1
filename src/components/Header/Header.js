import React from 'react';
import logoImg from "../../images/logo.png";
import headerModule from './Header.module.css';

function Header() {
    return (
        <header className={headerModule["header"]}>
            <div className={headerModule["logo"]}>
                <a href={"http://localhost:3000/"}>
                    <img src={logoImg} alt={"None"} />
                </a>
            </div>
        </header>
    )
}

export default Header