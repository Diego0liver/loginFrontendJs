import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Auth } from '../context/Provider';
import {Link, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const Cadastro = () => {
    const {registro} = useContext(Auth)
    const navigate = useNavigate();
  const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [validated, setValidated] = useState(false);

   const cadastrar=()=>{
    if(validated){
    registro(nome, email, password)
    setNome('')
    setEmail('')
    setPassword('')
    navigate("/login")
  }  } 

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='container'>
    <Form   className='box_cadastro' noValidate validated={validated} onSubmit={handleSubmit}>
    <h1 className='texto'>Cadastrar</h1>
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            value={nome} onChange={(e)=> setNome (e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Ex: exemplo@exemplo.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
            value={email} onChange={(e)=> setEmail (e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Senha</Form.Label>
          <Form.Control minlength="6" type="password" placeholder="Minimo 6 caracteres" required
          value={password} onChange={(e)=> setPassword (e.target.value)} />
          <Form.Control.Feedback type="invalid">
           Adicione mais que 6 caracteres
          </Form.Control.Feedback>
        </Form.Group>
        <Link to='/go'>Logar</Link>
      <Button variant="success" type="submit"
          onClick={cadastrar}  className='btn'>Cadastrar</Button>
    </Form>
    </div>
  )
}

export default Cadastro