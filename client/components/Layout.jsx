// import { Outlet, Link } from "react-router-dom";

// function Layout() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/">About</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   );
// }

function Layout({ children }) {
  return (
    <div>
      <header>
        Header
        {/* Insert header contents here */}
      </header>
      <main>{children}</main>
      <footer>
        Footer
        {/* Insert footer contents here */}
      </footer>
    </div>
  );
}

export default Layout;
