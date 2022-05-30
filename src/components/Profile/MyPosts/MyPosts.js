import React from 'react';
import profileModule from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
    return (
        <div className={profileModule["myPosts"]}>
            My Posts
            <div className={profileModule["postCreation"]}>
                <textarea className={profileModule["tArea"]} rows={5}></textarea>
                <button className={profileModule["addPostButton"]}>Add post</button>
            </div>
            <Post name = "Dima" message = "Some message lorem1" likesCount="2"/>
            <Post name = "Leva" message = "We can do it!" likesCount="2"/>
        </div>
    )
}

export default MyPosts