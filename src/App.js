import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mike",
    }
  }
  render() {
    setTimeout(() => {
      this.setState({name: "Chris"})
    }, 1000)

    return (
      <div>
      {this.state.name}
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
