import React from "react";
import Route from "./pages";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Route />
    </>
  );
}

export default App;
