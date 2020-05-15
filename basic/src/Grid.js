import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { VictoryPie } from 'victory';

const util = require('util');

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    fetch('http://localhost:3001/distribution')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(`The result is ${util.inspect(result)}`);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  Header = () => (
    <Row className=".flex-row align-items-center">
      <Col><h6>{'Name'}</h6></Col>
      <Col><h6>{'Goal'}</h6></Col>
      <Col><h6>{'Done'}</h6></Col>
      <Col><h6>{'Graph'}</h6></Col>
    </Row>);

  Body = () => this.state.items.map((parcel) => (
    <Row className=".flex-row align-items-center">
      <Col>{parcel.name}</Col>
      <Col>{parcel.goal}</Col>
      <Col>{parcel.done}</Col>
      <Col>
        <VictoryPie data={parcel.chart.containter} />
      </Col>
    </Row>
  ));

  render() {
    const grid = (
      <>
        <this.Header />
        <this.Body />
      </>
    );
    return grid;
  }
}
