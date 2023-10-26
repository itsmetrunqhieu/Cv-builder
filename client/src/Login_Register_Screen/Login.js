import './Login.css';
import React, { useState } from 'react';

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const imgStyle = {
    cursor: 'pointer', // Đặt kiểu con trỏ khi di chuột vào hình ảnh thành "pointer"
  };

  return (
    <div className="Login">
        <img 
            src='/Image/Login_Register_Screen/BG.png'
            className='Background'
            alt='Background'
        />
        <header className="Login-header">
            <p className="CV-Buider-Name">CV Buider</p>
            <button className="Sign-up-button">Sign up</button>
        </header>
        <main className="Login-main">
            <img 
                src='/Image/Login_Register_Screen/CV.svg'
                className='CV'
                alt='CV'
            />
            <img 
                src='/Image/Login_Register_Screen/CV-counter.svg'
                className='CV-counter'
                alt='CV-counter'
            />
            <div className="Login-part">
                <p className="Login-text">Login</p>
                <div className="username-form-field">
                  <input type="text" className="form-input" placeholder=" "/>
                  <label for="name" className="form-label">Username</label>
                  <img 
                      src='/Image/Login_Register_Screen/User_alt_light.svg'
                      className='icon'
                      alt='icon'
                  />
                </div>
                <div className="password-form-field">
                  <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    className="form-input"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="form-label">
                    Password
                  </label>
                  <img
                    src="/Image/Login_Register_Screen/View_hide_light.svg"
                    className="icon"
                    alt="icon"
                    onClick={togglePasswordVisibility}
                    style={imgStyle}
                  />
                </div>
                <a href="/" className="forgot">Forgot password?</a>
                <button className="login-button">Login</button>
                <p className="dont-account">Don’t have account? <a href="/Register" style={{ color: '#62A4F0' }}>Sign up</a></p>
            </div>
        </main>
    </div>
  );
}


export default Login;
