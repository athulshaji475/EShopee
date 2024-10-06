// src/LoginPage.js
import wallImage from '../Images/Icons/Wallimage.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigation=useNavigate()
  // Inline styles for the components
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#fff',
    boxShadow: '5 8px 16px rgba(0, 0, 0, 0.2)', // Increased shadow for more depth
    overflow: 'hidden', // Prevents any overflow
   padding:'20px '
   
  };

  const leftContainerStyle = {
    flex: 1, // Ensures equal width with right container
    backgroundImage: `url(${wallImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%', // Ensures it takes full height
  };

  const rightContainerStyle = {
    flex: 1, // Ensures equal width with left container
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const logoStyle = {
    color: '#333',
    marginBottom: '20px',
    fontSize: '32px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  };

  const inputStyle = {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const linkStyle = {
    marginTop: '10px',
    color: '#007bff',
    cursor: 'pointer',
  };



  const Handle_Login=()=>{
    try {
   navigation('/Home')
        
    } catch (error) {
        
    }
  }
  return (
    <div style={containerStyle}>
      <div style={leftContainerStyle} />
      <div style={rightContainerStyle}>
        <h1 style={logoStyle}>Shopee</h1>
        <form style={formStyle}>
          <input type="email" placeholder="Email" required style={inputStyle} />
          <input type="password" placeholder="Password" required style={inputStyle} />
          <button type="submit" style={buttonStyle} onClick={Handle_Login}>Login</button>
        </form>
        <a href="/register" style={linkStyle}>Register</a>
        <a href="/forgot-password" style={linkStyle}>Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;
