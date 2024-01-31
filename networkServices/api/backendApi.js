import axios from "axios";

const instance = axios.create({
    baseURL: "http://192.168.100.195:3000/",//BACKEND URL
    headers: {
        'content-type': 'application/json',
    },
});

export default instance;
