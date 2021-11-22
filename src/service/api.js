import axios from 'axios';

const URL = "http://localhost:4000";

function createHeaders(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}

function postRegister(body) {
    return axios.post(`${URL}/sign-up`,body);
}

function postLogin(body){
    return axios.post(`${URL}/sign-in`,body);
}

function getSignature(token){
    const config =  createHeaders(token);
    return axios.get(`${URL}/signature`, config);
}

export {
    postRegister,
    postLogin,
    getSignature,
}