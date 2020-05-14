import React from 'react';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';

import { RadialChart } from 'react-vis';
import './Dashboard.css';

/**
 * Acreito que devemos fazer um ajuste no json.
 * Podemos definir de receber os valores do gráfico já calculadas.
 * O back-end deve fazer isto, pois o Front-end só exibe.
 *
 */
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

const Dashboard = () => (
  <Container className="p-3">
    <h1 className="header">Report</h1>
    <Container fluid>
      <Rows report={reportData} />
    </Container>
  </Container>
);

export default Dashboard;
