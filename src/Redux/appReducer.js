import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH';

const initialValue = {
    isAuth: false
};

const appReducer = (state = initialValue, action) => {
    switch (action.type) {
        case TOGGLE_IS_AUTH: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export const toggleIsAuth = (isAuth) => {
    return {
        type: TOGGLE_IS_AUTH,
        payload: {
            isAuth
        }
    }
};

export const login = (formData) => async (dispatch) => {
    try {
        await authAPI.login(formData.login, formData.password);
        dispatch(toggleIsAuth(true));
    } catch (e) {
        dispatch(stopSubmit('login', {_error: e}));
    }
};


export default appReducer;