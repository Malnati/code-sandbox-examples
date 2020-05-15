import React from 'react';

import BootstrapContainer from 'react-bootstrap/Container';

import Grid from './Grid';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';
import './App.css';

const App = () => (
  <>
    <BootstrapContainer>
      <h3 className="header">Live Report</h3>
    </BootstrapContainer>
    <BootstrapContainer>
      <Grid />
    </BootstrapContainer>
  </>
);

export default App;
