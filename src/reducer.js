import {Map,List} from 'immutable';
import { combineReducers } from 'redux'; 
import { createReducer } from 'redux-convenient-utils'; 

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry){
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted',entry);
  }else{
    return state;
  }
}

function resetVote(state){
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], List());
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  }else{
    return state;
  }
}

const stateApp = createReducer(Map(),{
  ['SET_STATE'](state,action){
    return resetVote(setState(state, action.state))
  },
  ['VOTE'](state,action){
    return vote(state,action.entry);
  }
});

export default stateApp;