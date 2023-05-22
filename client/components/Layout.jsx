import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>𝓕𝓮𝓵𝓵𝓸𝔀𝓼𝓱𝓲𝓹 𝓕𝓲𝓷𝓭𝓮𝓻</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>𝕄𝕖𝕟𝕦</span>
        <FiMenu size={30} onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      {Header()}
      <hr />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
