import React from 'react';
// eslint-disable-next-line import/extensions
import GoogleOAuth from './GoogleOAuth.jsx';

function App() {
  return (
    <div>
      Hello World!
      {GoogleOAuth()}
    </div>
  );
}

export default App;
