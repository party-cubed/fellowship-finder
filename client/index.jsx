import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { useState, StrictMode } from 'react';
import { UserProvider } from './components/UserProvider';
import App from './App';

export default function Index() {
  const [user, setUser] = useState({});

  return (
    <StrictMode>
      <UserProvider>
        <Router>
          <App setUser={setUser} />
        </Router>
      </UserProvider>
    </StrictMode>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<Index />);

// // eslint-disable-next-line import/no-unresolved, object-curly-newline
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { createRoot } from 'react-dom/client';
// import { StrictMode, useState, useContext } from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { UserContext, UserProvider } from './components/UserProvider';
// import Home from './pages/Home';
// import Layout from './pages/Layout';
// import About from './pages/About';
// import Events from './pages/Events';
// import NoPage from './pages/NoPage';
// import Signup from './pages/Signup';
// import Signin from './pages/Signin';
// import Profile from './pages/Profile';
// import Welcome from './pages/Welcome';
// import GoogleOAuth from './components/GoogleOAuth';
// import Chat from './pages/ChatPageStuff/Chat';
// import Search from './components/Search';
// import Login from './pages/Login';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });


// export default function App() {
//   const [user, setUser] = useState({});
//   const { activeUser } = useContext(UserContext);
  
//   return (
//     <StrictMode>
//       <UserProvider>
//         <ThemeProvider theme={darkTheme}>
//           <CssBaseline>
//             <Router>
//               <GoogleOAuth setUser={setUser} />
//               <Routes>
//                 <Route path="/" element={<Navigate to="/welcometraveler" />} />
//                 <Route path="/welcometraveler" element={<Welcome />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/signin" element={<Signin />} />
//                 <Route
//                   path="*"
//                   element={(
//                     <Layout>
//                       <Routes>
//                         {/* <Route path="/home" element={activeUser ? <Home /> : <Navigate to="/welcometraveler" replace />} />
//                         <Route path="/about" element={activeUser ? <About /> : <Navigate to="/welcometraveler" replace />} />
//                         <Route path="/events" element={activeUser ? <Events /> : <Navigate to="/welcometraveler" replace />} />
//                         <Route path="/user/:id" element={activeUser ? <Profile /> : <Navigate to="/welcometraveler" replace />} />
//                         <Route path="/search" element={activeUser ? <Search /> : <Navigate to="/welcometraveler" replace />} />
//                         <Route path="/auth/login" element={activeUser ? <Login /> : <Navigate to="/welcometraveler" replace />} />
//                         <Route path="/chat" element={activeUser ? <Chat /> : <Navigate to="/welcometraveler" replace />} />
//                         <Route path="*" element={<NoPage />} /> */}
//                       </Routes>
//                     </Layout>
//                   )}
//                 />
//               </Routes>
//             </Router>
//           </CssBaseline>
//         </ThemeProvider>
//       </UserProvider>
//     </StrictMode>
//   );
// }

// const root = createRoot(document.getElementById('app'));
// root.render(<App />);
