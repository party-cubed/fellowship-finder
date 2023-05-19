import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, camelcase
import jwt_decode from 'jwt-decode';

function GoogleOAuth() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log(`Encoded JWT ID token: ${response.credential}`);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  }

  // eslint-disable-next-line no-unused-vars
  function handleSignOut(event) {
    setUser({});
    google.accounts.id.prompt();
  }

  // the client id here will need to be moved to a gitignore
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '111434177614-ecnk3ilhihnp3rdhu36thb3atrn35ve7.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    // google.accounts.id.renderButton(
    //   document.getElementById('signInDiv'),
    //   { theme: 'outline', size: 'large' }
    // );

    // this shows the sign in pop up box prompt
    google.accounts.id.prompt();
  }, []);
  // if no user: show signin button
  // if user: show the log out button
  return (
    // <div>Hello World!</div>
    <div className="App">
      {/* <div id="signInDiv" /> */}
      { Object.keys(user).length !== 0
        && <button type="button" onClick={(event) => handleSignOut(event)}>Sign Out</button>}

      { user
        && (
        <div>
          <img src={user.picture} alt="" />
          <h3>{user.name}</h3>
        </div>
        )}
    </div>
  );
}

export default GoogleOAuth;
