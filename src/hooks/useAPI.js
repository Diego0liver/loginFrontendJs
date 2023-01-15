import axios from 'axios'


export const api = axios.create({
    baseURL: "http://localhost:7000"
})

export const createAPI = async (email, password)=>{
    return api.post("/login", {email, password})
}

export const cadastro = (nome, email, password)=>{
    return api.post("/registro", {nome, email, password})
}