import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux';

import './App.css';

import TopAppBar from '../components/TopAppBar/index';
import AppDrawer from '../components/AppDrawer/index';
import MainContent from '../components/MainContent/index';

import { changeRoot } from '../actions/navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer_open: false,
    };
  }

  handleOpenDrawer = () => {
    this.setState({
      drawer_open: true,
    });
  };

  handleCloseDrawer = () => {
    this.setState({
      drawer_open: false,
    });
  };

  handleDrawerClickItem = (label, pathname) => {
    this.props.dispatch(changeRoot(label, pathname));
    this.props.dispatch(push(pathname));
    this.handleCloseDrawer();
  };

  handleSearchBarItemSelected = (label, pathname) => {
    this.props.dispatch(changeRoot(label, pathname));
    this.props.dispatch(push(pathname));
  };

  handle
  render() {
    const { navigation } = this.props;
    return (
      <div className="App">
        <TopAppBar onClickDrawerButton={this.handleOpenDrawer}
          onSearchBarItemSelected={this.handleSearchBarItemSelected}
          roots={navigation.roots} />
        <AppDrawer open={this.state.drawer_open}
          roots={navigation.roots}
          onClickItem={this.handleDrawerClickItem}
          onClick={this.handleCloseDrawer} />
        <MainContent activeRoot={navigation.activeRoot} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
  };
};

export default connect(mapStateToProps)(App);
