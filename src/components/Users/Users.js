import React from 'react';
import usersModule from "./Users.module.css";
import profileIMG from "../../assets/images/profileIMG.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i < pageCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = [...pages.slice( curPF, curPL), pageCount];

    return (
        <div>
            <div className={usersModule["pagesBlock"]}>
                {slicedPages.map((p) => {
                    return (<div
                        className={props.currentPage === p ? usersModule["selectedPage"] : ""}
                        onClick={()=>{ props.onPageChanged(p) }}
                    >{p}</div>)
                })}
            </div>
            {props.users.map((user) => {
                return <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : profileIMG} alt={""}
                                 className={usersModule["userPhoto"]}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
    );
};

export default Users;
