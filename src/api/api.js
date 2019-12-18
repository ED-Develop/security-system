import axios from "../__mocks__/axios";

export const tableAPI = {
    getTableData() {
        return axios.get('/url').then(response => response.data);
    },
    deleteItem(password) {
        return axios.delete({password});
    }
};

export const authAPI = {
    login(login, password) {
        return axios.post('/url', {login, password});
    },
};

