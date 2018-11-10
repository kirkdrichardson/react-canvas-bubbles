import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>Bubbles!</Header>
      </AppContainer>
    );
  }
}


const headerHeight = 100;

const AppContainer = styled.div`
  padding: 20px;
  marginTop: ${headerHeight}px;
  color: white;
  font-size: 30px;
  position: relative;
`;

const Header = styled.div`
  background-color: green;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: ${headerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default App;
