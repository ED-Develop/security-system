import {applyMiddleware, combineReducers, createStore} from "redux";
import tableReducer from "./tableReducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./appReducer";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    table: tableReducer,
    app: appReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;