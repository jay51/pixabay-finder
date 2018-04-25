import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Form/>
        helllo world fro the app Component
      </div>
    );
  }
}

export default App;
