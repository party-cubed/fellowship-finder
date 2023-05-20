import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import NoPage from './components/NoPage';
import Welcome from './components/NoPage';

export default function App() {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NoPage />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </StrictMode>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
