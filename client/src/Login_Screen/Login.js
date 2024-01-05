import './Login.css';
import { connect } from 'react-redux';
import React, { useDebugValue, useEffect, useState } from 'react';
//import { push } from "connected-react-router";
import * as actions from "../Store/actions";
import { Link, useNavigate } from "react-router-dom";

import { login} from '../Services/AuthService';

function Login() {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      navigate("/user-profile");
    }

  })

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

  const handleSubmit = async () => {
    try{
      const res = await login({
        email: username,
        password: password,
      })
      console.log(res);
      const userData = res.data.validUser;
      const jwtToken = res.data.cookie;
      localStorage.setItem('user', JSON.stringify(userData));
      document.cookie = `access_token=${jwtToken}`;

      navigate("/user-profile");
    }catch(err){
      alert(err.response.data.message);
      console.log("errorvlra");
    }
    
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
                  <label htmlFor="username" className="form-label">Email</label>
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

// const mapStateToProps = state => {
//   return {
//       language: state.app.language
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//       //navigate: (path) => dispatch(push(path)),
//       // userLoginFail: () => dispatch(actions.adminLoginFail()),
//       userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
//   };


// };

export default(Login);
