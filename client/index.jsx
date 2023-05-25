// eslint-disable-next-line import/no-unresolved
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Events from './pages/Events';
import NoPage from './pages/NoPage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';
import GoogleOAuth from './components/GoogleOAuth';
import UserProvider from './components/UserProvider';
import Search from './components/Search';
import Login from './pages/Login';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  const [user, setUser] = useState({});
  return (
    <StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <Router>
            <GoogleOAuth setUser={setUser} />
            <Routes>
              <Route path="/" element={<Navigate to="/welcometraveler" />} />
              <Route path="/welcometraveler" element={<Welcome />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route
                path="*"
                element={(
                  <Layout>
                    <UserProvider>
                      <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/user/:id" element={<Profile />} />
                        <Route path="/search" element={<Search currUser={user} />} />
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="*" element={<NoPage />} />
                      </Routes>
                    </UserProvider>
                  </Layout>
                )}
              />
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </StrictMode>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
