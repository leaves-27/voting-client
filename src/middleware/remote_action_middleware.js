
export default socket => store => next => action => {
  if(action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  
  console.log("store",store.getState());
  return next(action);
}