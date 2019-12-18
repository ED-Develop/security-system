const tableData = [
    {
        id: 1,
        title: 'lorem',
        description: 'lorem ipsum dorem smit lorem ipsum ',
        date: '16.12.2019 15:12'
    },
    {
        id: 2,
        title: 'lorem',
        description: 'lorem ipsum dorem smit lorem ipsum ',
        date: '16.12.2019 15:12'
    },
    {
        id: 3,
        title: 'lorem',
        description: 'lorem ipsum dorem smit lorem ipsum ',
        date: '16.12.2019 15:12'
    },
    {
        id: 4,
        title: 'lorem',
        description: 'lorem ipsum dorem smit lorem ipsum ',
        date: '16.12.2019 15:12'
    },
    {
        id: 5,
        title: 'lorem',
        description: 'lorem ipsum dorem smit lorem ipsum ',
        date: '16.12.2019 15:12'
    }
];
const authData = {
    login: 'ddi',
    password: '123'
};

const axios = {
    get(url) {
        return Promise.resolve({data: tableData})
    },
    post(url, request) {
        return new Promise((resolve, reject) => {
            if (authData.login === request.login && authData.password === request.password) {
                resolve({resultCode: 1});
            } else {
                reject('Incorrect login or password');
            }
        })
    },
    delete(uri) {
        return new Promise((resolve, reject) => {
            if (uri.password === authData.password) {
                resolve();
            } else {
                reject('Incorrect password');
            }
        })
    }
};

export default axios;