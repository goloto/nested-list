import React from 'react';
import styled from 'styled-components';

function App() {
  const Header = styled.header`
    height: 10vh;
    background-color: cornflowerblue;
  `;

  const Footer = styled.footer`
    height: 10vh;
    background-color: grey;
  `;

  const Main = styled.main`
    min-height: 80vh;
  `;

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
