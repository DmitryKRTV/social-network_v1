import React from 'react'

function Navbar() {
    return (
        <nav className={"app__nav"}>
            <div>
                <a href={"http://localhost:3000/"}>Profile</a>
            </div>
            <div>
                <a href={"http://localhost:3000/"}>Messages</a>
            </div>
            <div>
                <a href={"http://localhost:3000/"}>News</a>
            </div>
            <div>
                <a href={"http://localhost:3000/"}>Music</a>
            </div>
            <div>
                <a href={"http://localhost:3000/"}>Settings</a>
            </div>
            <div>
                <a href={"http://localhost:3000/"}>More</a>
            </div>
        </nav>
    )
}

export default Navbar

