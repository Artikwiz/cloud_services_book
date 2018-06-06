import React, { Component } from 'react';
import { connect } from 'react-redux'
// import logo from './logo.svg';

import './App.css';

import TopAppBar from '../components/TopAppBar/index';
import AppDrawer from '../components/AppDrawer/index';
import MainContent from '../components/MainContent/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <TopAppBar />
        <AppDrawer />
        <MainContent />
        {/* <TopNavBar /> */}
      </div>
    );
  }
}

export default App;
// export default connect()(App);
