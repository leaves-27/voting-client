import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import { render } from "react-dom";

import App from './container/App';
import {Voting,VotingContainer} from './container/Voting';
import {Results,ResultsContainer} from './container/Results';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

let routes = <Route path="/" component={App} >
      <Route path="/results" component={ResultsContainer} />
      <IndexRoute component={VotingContainer}/>
    </Route>;

render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);