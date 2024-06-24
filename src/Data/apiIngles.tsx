import axios from "axios";

const ApiIngles = axios.create(
    {
        baseURL: 'http://192.168.2.14:3000/v1',
        headers: 
        {
            "Content-Type": 'application/json'
        }
    })

const ApiInglesForImage = axios.create(
    {
        baseURL: 'http://192.168.2.14:3000/v1',
        headers: 
        {
            "Content-Type": 'multipart/form-data',
            "accept": 'application/json',
        }
    })

export { ApiIngles, ApiInglesForImage };
