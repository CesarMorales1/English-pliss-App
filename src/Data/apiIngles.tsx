import axios from "axios";

const ApiIngles = axios.create(
    {
        baseURL: 'http://192.168.2.19:3000/v1',
        headers: 
        {
            "Content-Type": 'application/json'
        }
    })

export {ApiIngles};