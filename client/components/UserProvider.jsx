// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-no-constructed-context-values */
// import React, { createContext, useState } from 'react';

// const UserContext = createContext();

// function UserProvider({ children }) {
//   const [user, setUser] = useState(2);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export default UserProvider;

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [activeUser, setActiveUser] = useState(null);

  const getUser = () => {
    axios.get('http://localhost:3001/auth/login/success', {
      withCredentials: true,
    })
      .then((response) => {
        const { data } = response;
        setActiveUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </UserContext.Provider>
  );
}

