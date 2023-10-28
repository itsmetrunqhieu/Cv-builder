import './Home.css';
import '../Login_Screen/Login.css';
import '../Register_Screen/Register.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">
                <button>Sign in</button>
            </Link>
            <Link to="/register">
                <button>Sign up</button>
            </Link>
        </div>
    );
}

export default Home;
