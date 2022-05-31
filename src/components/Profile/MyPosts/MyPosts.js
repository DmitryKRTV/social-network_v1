import React from 'react';
import profileModule from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {

    let postsData = [
        {
            name: "Dmitry",
            message: "Gello",
            likesCount: "2",
        },
        {
            name: "Andrey",
            message: "Hello",
            likesCount: "3",
        },
        {
            name: "Sveta",
            message: "Yo",
            likesCount: "5",
        },
        {
            name: "Victor",
            message: "Whats",
            likesCount: "1",
        },
        {
            name: "Valera",
            message: "ye",
            likesCount: "0",
        },
    ]

    return (
        <div className={profileModule["myPosts"]}>
            My Posts
            <div className={profileModule["postCreation"]}>
                <textarea className={profileModule["tArea"]} rows={5}></textarea>
                <button className={profileModule["addPostButton"]}>Add post</button>
            </div>
            {
                postsData.map((item) => {
                    return <Post key={item.name} name={item.name} message={item.message} likesCount={item.likesCount}/>
                })
            }
        </div>
    )
}

export default MyPosts