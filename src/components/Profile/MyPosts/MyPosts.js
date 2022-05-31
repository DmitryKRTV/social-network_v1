import React from 'react';
import profileModule from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts(props) {
    return (
        <div className={profileModule["myPosts"]}>
            My Posts
            <div className={profileModule["postCreation"]}>
                <textarea className={profileModule["tArea"]} rows={5}></textarea>
                <button className={profileModule["addPostButton"]}>Add post</button>
            </div>
            {
                props.postsData.map((item) => {
                    return <Post key={item.name} name={item.name} message={item.message} likesCount={item.likesCount}/>
                })
            }
        </div>
    )
}

export default MyPosts