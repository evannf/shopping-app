import axios from "axios";

export const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
    }
});