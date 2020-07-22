import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Container from './Container/Container'



class App extends Component {
  render () {
    return (
      <BrowserRouter>
       <div>
      <Container/>
      </div>
      </BrowserRouter>
     
    )
  }

};
export default App;

