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
          console.log(`The result is ${util.inspect(result, {
            compact: false, depth: 5, breakLength: 80
          })}`);
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
      <Col className="text-center"><h5>{'Name'} </h5></Col>
      <Col className="text-center"><h5>{'Goal'} </h5></Col>
      <Col className="text-center"><h5>{'Done'} </h5></Col>
      <Col className="text-center"><h5>{'Graph'}</h5></Col>
    </Row>);

  Body = () => this.state.items.map((parcel) => (
    <Row className=".flex-row align-items-center">
      <Col className="text-right">{parcel.name}</Col>
      <Col className="text-center">{parcel.goal}</Col>
      <Col className="text-center">{parcel.done}</Col>
      <Col>
        <VictoryPie data={parcel.chart.chart} />
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
