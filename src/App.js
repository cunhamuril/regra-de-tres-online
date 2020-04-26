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
        params={{
          particles: {
            number: {
              value: 50,
            },
          },
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
