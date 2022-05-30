import React from 'react';
import PostModule from './Post.module.css';
import profileImg from '../../../../images/profileIMG.png';

function Post(props) {
    return (
        <div className={PostModule["post"]}>
            <div className={PostModule["personalInf"]}>
                <div>
                    <img src={profileImg} alt={'None'}/>
                </div>
                {props.name}
            </div>
            <div className={PostModule["postText"]}>
                {props.message}
            </div>
            <div className={PostModule["like"]}>
                <button>like</button> {props.likesCount}
            </div>
        </div>)
}

export default Post