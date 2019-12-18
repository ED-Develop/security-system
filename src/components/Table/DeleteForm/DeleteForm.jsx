import React from 'react';
import style from './DeleteForm.module.css';
import {Field, reduxForm} from "redux-form";

const DeleteForm = ({handleSubmit, ...props}) => {
    const errorElement = <div className={style.error}>
        {props.error}
    </div>;

    return (
        <form onSubmit={handleSubmit} className={style.deleteForm}>
            <Field autoFocus={true} component='input' type='password' name='password' placeholder='Password'/>
            <button>Delete</button>
            {props.error && errorElement}
        </form>
    )
};

export default reduxForm({form: 'delete'})(DeleteForm);