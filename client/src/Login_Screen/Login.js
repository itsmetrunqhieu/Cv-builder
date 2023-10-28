import './Login.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const imgStyle = {
    cursor: 'pointer',
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Sử dụng username và password ở đây, có thể gửi đến server hoặc xử lý dữ liệu theo cách khác
  };

  return (
    <div className="Login">
        <img
            src='/Image/Login_Screen/BG.png'
            className='Background'
            alt='Background'
        />
        <header className="Login-header">
            <p className="CV-Buider-Name">CV Builder</p>
            <Link to="/register">
              <button className="Sign-up-button">Sign up</button>
            </Link>
        </header>
        <main className="Login-main">
            <img 
                src='/Image/Login_Screen/CV.svg'
                className='CV'
                alt='CV'
            />
            <img 
                src='/Image/Login_Screen/CV-counter.svg'
                className='CV-counter'
                alt='CV-counter' 
            />
            <div className="Login-part">
                <p className="Login-text">Login</p>
                <div className="username-form-field">
                  <input
                    type="text"
                    className="form-input"
                    placeholder=" "
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  <label htmlFor="username" className="form-label">Username</label>
                  <img 
                      src='/Image/Login_Screen/User_alt_light.svg'
                      className='icon'
                      alt='icon'
                  />
                </div>
                <div className="password-form-field">
                  <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    className="form-input"
                    placeholder=" "
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <label htmlFor="name" className="form-label">
                    Password
                  </label>
                  <img
                    src={isPasswordVisible ? "/Image/Login_Screen/View_light.svg" 
                                          : "/Image/Login_Screen/View_hide_light.svg"}
                    className="icon"
                    alt="icon"
                    onClick={togglePasswordVisibility}
                    style={imgStyle}
                  />
                </div>
                <Link to="" className="forgot" style={{ color: '#62A4F0' }}>Forgot password?</Link>
                <button className="login-button" onClick={handleSubmit}>Login</button>
                <p className="dont-account">Don’t have an account? <Link to="/register" style={{ color: '#62A4F0' }}>Sign up</Link></p>
            </div>
        </main>
    </div>
  );
}

export default Login;
