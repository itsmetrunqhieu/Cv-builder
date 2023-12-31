import './Register.css';
import '../Store/actions/index.js'
//import '../Login_Screen/Login.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { login, register} from '../Services/AuthService';

function Register() {

  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [iscfPasswordVisible, setIscfPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);
  const [isPreferNotToSayChecked, setIsPreferNotToSayChecked] = useState(false);

  const [errmessgage, setErrmessgage] = useState('');

  const togglePasswordVisibility = () => {  
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglecfPasswordVisibility = () => {
    setIscfPasswordVisible(!iscfPasswordVisible);
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

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMaleCheckboxChange = () => {
    setIsMaleChecked(true);
    setIsFemaleChecked(false);
    setIsPreferNotToSayChecked(false);
  };
  
  const handleFemaleCheckboxChange = () => {
    setIsMaleChecked(false);
    setIsFemaleChecked(true);
    setIsPreferNotToSayChecked(false);
  };
  
  const handlePreferNotToSayCheckboxChange = () => {
    setIsMaleChecked(false);
    setIsFemaleChecked(false);
    setIsPreferNotToSayChecked(true);
  };
  

  const handleSubmit = async () => {
    setErrmessgage('');
    if (password !== confirmPassword) {
      setErrmessgage("Password and Confirm Password do not match.");
      return; // Ngăn việc tiếp tục xử lý nếu không khớp
    }
    // Sử dụng các biến username, password, fullName, email, phone ở đây,
    // có thể gửi đến server hoặc xử lý dữ liệu theo cách khác
    console.log("Submit regiser");
    try{
      const res = await register({
        email: email,
        username: username,
        fullname: fullName,
        phone: phone,
        password: password,
        role: "user",
      })
      // console.log(res);
      const sigin = await login({
        email: email,
        password: password,
      })
      const userData = sigin.data.validUser;
      const jwtToken = sigin.data.cookie;
      localStorage.setItem('user', JSON.stringify(userData));
      document.cookie = `access_token=${jwtToken}`;
      
      navigate("/user-profile");
    }catch(err){
      if(err.response){
        setErrmessgage(err.response.data.msg);
        // alert(err.response.data.msg);
        }else{alert(err.message);}
        
      console.log(err);
    }
  };

  useEffect(() => {
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('showY');
            } else {
                entry.target.classList.remove('showY');
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-bottom');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="Register">
        <div className="Login-header">
            <Link to="/">
              <p className="CV-Buider-Name">CV Builder</p>
            </Link>
            <Link to="/login">
              <button className="Sign-up-button">Sign in</button>
            </Link>
        </div>
        
        <div className="Register-main">
            <p className="Registration-text hidden-bottom">Registration</p>
            <div className="fullname-regis-form-field hidden-bottom">
              <input
                type="text"
                className="form-input"
                placeholder=" "
                value={fullName}
                onChange={handleFullNameChange}
              />
              <label htmlFor="fullname" className="form-label">Full name</label>
              <img 
                  src='/Image/Login_Screen/User_alt_light.svg'
                  className='icon'
                  alt='icon'
              />
            </div>

            <div className="username-regis-form-field hidden-bottom">
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

            <div className="email-regis-form-field hidden-bottom">
              <input
                type="email"
                className="form-input"
                placeholder=" "
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="email" className="form-label">Email address</label>
              <img 
                  src='/Image/Register_Screen/Message_light.svg'
                  className='icon'
                  alt='icon'
              />
            </div>
           
            <div className="phone-regis-form-field hidden-bottom">
              <input
                type="text"
                className="form-input"
                placeholder=" "
                value={phone}
                onChange={handlePhoneChange}
              />
              <label htmlFor="phone" className="form-label">Phone number</label>
              <img 
                  src='/Image/Register_Screen/Phone_light.svg'
                  className='icon'
                  alt='icon'
              />
            </div>
            
            <div className="password-regis-form-field hidden-bottom">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                className="form-input"
                placeholder=" "
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="password" className="form-label">
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

            <div className="cfpassword-regis-form-field hidden-bottom">
              <input
                type={iscfPasswordVisible ? 'text' : 'password'}
                className="form-input"
                placeholder=" "
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <label htmlFor="cfpassword" className="form-label">
                Confirm password
              </label>
              <img
                src={iscfPasswordVisible ? "/Image/Login_Screen/View_light.svg" 
                                      : "/Image/Login_Screen/View_hide_light.svg"}
                className="icon"
                alt="icon"
                onClick={togglecfPasswordVisibility}
                style={imgStyle}
              />
            </div>

            <div className='gender hidden-bottom'>
              <p className='gender-text'>Gender</p>
              <input
                type="checkbox"
                className='male-box'
                checked={isMaleChecked}
                onChange={handleMaleCheckboxChange}
                style={imgStyle}
              />
              <label className='male-text'>Male</label>

              <input
                type="checkbox"
                className='female-box'
                checked={isFemaleChecked}
                onChange={handleFemaleCheckboxChange}
                style={imgStyle}
              />
              <label className='female-text'>Female</label>

              <input
                type="checkbox"
                className='prefer-box'
                checked={isPreferNotToSayChecked}
                onChange={handlePreferNotToSayCheckboxChange}
                style={imgStyle}
              />
              <label className='prefer-text'>Prefer not to say</label>
            </div>
            <div className="error-mesage" style={{color: 'red' }}>
                  {errmessgage}
            </div>
            <button className="login-button register-button hidden-bottom" onClick={handleSubmit}>Register</button>
            <p className="dont-account-text have-account-text hidden-bottom">
              Already have an account? <Link to="/login" className='dont-account-sign-up-text'>Sign in</Link>
            </p>
            
        </div>
    </div>
  );
}

export default Register;
