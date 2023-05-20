/* global google */
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

function GoogleOAuth() {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false); // Track authentication state

  function handleCallbackResponse(response) {
    console.log(`Encoded JWT ID token: ${response.credential}`);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
    setAuthenticated(true); // Set authentication state to true
  }

  function handleSignOut(event) {
    setUser({});
    google.accounts.id.prompt();
  }

  // the client id here will need to be moved to a gitignore
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '111434177614-ecnk3ilhihnp3rdhu36thb3atrn35ve7.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    // this shows the sign in pop up box prompt
    google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        document.cookie = 'g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT';
        google.accounts.id.prompt();
      }
    });

    if (Object.keys(user).length !== 0) {
      setAuthenticated(true); // Set authentication state to true
    }
  }, [user]);
  // if no user: show signin button
  // if user: show the log out button

  return (
    <div className="App">
      {authenticated && (
        <div>
          <form>
            <label className="username_label" htmlFor="username">
              Username
              <input
                type="text"
                id="username"
                name="username"
              />
            </label>
            <label className="email_label" htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
              />
            </label>
            <label className="user_age_label" htmlFor="age">
              Age
              <input
                type="number"
                id="age"
                name="age"
              />
            </label>
            <label className="max_trabel_dist_label" htmlFor="max_trabel_dist_label">
              Maximum travel distance
              <input
                type="number"
                id="max_travel_dist"
                name="max_travel_dist"
              />
            </label>
            <label className="user_sobriety_label" htmlFor="user_sobriety_label">
              Sober?
              <select id="user_sobriety" name="user_sobriety">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="user_hostability" htmlFor="user_hostability">
              Can you host?
              <select id="hosting" name="hosting">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="user_DM_label" htmlFor="user_DM_label">
              Are you a dungeon master?
              <select id="dm_ing" name="dm_ing">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="combat_heaviness_label" htmlFor="combat_heaviness">
              Combat Heaviness 1 - 5
              <input
                type="number"
                id="combat_heaviness"
                name="combat_heaviness"
                min="1"
                max="5"
              />
            </label>
            <label className="rp_focus_label" htmlFor="rp_focus_label">
              Roleplay Focus 1 - 5
              <input
                type="number"
                id="rp_focus"
                name="rp_focus"
                min="1"
                max="5"
              />
            </label>
            <label className="strategy_heaviness_label" htmlFor="strategy_heaviness_label">
              Strategy Heaviness 1 - 5
              <input
                type="number"
                id="strategy_heaviness"
                name="strategy_heaviness"
                min="1"
                max="5"
              />
            </label>
            <label className="story_focus_label" htmlFor="story_focus_label">
              Story Focus 1 - 5
              <input
                type="number"
                id="story_focus"
                name="story_focus"
                min="1"
                max="5"
              />
            </label>
          </form>
        </div>
      )}

      {Object.keys(user).length !== 0 && (
        <div>
          <img src={user.picture} alt="" />
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
}

export default GoogleOAuth;
