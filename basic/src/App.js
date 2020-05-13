import React, { Component } from 'react';

import BootstrapContainer from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { RadialChart } from 'react-vis';
import { VictoryPie } from 'victory';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';
import './App.css';

class PieChart extends Component {
  render() {
    return <VictoryPie />;
  }
}

const reportData = [
  {
    name: 'Gustavo Da Silva Sauro',
    goal: 10,
    done: 5,
    radialAngle: 3,
    radialRadius: 10,
  },
  {
    name: 'Renato dos Santos',
    goal: 9,
    done: 3,
    radialAngle: 13,
    radialRadius: 10,
  },
  {
    name: 'Rafael Malnati Rosa Lima',
    goal: 8,
    done: 2,
    radialAngle: 13,
    radialRadius: 10,
  },
];

const Rows = (props) => {
  return props.report.map((item) => (
    <Row className=".flex-row align-items-center">
      <Col>{item.name}</Col>
      <Col>{item.goal}</Col>
      <Col>{item.done}</Col>
      <Col>
        <RadialChart
          data={[
            {
              angle: item.radialAngle,
              radius: item.radialRadius,
              padAngle: 15,
              subLabel: 'With annotation',
              label: 'Test',
            },
          ]}
          width={100}
          height={100}
        />
      </Col>
    </Row>
  ));
};

const App = () => (
  <BootstrapContainer className="p-3">
    <h1 className="header">Report by ReactVis</h1>
    <BootstrapContainer fluid>
      <Rows report={reportData} />
    </BootstrapContainer>
    <h1 className="header">Report by Victory</h1>
    <PieChart />
  </BootstrapContainer>
);

export default App;
