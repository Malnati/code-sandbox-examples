import React from 'react';

import BootstrapContainer from 'react-bootstrap/Container';

import Grid from './Grid';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';
import './App.css';

const App = () => (
  <BootstrapContainer className="p-3">
    <h1 className="header">Report by Victory in the Grid</h1>
    <Grid />
  </BootstrapContainer>
);

export default App;
