import React from 'react';
import {RouteHandler} from 'react-router';
import {Provider} from 'react-redux';

import store from '../store';

export default React.createClass({
  render: function() {
    return <Provider store={store}> 
        {this.props.children}
      </Provider>
  }
});