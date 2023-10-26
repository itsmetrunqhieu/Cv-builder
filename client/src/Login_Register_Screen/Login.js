import './Login.css';

function Login() {
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
                <div className="username-container">
                  <input type="text" placeholder="Username" className="username"/>
                </div>
                <div className="password-container">
                  <input type="password" placeholder="Password" className="username"/>
                </div>
                <p className="forgot">Forgot password?</p>
                <button className="login-button">Login</button>
                <p className="dont-account">Don’t have account? <a href="/Register" style={{ color: 'blue' }}>Sign up</a></p>
            </div>
        </main>
    </div>
  );
}


export default Login;
