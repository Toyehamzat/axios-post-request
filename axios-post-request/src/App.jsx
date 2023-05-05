import { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Main from "./components/Main";
function App() {
  return (

      <Section>
        <Header />
        <Main />
      </Section>

  );
}

const Section = styled.div`
text-align: center;
  margin: auto;
  height: 700px;
  width: 320px;
  
`

export default App;
