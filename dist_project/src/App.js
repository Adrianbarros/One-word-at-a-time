import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import WordsList from './components/wordList';
import AddWord from './components/wordAdd';



export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={AddWord} />
        <Route path="/word-list" component={WordsList} />
      </Router>
    )
  }
}

export default App;

