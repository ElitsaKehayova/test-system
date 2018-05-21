import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import CardView from '../../components/Card view/CardView';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
          <Row>
            { Array(10).fill({}).map(() =>
              (<div className='col-sm-3'>
                <CardView />
              </div>)
            )}
          </Row>
      </div>
    );
  }
}
