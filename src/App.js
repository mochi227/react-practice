import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './App.css';
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="default" />
        <Menu />
      </div>
    );
  }
}

export default App;
