import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Layout } from './pages/Layout';
import { Login } from './pages/Login';
import { Perfil } from './pages/Perfil';
import Footer from './components/Footer';

function App() {
  return (
    <div className = "container">
      <Layout/>
        <Routes>
          <Route path = "Dashboard" element={<Dashboard />} /> 
          <Route path = "Home" element={<Home />} />
          <Route path = "Login" element={<Login />} />
          <Route path = "Perfil" element={<Perfil />} />
          <Route path = "*" element={<Home />} />
        </Routes>
        <Footer/>
    </div>
  ); 
}

export default App
