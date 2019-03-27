import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = [
    {name:"santosh", age:29},
    {name:"amol", age:30}
  ];
  render() {
    return (
      <div className="App">
        <h1>Exploring</h1>
        <Person name={this.state[0].name} age={this.state[0].age}/>
        <Person name={this.state[1].name} age={this.state[1].age}/>
      </div>
    );
  }
}

export default App;
