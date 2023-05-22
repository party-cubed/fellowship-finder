// eslint-disable-next-line import/no-unresolved
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import NoPage from './components/NoPage';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Signin from './components/Signin';
import ProfilePage from './components/ProfilePage';
import GoogleOAuth from './components/GoogleOAuth';

export default function App() {
  const [user, setUser] = useState({});
  return (
    <StrictMode>
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
                  <Route path="/profile:user" element={<ProfilePage />} />
                  <Route path="*" element={<NoPage />} />
                </Routes>
              </Layout>
            )}
          />
        </Routes>
      </Router>
    </StrictMode>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
