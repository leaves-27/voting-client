import Voting from '../../src/components/Voting';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag } = TestUtils;

console.log(renderIntoDocument);

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    console.log("=========text-start=======");
    //console.log(buttons[0]);

    buttons[0].map(function(item){
      console.log(typeof item)
      if (typeof item == "function") {
        console.log(item);
      }
      
    });
    console.log("=========text-end=======");

    expect(buttons.length).to.equal(2);
    expect(buttons[0].getDOMNode().textContent).to.equal('Trainspotting');
    expect(buttons[1].getDOMNode().textContent).to.equal('28 Days Later');
  });
});