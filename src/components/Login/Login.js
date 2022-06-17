import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";




const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required 1';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const validationSchemaLoginForm = Yup.object().shape( {
    password: Yup.string()
        .min( 2, "Must be longer than 2 characters" )
        .min( 5, "Must be longer than 5 characters" )
        .required( "Required 2" )
} );


const Login = (props) => {

    if(props.auth.isAuth) {
        return <Navigate to="/profile"/>
    }

    return (
        <div>
            <h2> ... Login 555 </h2>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}
                onSubmit={(values) => {
                    console.log(props)
                    props.login(values.email, values.password, values.rememberMe)
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field
                                name={'email'}
                                type={'text'}
                                placeholder={'e-mail'} />
                        </div>
                        <ErrorMessage name="email" component="div" />

                        <div>
                            <Field
                                name={'password'}
                                type={'password'}
                                placeholder={'password'} />
                        </div>
                        <ErrorMessage name="password" component="div" />

                        <div>
                            <Field
                                type={'checkbox'}
                                name={'rememberMe'}
                                id='rememberMe' />
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>

                        <button type={'submit'}>Login</button>
                    </Form>
                )}
            </Formik>

            <div>
                ...
            </div>

        </div>
    )
}

    let mapStateToProps = (state) => {
        return (
            {
                auth: state.auth,
            }
        )
    }

export default connect(mapStateToProps, {login, logout})(Login)