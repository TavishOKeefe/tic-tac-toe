import React from 'react';
import Game from './Game';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import c from './../constants';


function App() {


  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=><Game />} />
      </Switch>
    </div>
  );
}

export default App;
