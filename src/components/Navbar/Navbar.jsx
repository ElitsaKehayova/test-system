import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import Butterfly from '../../assets/icons/butterfly.svg';
import './Navbar.scss';

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className='container-home'>
        <Navbar.Brand className='goHome'>
          <img src={Butterfly} className='image'/>
          <a href="/" role="button">Тестове</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullRight className='nav-items'>
            <NavItem eventKey={1} href="/register" >Регистрация</NavItem>
            <NavItem eventKey={2} href="/login" > Вход </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
