import axios from "axios";

const ApiIngles = axios.create(
    {
        baseURL: 'http://192.168.0.108:3000/v1',
        headers: 
        {
            "Content-Type": 'application/json'
        }
    })

export {ApiIngles};