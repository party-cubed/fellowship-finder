/* eslint-disable no-undef */
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../components/UserProvider';
//import './Chat.css';
import io from 'socket.io-client'
import axios from 'axios'
const socket = io('http://localhost:3001')

import AuthPage from './AuthPage';
import ChatsPage from './ChatsPage';

function Chat() {
  const [room, setRooms] = useState(null)
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    axios.get('api/event/all')

  
      socket.emit('room', room)
  
  }, [])


  return(
    <div>
      <h1>Chat</h1>
      <span>{}</span>
      <ChatsPage></ChatsPage>
      </div>
  )

  // if (!user) {
  //   // eslint-disable-next-line no-shadow
  //   return <AuthPage onAuth={(user) => setUser(user)} />;
  // // eslint-disable-next-line no-else-return
  // } else {
  //   return <ChatsPage user={user} />;
  // }
}

export default Chat;
