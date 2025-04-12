import React, { useState } from "react";
import "./Login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.data, e.Login);

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.json();
      
      localStorage.setItem("token", data.token);
      console.log(data.token);
      alert("Inicio de sesión exitoso");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="logo">
          <h1>accenture<span className="accent-mark"></span></h1>
        </div>
        
        <div className="form-container">
          <h2>Sign in to your account</h2>
          <p className="subtitle">Enter your email and password</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="input-group">
              <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="sign-in-button">
              Sign In with Email
            </button>
            
            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>
            
            <button type="button" className="github-button">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </button>
            
            <p className="terms">
              By clicking continue, you agree to our
              <br />
              <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>.
            </p>
          </form>
          
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;