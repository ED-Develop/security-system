import {tableAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_TABLE_ITEMS = 'ddi/table/SET_TABLE_ITEMS';
const DELETE_ITEM_SUCCESS = 'ddi/table/DELETE_ITEM_SUCCESS';

let initialValue = {
    tableItems: []
};

const tableReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SET_TABLE_ITEMS: {
            return {
                ...state,
                tableItems: [...action.data]
            }
        }
        case DELETE_ITEM_SUCCESS: {
            return {
                ...state,
                tableItems: state.tableItems.filter(item => item.id !== action.id)
            }
        }
        default:
            return state;
    }
};

const setTableItems = (data) => {
    return {
        type: SET_TABLE_ITEMS,
        data
    }
};

const deleteItemSuccess = (id) => {
    return {
        type: DELETE_ITEM_SUCCESS,
        id
    }
};

export const getTableItems = () => async (dispatch) => {
    const data = await tableAPI.getTableData();
    dispatch(setTableItems(data));
};

export const deleteItem = (id, password) => async (dispatch) => {
    try {
        await tableAPI.deleteItem(password);
        dispatch(deleteItemSuccess(id));
    } catch (e) {
        dispatch(stopSubmit('delete', {_error: e}));
    }
};

export default tableReducer;