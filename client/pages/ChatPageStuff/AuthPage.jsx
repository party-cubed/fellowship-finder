
import axios from 'axios';


const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];

    axios.post(
      'http://localhost:3002/authenticate',
      { username: value }
    )
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((err) => console.error('Error: ', err));

    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    props.onAuth({ username: value, secret: value });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
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
