import React from 'react';
import friendModule from './Friend.module.css';
import profileImg from '../../../images/profileIMG.png';

function Friend(props) {
    return (

        <div className={friendModule["personBlock"]}>
            <div className={friendModule["avatar"]}>
                <img src={profileImg} alt={'None'}/>
            </div>
            <div className={friendModule["name"]}>
                {props.name}
            </div>
        </div>
    );
};

export default Friend;
