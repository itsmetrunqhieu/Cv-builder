import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './index.css';
import Home from './Home_Screen/Home';
import Login from './Login_Screen/Login';
import Register from './Register_Screen/Register';
import UserProfile from './User_Profile/UserProfile';
import CreateCVOptiopns from './Create_CV/create-cv-options';
import CreateCV from './Create_CV/create-cv';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/create-cv-options" element={<CreateCVOptiopns />} />
        <Route path="/create-cv" element={<CreateCV/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
