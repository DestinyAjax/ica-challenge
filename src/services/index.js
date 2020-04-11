import axios from 'axios';
export const baseURL = process.env.NODE_ENV === 'production' ? 
  'https://ica-web-api.herokuapp.com/api/v1/' : 'http://ica-web-api.herokuapp.com/api/v1/';

export const URL = process.env.NODE_ENV === 'production' ? 
  'https://ica-web-api.herokuapp.com/' : 'http://ica-web-api.herokuapp.com/';

const getFunc = (path) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}${path}`)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const delFunc = path => {
    return new Promise((resolve, reject) => {
        axios.delete(`${baseURL}${path}`)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const postFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const uploadPostFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + path, payload, {
            'Content-Type' : 'multipart/form-data'
        })
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const singlePostFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const putFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.put(baseURL + path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

export { getFunc, delFunc, postFunc, putFunc, singlePostFunc, uploadPostFunc };