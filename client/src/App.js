import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          data: null,
      }

  }

  componentDidMount() {
      const apiUrl = '/helloworld'
      fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => this.setState({data: json}));

  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p>{this.state.data}</p>
          </header>
        </div>
      );
  }
}

export default App;
