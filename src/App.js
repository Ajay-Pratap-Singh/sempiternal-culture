import React from 'react';
import Navbar from './components/Navbar/';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import styled from 'styled-components';
import About from './components/About';

const MainContainer=styled.div`
  display:flex;
`

function App() {
  return (
    <MainContainer>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
      </Switch>
    </MainContainer>
  );
}

export default App;
