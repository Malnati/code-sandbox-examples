import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../node_modules/react-vis/dist/style.css';

import { RadialChart } from 'react-vis';
import './App.css';

const reportData = [
  { name: 'Gustavo', goal: 10, done: 5 },
  { name: 'Renato', goal: 10, done: 5 },
  { name: 'Rafael', goal: 10, done: 5 },
];

const Rows = (props) => {
  return props.report.map((item) => (
    <>
      <Row>
        <Col>{item.name}</Col>
        <Col>{item.goal}</Col>
        <Col>{item.done}</Col>
        <Col>
          <RadialChart
            data={[{ angle: item.done }, { angle: item.goal }]}
            width={50}
            height={50}
          />
        </Col>
      </Row>
    </>
  ));
};

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome parcel goals report!</h1>
      <ExampleToast>
        Report
        <span role="img" aria-label="tada">
          . . 🎉
        </span>
        <Container fluid>
          <Rows report={reportData} />
        </Container>
      </ExampleToast>
    </Jumbotron>
  </Container>
);

export default App;
