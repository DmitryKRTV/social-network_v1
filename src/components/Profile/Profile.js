import React from 'react';
import profileModule from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={profileModule["content"]}>
            <div className={profileModule["description"]}>
                <div className={profileModule["avatar"]}>
                    Avatar
                </div>
                <div className={profileModule["characteristics"]}>
                    description of characteristics
                </div>
            </div>
            <div className={profileModule["personalImage"]}>
                Some Profile Image
            </div>
           <MyPosts/>
        </div>
    )
}

export default Profile