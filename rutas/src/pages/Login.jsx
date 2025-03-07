import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

export const Login = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/Perfil');
    };

    return (
        <div className="w-100 fixed-center py-3">
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{ width: "24rem" }}>
            <div className="card-body">
            <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>

            <form>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nombre@ejemplo.com"
                    required
                />
                </div>

                <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Contraseña
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="••••••••"
                    required
                />
                </div>

                <button type="submit" className="btn btn-dark w-100">
                Iniciar Sesión
                </button>
            </form>

            <div className="text-center mt-3">
                <a href="#" className="text-decoration-none">
                ¿Olvidaste tu contraseña?
                </a>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}
