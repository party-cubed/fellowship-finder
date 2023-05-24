/* eslint-disable no-undef */
import { useState } from 'react';

import './Chat.css';

import AuthPage from './AuthPage';
import ChatsPage from './ChatsPage';

function Chat() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    // eslint-disable-next-line no-shadow
    return <AuthPage onAuth={(user) => setUser(user)} />;
  }
  return <ChatsPage user={user} />;
}

export default Chat;
