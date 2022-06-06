import React from 'react';
import profileModule from './Profile.module.css';
import PersonDescription from "./PersonDescrption/PersonDescription";
import PersonImage from "./PersonImage/PersonImage";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {
    return (
        <div className={profileModule["content"]}>
            <PersonDescription/>
            <PersonImage/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile