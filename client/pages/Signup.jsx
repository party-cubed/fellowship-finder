/* eslint-disable jsx-a11y/label-has-associated-control */
/* global google */

import { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleOAuth from '../components/GoogleOAuth';

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
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerAge, setRegisterAge] = useState('');
  const [registerMaxTravelDist, setRegisterMaxTravelDist] = useState('');
  const [registerCanHost, setRegisterCanHost] = useState('');
  const [registerDM, setRegisterDM] = useState('');
  const [registerCombatHeaviness, setRegisterCombatHeaviness] = useState('');
  const [registerStrategyHeaviness, setRegisterStrategyHeaviness] = useState('');
  const [registerRoleplayFocus, setRegisterRoleplayFocus] = useState('');
  const [registerStoryFocus, setRegisterStoryFocus] = useState('');
  const [registerSobriety, setRegisterSobriety] = useState('');
  const [currentUserId, setCurrentUserId] = useState('');

  const getUser = () => {
    axios.get('http://localhost:3001/auth/login/success', {
      withCredentials: true,
    })
      .then((response) => {
        setCurrentUserId(response.data.id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const register = () => {
    axios({
      method: 'POST',
      data: {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
        age: registerAge,
        maxTravelDist: registerMaxTravelDist,
        sober: registerSobriety,
        canHost: registerCanHost,
        DM: registerDM,
        combatHeaviness: registerCombatHeaviness,
        strategyHeaviness: registerStrategyHeaviness,
        storyFocus: registerStoryFocus,
        roleplayFocus: registerRoleplayFocus,
        id: currentUserId,
      },
      withCredentials: true,
      url: 'http://localhost:3001/signup'
    }).then((res) => { console.log(res); }).catch((err) => { console.log(err); });
  };

  return (
    <div>
      <h1>Signup</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          placeholder="age"
          min="18"
          onChange={(e) => setRegisterAge(e.target.value)}
        />
      </div>

      <div>
        <label>Max Travel Distance:</label>
        <input
          type="number"
          name="maxTravelDist"
          placeholder="maxTravelDist"
          onChange={(e) => setRegisterMaxTravelDist(e.target.value)}
        />
      </div>

      <div>
        <label>Can Host:</label>
        <input
          type="text"
          name="canHost"
          placeholder="canHost"
          onChange={(e) => setRegisterCanHost(e.target.value)}
        />
      </div>

      <div>
        <label>Sobriety:</label>
        <input
          type="text"
          name="sober"
          placeholder="sobriety"
          onChange={(e) => setRegisterSobriety(e.target.value)}
        />
      </div>

      <div>
        <label>DM:</label>
        <input
          type="text"
          name="DM"
          placeholder="DM"
          onChange={(e) => setRegisterDM(e.target.value)}
        />
      </div>

      <div>
        <label>Combat Heaviness (1-5):</label>
        <input
          type="number"
          name="combatHeaviness"
          placeholder="combatHeaviness"
          min="1"
          max="5"
          onChange={(e) => setRegisterCombatHeaviness(e.target.value)}
        />
      </div>

      <div>
        <label>Strategy Heaviness (1-5):</label>
        <input
          type="number"
          name="strategyHeaviness"
          placeholder="strategyHeaviness"
          min="1"
          max="5"
          onChange={(e) => setRegisterStrategyHeaviness(e.target.value)}
        />
      </div>

      <div>
        <label>Roleplay Focus (1-5):</label>
        <input
          type="number"
          name="roleplayFocus"
          placeholder="roleplayFocus"
          min="1"
          max="5"
          onChange={(e) => setRegisterRoleplayFocus(e.target.value)}
        />
      </div>

      <div>
        <label>Story Focus (1-5):</label>
        <input
          type="number"
          name="storyFocus"
          placeholder="storyFocus"
          min="1"
          max="5"
          onChange={(e) => setRegisterStoryFocus(e.target.value)}
        />
      </div>

      <button onClick={register}>Create Account</button>
      <button onClick={getUser}>Test getUser</button>
    </div>

  );
}

export default Signup;
