/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     'dee9ce42-872e-458d-aaff-8b5d651583e4',
//     props.user.username,
//     props.user.secret
//   );

//   return (
//     <div style={{ height: '100vh' }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
//     </div>
//   );
// };

// export default ChatsPage;


/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="dee9ce42-872e-458d-aaff-8b5d651583e4"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ChatsPage;


// import { useEffect } from 'react';
// import { PrettyChatWindow } from 'react-chat-engine-pretty';

// const ChatsPage = (props) => {
//   useEffect(() => {
//     const socket = new WebSocket(
//       `wss://api.chatengine.io/person/?publicKey=${encodeURIComponent(
//         props.projectId
//       )}&username=${encodeURIComponent(
//         props.user.username
//       )}&secret=${encodeURIComponent(props.user.secret)}`
//     );

//     socket.onopen = (event) => console.log(event);
//     socket.onclose = (event) => console.log(event);
//     socket.onmessage = (event) => console.log(event);
//     socket.onerror = (error) => console.log(error);

//     return () => {
//       socket.close(); // Close the WebSocket connection when the component unmounts
//     };
//   }, [props.projectId, props.user.username, props.user.secret]);

//   return (
//     <div style={{ height: '100vh' }}>
//       <PrettyChatWindow
//         projectId="dee9ce42-872e-458d-aaff-8b5d651583e4"
//         username={props.user.username}
//         secret={props.user.secret}
//         style={{ height: '100%' }}
//       />
//     </div>
//   );
// };

// export default ChatsPage;



// import React from 'react';
// import { ChatEngine } from 'react-chat-engine';

// const ChatsPage = (props) => {
//   return (
//     <div style={{ height: '100vh' }}>
//       <ChatEngine
//         publicKey="dee9ce42-872e-458d-aaff-8b5d651583e4"
//         userName={props.user.username}
//         userSecret={props.user.secret}
//         height="100%"
//       />
//     </div>
//   );
// };

// export default ChatsPage;

