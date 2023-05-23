
import { useState } from 'react';

import GoogleOAuth from './GoogleOAuth.jsx';

// function Signin() {
//   return (
//     <main>
//       {/* {GoogleOAuth()} */}

//       test
//     </main>
//   );
// }

// export default Signin;

function Signin() {
  const [signinUsername, setSigninUsername] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

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
      <button>Signin</button>
    </div>
  );
}

export default Signin;
