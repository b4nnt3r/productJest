import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick () {
    if (this.state.clicks === 5) {
      this.setState({
        clicks: 0
      })
    } else {
      this.setState({
        clicks: this.state.clicks + 1
      })
    }
  }

  handleChange(event) {
    let newText = event.target.valuie
    this.setState({
      name: newText
    })
  }

    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <input name="first" placeholder="Brandon" value={this.state.name} onChange={this.handleChange.bind(this)} />
          <ul>
          <Child number={this.state.clicks}
          handleClick={this.handleClick.bind(this)}
          </ul>
        </div>
      );
    }
}

export default App;
