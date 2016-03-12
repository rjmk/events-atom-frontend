var Emitter = require('./events.js')

var hub = Emitter()

exports.createStore = function (reducer) {
  var state
  hub.on('dispatch', function (action) {
    state = reducer(state, action);
    hub.emit('dispatch_finished', state)
  })
  return {
    getState: function () { return state },
    dispatch: function (action) { return hub.emit('dispatch', action) },
    subscribe: function (fn) { hub.on('dispatch_finished', fn) }
  }
}

