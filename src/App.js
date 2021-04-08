import React from 'react';
import {Route, Link} from 'react-router-dom';
import Google from './components/GoogleChart';
import Apex from './components/ApexCharts';
import HighCharts from './components/HighCharts';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <h1>React Chart Library Compare</h1>
      <ul style={{padding:'10px', margin:'10px 20px'}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/google">react-google-charts</Link>
        </li>
        <li>
          <Link to="/apex">react-apexcharts</Link>
        </li>
        <li>
          <Link to="/highchart">highCharts</Link>
        </li>
      </ul>
      <hr />
      <Route path='/' component={Home} exact/>
      <Route path="/google" component={Google} />
      <Route path="/apex" component={Apex}/>
      <Route path="/highchart" component={HighCharts}/>
    </div>
  );
};

export default App;