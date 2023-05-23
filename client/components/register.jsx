
import { useState } from 'react';

function Register() {
  const { registerUsername, setRegisterUsername } = useState('');
  const { registerPassword, setRegisterPassword } = useState('');

  return (
    <div>
      <h1>register</h1>
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
    </div>
  );
}

export default Register;
