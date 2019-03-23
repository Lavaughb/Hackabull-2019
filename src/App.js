import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sub from './sub';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div>
          <div className="nav-bar">
            <div className="nav-bar-elements">Donatabull</div>
          </div>
          <header className="App-header">
            <div>
              <header>Question 1</header>
              <h1 className="questions">Who are you</h1>
              <h1 className="questions">Question 2</h1>
              <h1 className="questions">Who are you</h1>
              <h1 className="questions">Question 2</h1>
              <h1 className="questions">Who are you</h1>
            </div>
          </header>
        </div>
    );
  }
}

export default App;
