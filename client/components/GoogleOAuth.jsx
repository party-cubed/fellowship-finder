// /* global google */
// import React, { useEffect, useState } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import { FormInput, inputsArr } from './SignupForm';


// function GoogleOAuth() {
//   const [user, setUser] = useState({});
//   const [authenticated, setAuthenticated] = useState(false); // Track authentication state
//   const location = useLocation();
//   const [userInfo, setUserInfo] = useState({
//     username: '',
//     email: '',
//     age: '',
//     maxTravelDist: '',
//     canHost: '',
//     DM: '',
//     combatHeaviness: '',
//     strategyHeaviness: '',
//     roleplayFocus: '',
//     storyFocus: '',
//   });

//   //grabs all the questions from SignupForm.jsx
//   const inputs = inputsArr;

//   function handleCallbackResponse(response) {
//     const userObject = jwt_decode(response.credential);
//     console.log(userObject.email);
//     setUser(userObject);
//     document.getElementById('signInDiv').hidden = true;
//     setAuthenticated(true); // Set authentication state to true
//   }


//   // useEffect(() => {
//   //   //had to add this to check to see if we were on signup.
//   //   //otherwise the prompt box was displaying on all pages
//   //   // if (location.pathname === '/signup') {
//   //   //   google.accounts.id.initialize({
//   //   //     client_id: '111434177614-ecnk3ilhihnp3rdhu36thb3atrn35ve7.apps.googleusercontent.com',
//   //   //     callback: handleCallbackResponse
//   //   //   });

//   //     //  shows the signin prompt
//   //     google.accounts.id.prompt((notification) => {
//   //       if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
//   //         document.cookie = 'g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT';
//   //         google.accounts.id.prompt();
//   //       }
//   //     });
//   //   }
//   //   //basically if user has length that means it was authorized correctly
//   //   if (Object.keys(user).length !== 0) {
//   //     setAuthenticated(true); // Set authentication state to true
//   //   }
//   // }, [location.pathname, user]);
//   // if no user: show signin button
//   // if user: show the log out button


//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(userInfo);
//   }

//   const onChange = (e) => {
//     setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="App">
//       {authenticated && (
//         <div>
//           <form onSubmit={handleSubmit}>
//             {/* maps each input based on its id key */}
//             {inputs.map((input) => (
//               <FormInput
//                 key={input.id}
//                 // eslint-disable-next-line react/jsx-props-no-spreading
//                 {...input}
//                 value={userInfo[input.name]}
//                 onChange={onChange}
//               />
//             ))}
//             <button onClick={handleSubmit}> TEST SUBMIT BTN</button>
//           </form>
//           <Link to="/home">
//             <button>Create Account</button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GoogleOAuth;
