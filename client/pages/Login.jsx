
import { useState } from 'react';
import axios from 'axios';

const style = {
  button: {
    border: '3px solid #FFFFFF',
    borderRadius: '15px',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    fontFamily: 'Nova Cut',
    fontSize: '24px',
    lineHeight: '58px',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '150px',
    margin: '10px'
  }
};

function Login() {
  const handleLogin = () => {
    axios.get('/auth/login')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Failed to redirect:', err);
      });
  };

  const login = async function () {
    window.location.href = 'http://localhost:3001/auth/google';
  };

  return (
    <button onClick={login} style={style.button}>Login</button>
  );
}

export default Login;
