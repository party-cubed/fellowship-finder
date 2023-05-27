
import { useState } from 'react';
import axios from 'axios';
import GoogleOAuth from '../components/GoogleOAuth';



function Signin() {
  const [signinUsername, setSigninUsername] = useState('');
  const [signinPassword, setSigninPassword] = useState('');


  const signin = () => {
    axios({
      method: 'post',
      data: {
        username: signinUsername,
        password: signinPassword
      },
      withCredentials: true,
      url: 'http://localhost:3001/signin'
    }).then((res) => console.log(res)).catch((err) => console.error(err));
  };


  return (
    <div>
      <h1>Signin</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setSigninUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setSigninPassword(e.target.value)}
      />
      <button onClick={signin}>Signin</button>
    </div>
  );
}

export default Signin;
