/* eslint-disable no-undef */
import React, { useEffect } from 'react';

function Chat() {
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', (event) => {
      CometChatWidget.init({
        appID: '239514ff94d7aa69',
        appRegion: 'us',
        authKey: '4d24b8f0128b82dbd0b76cbc11f71603bd05afba'
      }).then((response) => {
        console.log('Initialization completed successfully');
        //You can now call login function.
        CometChatWidget.login({
          uid: 'testuser'
        }).then((_response) => {
          CometChatWidget.launch({
            widgetID: 'd35ff6a8-4631-4846-9d0c-0b443f76c955',
            target: '#cometchat',
            roundedCorners: 'true',
            height: '600px',
            width: '800px',
            defaultID: 'superhero4', //default UID (user) or GUID (group) to show,
            defaultType: 'user' //user or group
          });
        }, (error) => {
          console.log('User login failed with error:', error);
          //Check the reason for error and take appropriate action.
        });
      }, (error) => {
        console.log('Initialization failed with error:', error);
        //Check the reason for error and take appropriate action.
      });
    });
  }, []);

  return (
    <body>
      <div id="cometchat" />
    </body>
  );
}

export default Chat;
