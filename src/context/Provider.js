import React,{  createContext, useEffect, useState } from "react"
import {api, createAPI, cadastro} from '../hooks/useAPI'
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Auth = createContext({});

const not = () => toast.error("Nao autorizado");
const yes = () => toast.success("Cadastrado com sucesso");

function Provider ({ children }){
    let history = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoagind] = useState(true)

    useEffect(()=>{
         const token = localStorage.getItem("token")
         const emails = localStorage.getItem("email")
         setUser(token)
         setUser(emails)
        
        setLoagind(false)
    },[])


    const logi = async (email, password)=>{
         const res = await createAPI(email, password)

        const localUser = res.data
        const token = res.data.token
        const emails = res.data.nome
        
        api.defaults.headers.Authorization = `Bearer ${token}`
           if(res.data.token !== undefined){
            localStorage.setItem("token", token)
            localStorage.setItem("email", emails)
            setUser(localUser)
            console.log(res.data)
            history("/go")}
            else{
                not()
            }
    }
    
    const logout=()=>{
        setUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        api.defaults.headers.Authorization = null
    }

  const registro = async (nome, email, password)=>{
    const res = await cadastro(nome, email, password)
    .then(()=>{yes()}).catch(()=>{alert('Esse email ja existe')})
    return res.data
  }


return(
    <Auth.Provider value={{ autentificado:!!user, user, loading, logi, logout, registro}}>
        {children}
    </Auth.Provider>
)

}
export{Provider, Auth}