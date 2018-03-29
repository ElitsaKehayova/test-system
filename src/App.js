import React, { Component } from 'react';
import NavBar from './components/Navbar/Navbar';
import SingIn from './components/SingIn pannel/SingIn';
import Registration from './components/Registration panel/Registration';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SingIn />
        <Registration />
      </div>
    );
  }
}
export default App;
