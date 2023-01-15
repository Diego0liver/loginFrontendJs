import React, { useContext } from 'react'
import { Route, Routes, Link, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import Protegida from './components/Protegida';
import Login from "./components/Login"
import { Auth } from './context/Provider';
import Cadastro from './components/Cadastro';


function App() {
  const navigate = useNavigate();

  const Privit = ({children})=>{
    const { autentificado, loading } = useContext(Auth)
    if(loading){
      return<p>Carregando</p>
    }

    if(!autentificado){
      return navigate("/login");
    }
    return children
  }

  return (
    <div className='app'>
      <header className='heade'>
        <h1>Sistema de login</h1>
        <nav>
         <Link className='link' to='/'>Home</Link>
         <Link className='link' to="/go">Dashboard</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/go" element={<Privit><Protegida /></Privit>} />
      </Routes>
    </div>
  );
}

export default App;
