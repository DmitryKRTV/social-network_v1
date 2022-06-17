import React from 'react';
import profileModule from './MyPosts.module.css';
import Post from "./Post/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";


function MyPosts(props) {

    return (
        <div className={profileModule["myPosts"]}>
            My Posts
            <div className={profileModule["postCreation"]}>
                <AddNewPostForm addPost={props.addPost}/>
            </div>
            {
                props.postsData.map((item) => {
                    return <Post key={item.name} name={item.name} message={item.message} likesCount={item.likesCount}/>
                })
            }
        </div>
    )
}

const AddNewPostForm = (props) => {

    const validationSchemaNewPostForm = Yup.object().shape({
        newPostBody: Yup.string()
            .min(2, "Must be longer than 1 character")
            .required( "Enter something" )
    });

    const addPostMessage = (text) => {
        props.addPost(text);
    }


    return (
        <div>
            <Formik initialValues={
                {
                    newPostBody: ""
                }
            }
                    validationSchema={validationSchemaNewPostForm}
                    onSubmit={(values, {resetForm}) => {
                        addPostMessage(values.newPostBody)
                        resetForm({values: ""})
                    }
                    }>
                {( {isSubmitting}) => (
                <Form>
                    <div>
                        <Field
                            name={'newPostBody'}
                            as={'input'}
                            type={'text'}
                            placeholder={'enter message'}
                            />

                    </div>
                    <ErrorMessage name="newPostBody">
                        { msg => <div className={profileModule["error"]}>{msg}</div> }
                    </ErrorMessage>
                    <button type={'submit'} disabled={isSubmitting}>Send</button>
                </Form>
                    )}
            </Formik>
        </div>
    )
}

export default MyPosts