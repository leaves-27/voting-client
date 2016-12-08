import {Map,List} from 'immutable';
import { combineReducers } from 'redux'; 

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

// const stateApp = function(state = Map(), action) {
//   switch (action.type) {
//     case 'SET_STATE':
//       return resetVote(setState(state, action.state));
//     case 'VOTE':
//       return vote(state,action.entry);
//   }
//   return state;
// }


function createReducer(initialState = Map(), handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}

const stateApp = createReducer(undefined,{
  ['SET_STATE'](state,action){
    return resetVote(setState(state, action.state))
  },
  ['VOTE'](state,action){
    return vote(state,action.entry);
  }
});

export default stateApp;