import React, { Component } from 'react';

import BootstrapContainer from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { VictoryPie } from 'victory';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';
import './App.css';

const parcels = [
  {
    name: 'Gustavo Da Silva Sauro',
    goal: 10,
    done: 5,
    left: 5,
  },
  {
    name: 'Renato dos Santos',
    goal: 9,
    done: 3,
    left: 6,
  },
  {
    name: 'Rafael Malnati Rosa Lima',
    goal: 8,
    done: 2,
    left: 6,
  },
];

const calc = () => {
  return parcels.map((data) => {
    const sideA = {
      x: 'Done',
      y: data.done,
    };
    const blueB = {
      x: 'Left',
      y: data.left,
    };
    const containter = [sideA, blueB];
    data.chart = { containter };
    return data;
  });
};

class Slices extends Component {
  constructor(_props) {
    super();
    this.chart = _props.chart;
  }

  render() {
    return <VictoryPie data={this.chart.containter} />;
  }
}

const GridReport = (props) => {
  return props.report.map((parcel) => (
    <Row className=".flex-row align-items-center">
      <Col>{parcel.name}</Col>
      <Col>{parcel.goal}</Col>
      <Col>{parcel.done}</Col>
      <Col>
        <Slices chart={parcel.chart} />
      </Col>
    </Row>
  ));
};

const App = () => (
  <BootstrapContainer className="p-3">
    <h1 className="header">Report by Victory in the Grid</h1>
    <GridReport report={calc()} />
  </BootstrapContainer>
);

export default App;
