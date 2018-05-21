import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../../components/Navbar/Navbar';
import SignIn from '../SignIn page/SignIn';
import Registration from '../Registration page/Registration';
import HomePage from '../Home page/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={SignIn} />
              <Route path='/register' component={Registration} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
