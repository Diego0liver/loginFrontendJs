import { Auth } from '../context/Provider';
import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';

const Protegida = () => {
  const {logout} = useContext(Auth)
  const emailSalve = localStorage.getItem("email")
  const sair=()=>{
    logout()
  }

  return (<div>
  <h1>Bem vindo {emailSalve}</h1>
  <p>Para deslogar da conta click em sair</p>
  <Button className='btn-sai' variant="danger" onClick={sair}>sair</Button>
  </div>
    
  )
}

export default Protegida