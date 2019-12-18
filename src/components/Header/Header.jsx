import React from 'react';
import style from './Heder.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {toggleIsAuth} from "../../Redux/appReducer";

const Header = (props) => {
    const onLogout = (e) => {
        e.preventDefault();
        props.toggleIsAuth(false);
    };

    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <NavLink to='/'><span>DDI</span> development</NavLink>
                </div>
                <div className={style.login}>
                    {props.isAuth
                        ? <a onClick={onLogout}>Logout</a>
                        : <NavLink to='/login'>Login</NavLink>}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.app.isAuth
    }
};

export default connect(mapStateToProps, {toggleIsAuth})(Header);