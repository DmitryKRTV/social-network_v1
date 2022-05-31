import React from 'react';
import profileModule from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import PersonDescription from "./PersonDescrption/PersonDescription";
import PersonImage from "./PersonImage/PersonImage";


function Profile() {
    return (
        <div className={profileModule["content"]}>
            <PersonDescription/>
            <PersonImage/>
            <MyPosts/>
        </div>
    )
}

export default Profile