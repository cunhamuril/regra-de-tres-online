import React from "react";
import Particles from "react-particles-js";

import { Main } from "./pages";
import { GlobalStyles } from "./theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <Particles
        height="99vh"
        style={{ position: "fixed", zIndex: 0 }}
        params={{
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: ["grab"],
              },
            },
          },
        }}
      />
      <Main />
    </>
  );
}

export default App;
