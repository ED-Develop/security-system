import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/appReducer";
import {Redirect} from "react-router-dom";

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData);
    };
    if (isAuth) {
        return <Redirect to='/'/>
    }
    return (
        <div className={style.login}>
            <h2>Login</h2>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
};

const LoginForm = ({handleSubmit, ...props}) => {
    const errorElement = <div className={style.error}>
        {props.error}
    </div>;

    return (
        <form onSubmit={handleSubmit}>
            {props.error && errorElement}
            <div>
                <Field component='input' name='login' placeholder='Login'/>
            </div>
            <div>
                <Field component='input' type='password' name='password' placeholder='Password'/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => {
    return {
        isAuth: state.app.isAuth
    }
};

export default connect(mapStateToProps, {login})(Login);