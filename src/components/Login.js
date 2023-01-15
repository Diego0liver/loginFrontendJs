import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Auth } from '../context/Provider';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const {logi} = useContext(Auth)
    
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const logins=(e)=>{
    e.preventDefault()
    logi(email, password)
   }

  return (
    <div className='container'>
      <div className='box'>
        <h1 className='texto'>Login</h1>
        <FloatingLabel
         controlId="floatingInput"
        label="Email"
        className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=> setEmail (e.target.value)}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Senha">
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword (e.target.value)}/>
        </FloatingLabel>
       <Link to="/cadastro">Cadastrar</Link>
        <Button variant="success"
        onClick={logins} className='btn'>Logar</Button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login