var createStore = require('./redux.js').createStore

var store = createStore(reducer)

store.subscribe(function () {
  // the way we've set things up, store would be passed into this function
  // for compatibility with redux, we're getting the state from the store
  state = store.getState()
  document.querySelector('#content').innerHTML = (
    '<h1> THE STATE IS: ' + state + '</h1> \n' +
    '<button onclick=fn()>INCREMENT</button>'
  )
})

fn = function () {
  store.dispatch({ type: 'INC' })
}

function reducer (state, action) {
  switch (action.type) {
    case 'INC':
      return (state || 0) + 1
    default:
      return (state || 0)
  }
}

store.dispatch({ type: 'INIT' })

