import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:6780'
})

export default instance;