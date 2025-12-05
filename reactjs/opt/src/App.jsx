import React from "react";

import { Suspense } from "react";
import Error from "./Error";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Error />}>
        <Home />
      </Suspense>
      <Suspense fallback={<Error />}>
        <About />
      </Suspense>
    </div>
  );
};

export default App;
