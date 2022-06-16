import React from "react";
import dialogsModule from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { Navigate } from "react-router-dom";
import {Field, Form, Formik} from "formik";

function Dialogs(props) {

    const addMessage = (text) => {
        props.addNewMessage(text);
    }

    return (
        <div className={dialogsModule["content"]}>
            <div className={dialogsModule["dialogs"]}>
                <div className={dialogsModule["dialogs-items"]}>
                    {
                        props.dialogsData.map((item) => {
                            return <DialogItem key={item.name} name={item.name} id={`${item.id}`}/>
                        })
                    }
                </div>
            </div>
            <div className={dialogsModule["messages"]}>
                {
                    props.messagesData.map((item) => {
                        return <MessageItem key={item.message} message={item.message} />
                    })
                }
                <div className={dialogsModule["messageBlock"]}>
                    <AddNewMessageForm  addMessage={addMessage} />
                </div>
            </div>
        </div>
    )
}

const AddNewMessageForm = (props) => {
    return(<div>
        <Formik
            initialValues={
                {newMessageBody: ""}
            }
            onSubmit={(values,{resetForm})=>{
                props.addMessage(values.newMessageBody)
                resetForm({values:""})
            }
            }>
            <Form>
                <div>
                    <Field
                        name={'newMessageBody'}
                        as={'textarea'}
                        type={'text'}
                        placeholder={'enter message'} />
                </div>
                <button type={'submit'}>Send</button>
            </Form>

        </Formik>
    </div>)
}

export default Dialogs