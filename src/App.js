import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">

        <header className="header layout-padding">
          <div className="logo-container">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
        </header>

        <nav className="nav layout-padding">
          Navigation
        </nav>

        <main className="main layout-padding">
          Main content
        </main>

        <footer className="footer layout-padding">
          Andy Pope
        </footer>
      </div>
    );
  }
}

export default App;
