import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Form/>
        <Layout/>
      </div>
    );
  }
}

export default App;
