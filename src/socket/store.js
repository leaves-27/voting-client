import {createStore,applyMiddleware} from 'redux';
import io from 'socket.io-client';

import { setState } from '../action/action_creators';
import reducer from '../reducer/reducer';

import remoteActionMiddleware from '../middleware/remote_action_middleware';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>{
  store.dispatch(setState(state))
});

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

export default  store;