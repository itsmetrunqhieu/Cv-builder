import './Login.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
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
    navigate("/user-profile")
  };

  useEffect(() => {
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-right');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="Login">
        <img
            src='/Image/Login_Screen/BG.png'
            className='Background'
            alt='Background'
        />
        <div className="Login-header">
            <Link to="/">
              <p className="CV-Buider-Name">CV Builder</p>
            </Link>
            <Link to="/register">
              <button className="Sign-up-button">Sign up</button>
            </Link>
        </div>
        <div className="Login-main">
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
            <div className="Login-part hidden-right">
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
                <Link to="">
                  <p className='forgot-password-text'>Forgot password?</p>
                </Link>
                <button className="login-button" onClick={handleSubmit}>Login</button>
                <p className="dont-account-text">
                  Don’t have an account? <Link to="/register" className='dont-account-sign-up-text'>Sign up</Link>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Login;
