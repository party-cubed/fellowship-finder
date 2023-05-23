/* global google */

import { useState } from 'react';
import axios from 'axios';
import GoogleOAuth from './GoogleOAuth';

// function Signup() {
//   return (
//     <main>
//       {/* {GoogleOAuth()} */}
//       test
//     </main>
//   );
// }

// export default Signup;


function Signup() {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const register = () => {
    axios({
      method: 'post',
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: 'http://localhost:3001/signup'
    }).then((res) => { console.log(res); }).catch((err) => { console.log(err); });
  };


  return (
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setRegisterUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={register}>Create Account</button>
    </div>
  );
}

export default Signup;
