import React from 'react';
import { Form, FormGroup, Col, Button, FormControl, ControlLabel } from 'react-bootstrap';
import Butterfly from '../../assets/icons/butterfly.svg';
import './Registration.scss';

export default class Registration extends React.Component {
  render() {
    return (
      <Form horizontal className='horizontal'>
        <img src={Butterfly} className='image'/>
        <p className='text'>Тестове</p>
        <FormGroup controlId="formHorizontalEmail" className='email'>
          <Col componentClass={ControlLabel} sm={2}>
            <p> Име: </p>
            <p className='textInput'> Презиме: </p>
            <p className='textInput'> Фамилия: </p>
            <p className='textInput'> Имейл: </p>
            <p className='textInput'> Парола: </p>
            <p className='textInputPassword'> Повтори парола: </p>
            <p className='textInputPhone'> Телефон: </p>
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Име" className='name' />
            <FormControl type="text" placeholder="Презиме" className='field' />
            <FormControl type="text" placeholder="Фамилия" className='field' />
            <FormControl type="email" placeholder="Имейл" className='field' />
            <FormControl type="password" placeholder="Парола" className='field' />
            <FormControl type="password" placeholder="Повтори парола" className='field' />
            <FormControl type="text" placeholder="Телефон" className='field' />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Button type="submit" className='save'>Запази</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
