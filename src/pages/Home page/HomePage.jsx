import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../../components/Navbar/Navbar';
import SignIn from '../SignIn page/SignIn';
import Registration from '../Registration page/Registration';
import './HomePage.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <nav role="nav">
            <a href={'/'}> Тестове </a>
            <a href={'/signin'}> Вход </a>
            <a href={'/registration'}> Регистрация </a>
          </nav> */}
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/'/>
              <Route exact path='/login' component={SignIn} />
              <Route exact path='/register' component={Registration} />
            </Switch>
          </div>

        </Router>

      </div>
    );
  }
}
export default App;
