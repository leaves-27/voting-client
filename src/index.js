import React from 'react';
import { render } from "react-dom";
import Voting from './components/Voting';


const pair = ['Trainspotting', '28 Days Later'];

console.log("======Voting start=========");
console.log(Voting);
console.log("======Voting end=========");

render(
  <Voting pair={pair} />,
  document.getElementById('app')
);