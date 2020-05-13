import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';

import { RadialChart } from 'react-vis';
import './App.css';

const reportData = [
  { name: 'Gustavo Da Silva Sauro', goal: 5, done: 5 },
  { name: 'Renato', goal: 3, done: 7 },
  { name: 'Rafael Malnati Rosa Lima', goal: 8, done: 2 },
];

const Rows = (props) => {
  return props.report.map((item) => (
    <Row className=".flex-row align-items-center">
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
      <h1 className="header">Testing Rows</h1>
      <Container fluid>
        <Rows report={reportData} />
      </Container>
      <ExampleToast>
        Example Toast
        <span role="img" aria-label="tada">
          . . 🎉
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
);

export default App;
