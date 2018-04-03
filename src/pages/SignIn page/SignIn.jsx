import React from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel } from 'react-bootstrap';
import Butterfly from '../../assets/icons/butterfly.svg';
import './SignIn.scss';

export default class SingIn extends React.Component {
  render() {
    return (
      <Form horizontal className='horizontal'>
        <img src={Butterfly} className='image'/>
        <p className='text'>Тестове</p>
        <FormGroup controlId="formHorizontalEmail" className='email'>
          <Col componentClass={ControlLabel} sm={2}>
            <p>Имейл:</p>
            <p className='passwordText'>Парола:</p>
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Имейл" />
            <FormControl type="password" placeholder="Парола" className='password' />
          </Col>
        </FormGroup>

        <FormGroup sm={12}>
          <Button type="submit" className='singin'>Вход</Button>
          <Button type="submit" >Забравена парола</Button>
        </FormGroup>
      </Form>
    );
  }
}
