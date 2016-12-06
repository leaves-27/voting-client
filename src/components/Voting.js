import React from 'react';
import {connect} from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  mixins:[PureRenderMixin],
  render: function(){
    return <div>
      {
        this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <form className="form-horizontal" role="form">
          <div className="form-group form-group-lg">
            <Vote {...this.props} />
          </div>
        </form>
      }
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps,actionCreators)(Voting);