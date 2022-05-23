import React from 'react';
import logoImg from "../images/logo.png"

function Header() {
    return (
        <header className={"app__header"}>
            <div className={"logo"}>
                <a href={"http://localhost:3000/"}>
                    <img src={logoImg} alt={"None"} />
                </a>
            </div>
        </header>
    )
}

export default Header