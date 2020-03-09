import axios from 'axios'

export const axiosInstanceNoAuth = axios.create({
    baseURL: 'url',
});

export const axiosInstanceAuth = axios.create({
    baseURL: 'url',
    headers: {
        Authorization: {
            toString() {
                return `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
});