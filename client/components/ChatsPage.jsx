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

