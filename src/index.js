import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import { render } from "react-dom";
import store from './store';

import App from './components/App';
import {Voting,VotingContainer} from './components/Voting';
import {Results,ResultsContainer} from './components/Results';

let routes = <Route path="/" component={App}>
      <Route path="/results" component={ResultsContainer} />
      <IndexRoute component={VotingContainer}/>
    </Route>;

render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);