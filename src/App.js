import React, { Component } from 'react';
//import logo from './logo.svg';
//import { BrowserRouter } from 'react-router-dom'
import classes from './App.css';
//import Container from './Container/Container'
import Layout from './Layout/Layout';



class App extends Component {
  render () {
    return (
      // <BrowserRouter>
      //  <div>
      // <Container/>
      // </div>
      // </BrowserRouter>
      <div className={classes.App}>
        <h1>GAMES AVAILABLE AT THE MOMENT</h1>
        <Layout/>
      </div>
     
    )
  }

};
export default App;

