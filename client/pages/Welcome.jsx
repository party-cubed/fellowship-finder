import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../components/UserProvider';
import Login from './Login';
import welcome from '../assets/welcome.jpg';

const style = {
  background: {
    backgroundImage: `url(${welcome})`,
    backgroundSize: 'cover',
    height: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '100px',
    marginLeft: '200px',
    marginRight: '280px',
  },
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'end',
    marginBottom: '2em',
  },
  joinButton: {
    background: 'rgba(0, 0, 0, 0.25)',
    borderRadius: '15px',
    borderStyle: 'none',
    fontFamily: 'Nova Cut',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '1.8',
    width: '420px',
    color: '#FFFFFF',
    position: 'absolute',
    top: '50%',
    left: '15%',
  },
};


function Welcome() {
  // const { activeUser } = useContext(UserContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (activeUser) {
  //     navigate('/home');
  //   }
  // }, [activeUser, navigate]);

  return (
    <div style={style.background}>
      <div style={style.container}>
        <header style={style.header}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Login />
          </div>
        </header>
        <Link to="/signup">
          <button style={style.joinButton}>Join the Party</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
