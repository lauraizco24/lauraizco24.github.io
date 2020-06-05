import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main'
import Route from 'react-router-dom/Route'
import { BrowserRouter } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <body><Header />
          <Main /></body>

      </div>
    );
  }
}
export default App;
