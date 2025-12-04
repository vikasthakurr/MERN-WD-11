// import React from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import NestedComponent from "./NestedComponent";

// const App = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route path="nested" element={<NestedComponent />} />
//         </Route>
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Home from "./Home";

const App = () => {
  let isLoggedIn = true;
  return <div>{isLoggedIn ? <Home /> : "please login first"}</div>;
};

export default App;
