import React from 'react';
import profileModule from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts(props) {

    const addPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={profileModule["myPosts"]}>
            My Posts
            <div className={profileModule["postCreation"]}>
                <textarea
                          className={profileModule["tArea"]}
                          value={props.newPostText}
                          onChange={onPostChange}
                          rows={5}/>
                <button
                    className={profileModule["addPostButton"]}
                    onClick={addPost}>Add post
                </button>
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