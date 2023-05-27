
import { useState } from 'react';
import axios from 'axios';

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
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
