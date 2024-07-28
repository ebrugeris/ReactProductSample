import axios from "axios";


export const axiosInstance = axios.create({
    baseURL:"https://northwind.vercel.app/api/"
})

export const axiosInstanceJson = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})