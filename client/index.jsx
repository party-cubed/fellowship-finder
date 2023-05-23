// eslint-disable-next-line import/no-unresolved
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ProfilePage from './pages/ProfilePage';
import GoogleOAuth from './components/GoogleOAuth';

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
              <Route path="/" element={<Welcome />} />
              <Route path="/welcometraveler" element={<Welcome />} />
              <Route
                path="*"
                element={(
                  <Layout>
                    <Routes>
                      <Route path="/home" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/signin" element={<Signin />} />
                      <Route path="/user/:id" element={<ProfilePage />} />
                      <Route path="*" element={<NoPage />} />
                    </Routes>
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
