
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../components/UserProvider';

const AuthPage = (props) => {
  const { activeUser, setActiveUser } = useContext(UserContext);
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(activeUser);
  }, [activeUser]);

  return (
    <div className="background">
      <form>
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;


// we dont wanna see this screen. the assumption is that we're already signed in. we dont
// wanna see this screen. maybe on line 31 we make an axios request to the database
// and get the signed in users username, dont even show this pageXOffset, auto fill the input
// with the username and that gets us into the chat
