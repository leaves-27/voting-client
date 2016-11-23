import React from 'react';
import { render } from "react-dom";
import Voting from './components/Voting';

const pair = ['Trainspotting','28 Days Later'];

render(
  <Voting pair={pair}  hasVoted="Trainspotting" winner="Trainspotting"/>,
  document.getElementById('app')
);